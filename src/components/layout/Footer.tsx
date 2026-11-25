import { Link } from 'react-router'

const quickLinks = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Hakkımızda', path: '/hakkimizda' },
  { label: 'Platformumuz', path: '/platformumuz' },
  { label: 'İletişim', path: '/iletisim' },
]

const platformLinks = [
  { label: 'Nasıl Çalışır?', path: '/#nasil-calisir' },
  { label: 'Neden ENTIR?', path: '/#neden-entir' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10 lg:pt-20">

        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block text-4xl font-bold tracking-tight text-sage"
            >
              entır.
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
              ENTIR, yük sahipleri ile nakliyecileri aynı dijital
              platformda buluşturarak taşımacılık süreçlerini
              daha erişilebilir ve düzenli hale getirmeyi amaçlar.
            </p>

            <div className="mt-8 h-1 w-14 rounded-full bg-brand-secondary" />
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hızlı Bağlantılar
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-sage"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Platform
            </h3>

            <ul className="mt-6 space-y-4">
              {platformLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-sage"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/15 pt-8">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

            <p className="text-xs text-gray-400">
              © {currentYear} ENTIR. Tüm hakları saklıdır.
            </p>

            <p className="text-xs text-gray-400">
              Taşımacılığın dijital buluşma noktası.
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer