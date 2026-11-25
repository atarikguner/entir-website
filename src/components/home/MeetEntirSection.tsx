import { Link } from 'react-router'

function MeetEntirSection() {
  return (
    <section
      id="bizi-taniyin"
      className="relative overflow-hidden bg-brand-hover py-20 sm:py-24 lg:py-28"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sage/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sage/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* Left: Heading */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            BİZİ TANIYIN
          </span>

          <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Taşımacılığın dönüşümünde
            <span className="mt-2 block text-sage">
              yeni bir adım.
            </span>
          </h2>

          {/* Decorative line */}
          <div
            aria-hidden="true"
            className="mt-9 h-1 w-16 rounded-full bg-sage/70"
          />
        </div>

        {/* Right: Description */}
        <div className="lg:border-l lg:border-sage/25 lg:pl-10">
          <p className="text-base leading-8 text-gray-100 sm:text-lg">
            Taşımacılık, birbirinden farklı ihtiyaçların ve
            fırsatların buluştuğu dinamik bir sektör. ENTIR'ı,
            bu buluşmayı dijital dünyada daha kolay, daha
            anlaşılır ve daha erişilebilir hale getirme
            fikriyle geliştiriyoruz.
          </p>

          <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
            Amacımız yalnızca yeni bir platform oluşturmak
            değil; yük sahiplerinin, nakliyecilerin ve
            sektörün diğer paydaşlarının daha güçlü
            bağlantılar kurabildiği, teknolojinin günlük
            iş süreçlerine gerçek değer kattığı bir yapı
            geliştirmek.
          </p>

          {/* CTA */}
          <Link
            to="/hakkimizda"
            className="group mt-10 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-sage px-7 py-3 text-sm font-semibold text-brand-hover transition-all duration-200 hover:bg-white hover:shadow-lg hover:shadow-black/20"
          >
            Hikâyemizi Keşfedin

            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default MeetEntirSection