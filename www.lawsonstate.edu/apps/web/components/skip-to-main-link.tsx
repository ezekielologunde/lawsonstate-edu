export default function SkipToMainLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:rounded focus:outline focus:outline-2 focus:outline-offset-2"
    >
      Skip to main content
    </a>
  )
}
