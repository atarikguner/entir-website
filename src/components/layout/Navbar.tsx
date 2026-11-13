import { useState } from 'react'
import { Link, NavLink } from 'react-router'

const navigationLinks = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Hakkımızda', path: '/hakkimizda' },
  { label: 'Platformumuz', path: '/platformumuz' },
  { label: 'İletişim', path: '/iletisim' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getNavLinkClass = (isActive: boolean) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-brand'
        : 'text-gray-700 hover:text-brand'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10"
        aria-label="Ana navigasyon"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="inline-flex shrink-0 items-center"
          aria-label="ENTIR Ana Sayfa"
        >
          <img
            src="/images/entir_logo.png"
            alt="ENTIR"
            className="h-13 w-auto object-contain sm:h-14 lg:h-15"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop download button */}
        <button
          type="button"
          disabled
          title="Uygulamamız yakında yayında"
          className="hidden cursor-not-allowed rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white opacity-70 md:block"
        >
          Uygulamayı İndir
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-800 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border-soft bg-white px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}

            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white opacity-70"
            >
              Uygulamayı İndir
            </button>

            <p className="text-center text-xs text-gray-500">
              Uygulamamız yakında yayında.
            </p>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar