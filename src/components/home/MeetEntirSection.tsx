import { Link } from 'react-router'

function MeetEntirSection() {
  return (
    <section
      id="bizi-taniyin"
      className="relative overflow-hidden bg-brand-hover py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sage/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left: Heading */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            Bizi Tanıyın
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Lojistiğin geleceğine
            <span className="block text-sage">
              birlikte yön verelim.
            </span>
          </h2>
        </div>

        {/* Right: Description */}
        <div>
          <p className="text-base leading-8 text-gray-200 sm:text-lg">
            ENTIR, taşımacılık sektöründe yük sahipleri ile nakliyeciler
            arasındaki bağlantıyı güçlendirmek amacıyla geliştirilen
            dijital bir lojistik platformudur.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            Teknolojiyi lojistik süreçlerle bir araya getirerek daha
            erişilebilir, şeffaf ve düzenli bir taşımacılık ekosistemi
            oluşturmayı hedefliyoruz.
          </p>

          <Link
            to="/hakkimizda"
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-sage px-7 py-3 text-sm font-semibold text-brand-hover transition-all duration-200 hover:bg-white hover:shadow-lg hover:shadow-black/20"
          >
            Hakkımızda Daha Fazla Bilgi
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MeetEntirSection