'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    // TODO: wire to a real subscription endpoint
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="max-w-md">
      <h3
        className="font-display font-bold mb-2"
        style={{ fontSize: '1.25rem', color: 'white' }}
      >
        Stay Connected
      </h3>
      <p className="text-sm mb-4" style={{ color: 'oklch(1 0 0 / 0.55)' }}>
        Get news, events, and program updates in your inbox.
      </p>

      {submitted ? (
        <p
          className="text-sm font-semibold py-2.5"
          style={{ color: 'oklch(0.79 0.19 78)' }}
          role="status"
        >
          Thanks — you&apos;re on the list. Watch your inbox.
        </p>
      ) : (
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2.5 rounded-lg text-sm"
            style={{
              background: 'oklch(0.26 0.08 263)',
              border: '1px solid oklch(1 0 0 / 0.15)',
              color: 'white',
            }}
            required
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
            style={{
              background: 'oklch(0.79 0.19 78)',
              color: 'oklch(0.11 0.03 261)',
            }}
          >
            Sign Up
          </button>
        </form>
      )}

      <p className="text-xs mt-2" style={{ color: 'oklch(1 0 0 / 0.40)' }}>
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  )
}
