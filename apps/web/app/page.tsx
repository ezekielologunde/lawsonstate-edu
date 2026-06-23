import Link from "next/link";

const quickLinks = [
  {
    title: "Admissions",
    href: "/admissions",
    description: "Apply for enrollment and discover our programs",
  },
  {
    title: "Academics",
    href: "/academics",
    description: "Browse courses, departments, and academic resources",
  },
  {
    title: "Student Portal",
    href: "/portal",
    description: "Access your schedule, grades, and financial aid",
  },
  {
    title: "About Us",
    href: "/about",
    description: "Learn about Lawson State Community College",
  },
];

const announcements = [
  {
    date: "Jun 23, 2026",
    title: "Fall 2026 Registration Open",
    body: "Registration for Fall 2026 semester is now open for all current students.",
  },
  {
    date: "Jun 20, 2026",
    title: "Campus Closure — Independence Day",
    body: "The campus will be closed on July 4, 2026 in observance of Independence Day.",
  },
  {
    date: "Jun 15, 2026",
    title: "Financial Aid Deadline",
    body: "Submit your FAFSA by July 1st to ensure aid for the upcoming semester.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight">LAWSON STATE</p>
            <p className="text-blue-200 text-xs tracking-widest uppercase">Community College</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/admissions" className="hover:text-blue-200 transition-colors">
              Admissions
            </Link>
            <Link href="/academics" className="hover:text-blue-200 transition-colors">
              Academics
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link
              href="/portal"
              className="bg-white text-blue-900 px-4 py-1.5 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              Portal Login
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-blue-900 text-white pb-16 pt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Future Starts Here</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Empowering students through quality education, career training, and community leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/academics"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{link.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">
            Announcements
          </h2>
          <div className="flex flex-col gap-4">
            {announcements.map((a) => (
              <div
                key={a.title}
                className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800"
              >
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {a.date}
                </p>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{a.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{a.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-zinc-500">
          <p className="font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
            Lawson State Community College
          </p>
          <p>3060 Wilson Rd SW, Birmingham, AL 35221</p>
          <p className="mt-1">© 2026 Lawson State Community College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
