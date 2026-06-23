import { loginAction } from '../actions'

export default function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'oklch(0.27 0.13 263)' }}
    >
      <div
        className="w-full max-w-sm rounded-xl p-8"
        style={{ background: 'oklch(0.98 0.008 263)' }}
      >
        <div className="mb-8">
          <div
            className="font-display font-black text-2xl mb-1"
            style={{ color: 'oklch(0.27 0.13 263)', letterSpacing: '-0.02em' }}
          >
            LSCC Admin
          </div>
          <p className="text-sm" style={{ color: 'oklch(0.50 0.05 263)' }}>
            Content management
          </p>
        </div>

        <form action={loginAction} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'oklch(0.27 0.13 263)' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="w-full px-3 py-2.5 rounded-lg text-sm border"
              style={{
                border: '1.5px solid oklch(0.85 0.02 263)',
                background: 'white',
                color: 'oklch(0.14 0.02 263)',
                outline: 'none',
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all hover:brightness-105"
            style={{ background: 'oklch(0.27 0.13 263)', color: 'white' }}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
