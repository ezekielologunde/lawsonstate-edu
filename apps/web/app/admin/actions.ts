'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createHash } from 'node:crypto'
import { createAdminClient } from '@/lib/supabase-admin'

function sessionToken() {
  return createHash('sha256')
    .update((process.env.ADMIN_SECRET ?? 'changeme') + 'lscc-admin')
    .digest('hex')
}

export async function requireAdmin() {
  const store = await cookies()
  if (store.get('admin_session')?.value !== sessionToken()) redirect('/admin/login')
}

export async function loginAction(formData: FormData) {
  const pw = formData.get('password') as string
  if (pw === process.env.ADMIN_SECRET) {
    const store = await cookies()
    store.set('admin_session', sessionToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    redirect('/admin')
  }
  redirect('/admin/login?error=1')
}

export async function logoutAction() {
  const store = await cookies()
  store.delete('admin_session')
  redirect('/admin/login')
}

export async function upsertContent(formData: FormData) {
  await requireAdmin()
  await createAdminClient().from('page_content').upsert({
    page_slug: formData.get('page_slug'),
    section:   formData.get('section'),
    key:       formData.get('key'),
    value:     formData.get('value'),
  }, { onConflict: 'page_slug,section,key' })
  revalidatePath('/')
  revalidatePath('/admin/content')
}

export async function updateDepartment(formData: FormData) {
  await requireAdmin()
  await createAdminClient().from('departments').update({
    name:             formData.get('name'),
    description:      formData.get('description'),
    tag:              formData.get('tag'),
    href:             formData.get('href'),
    grid_slot:        formData.get('grid_slot'),
    display_order:    Number(formData.get('display_order') ?? 0),
    is_featured_home: formData.get('is_featured_home') === '1',
  }).eq('id', formData.get('id') as string)
  revalidatePath('/')
  revalidatePath('/admin/programs')
}

export async function saveAnnouncement(formData: FormData) {
  await requireAdmin()
  const db = createAdminClient()
  const row = {
    title:        formData.get('title'),
    excerpt:      formData.get('excerpt'),
    href:         formData.get('href'),
    category:     formData.get('category') || 'Campus News',
    image_url:    (formData.get('image_url') as string) || null,
    is_featured:  formData.get('is_featured') === '1',
    is_published: formData.get('is_published') === '1',
  }
  const id = formData.get('id') as string
  if (id) {
    await db.from('announcements').update(row).eq('id', id)
  } else {
    await db.from('announcements').insert({ ...row, published_at: new Date().toISOString() })
  }
  revalidatePath('/')
  revalidatePath('/admin/announcements')
}

export async function deleteAnnouncement(formData: FormData) {
  await requireAdmin()
  await createAdminClient().from('announcements').delete().eq('id', formData.get('id') as string)
  revalidatePath('/')
  revalidatePath('/admin/announcements')
}

export async function saveEvent(formData: FormData) {
  await requireAdmin()
  const db = createAdminClient()
  const row = {
    title:        formData.get('title'),
    event_date:   formData.get('event_date'),
    href:         formData.get('href'),
    is_published: formData.get('is_published') === '1',
    sort_order:   Number(formData.get('sort_order') ?? 0),
  }
  const id = formData.get('id') as string
  if (id) {
    await db.from('events').update(row).eq('id', id)
  } else {
    await db.from('events').insert(row)
  }
  revalidatePath('/')
  revalidatePath('/admin/events')
}

export async function deleteEvent(formData: FormData) {
  await requireAdmin()
  await createAdminClient().from('events').delete().eq('id', formData.get('id') as string)
  revalidatePath('/')
  revalidatePath('/admin/events')
}
