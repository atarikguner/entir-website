import { Link } from 'react-router'

function AboutPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          1. PAGE HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">

        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage/35 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sage/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          {/* Section label */}
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            HAKKIMIZDA
          </span>

          {/* Heading */}
          <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[4rem]">
            Taşımacılıkta yeni bir
            <span className="mt-2 block text-brand">
              bağlantı kuruyoruz.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Taşımacılıkta doğru insanları ve doğru fırsatları
            buluşturmanın daha kolay bir yolu olması gerektiğine
            inanıyoruz. ENTIR'ı, bu düşünceden yola çıkarak
            sektörün farklı tarafları arasında güçlü dijital
            bağlantılar kurmak için geliştiriyoruz.
          </p>

          {/* Decorative line */}
          <div
            aria-hidden="true"
            className="mt-10 h-1 w-20 rounded-full bg-brand/60"
          />

        </div>
      </section>


      {/* =====================================================
          2. OUR STORY
      ===================================================== */}
      <section className="py-20 sm:py-24 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">

          {/* Left: Heading */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              HİKÂYEMİZ
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Bir ihtiyaçtan
              <span className="block text-brand">
                doğan fikir.
              </span>
            </h2>

            {/* Decorative line */}
            <div
              aria-hidden="true"
              className="mt-9 hidden h-1 w-16 rounded-full bg-sage lg:block"
            />
          </div>

          {/* Right: Story */}
          <div className="max-w-2xl space-y-7 text-base leading-8 text-gray-600 sm:text-lg">

            <p>
              Taşımacılık sektöründe doğru yükü veya doğru
              taşıyıcıyı bulmak her zaman kolay olmayabiliyor.
              Farklı kanallar üzerinden yürütülen görüşmeler,
              teklif süreçleri ve bilgi alışverişi, tarafların
              zamanını ve emeğini artırabiliyor.
            </p>

            <p>
              ENTIR fikri, bu dağınık süreçlerin daha anlaşılır
              ve erişilebilir bir dijital ortamda bir araya
              getirilebileceği düşüncesinden doğdu. Yük
              sahiplerinin taşıma ihtiyaçlarını paylaşabildiği,
              nakliyecilerin ise kendilerine uygun iş
              fırsatlarını değerlendirebildiği ortak bir
              alan oluşturmayı hedefledik.
            </p>

            <p>
              Bu hedef doğrultusunda ENTIR'ı, sektörün günlük
              ihtiyaçlarını merkeze alan bir platform olarak
              geliştiriyoruz. Amacımız, teknolojiyi yalnızca
              yeni bir araç olarak sunmak değil; taşımacılığın
              tarafları arasında daha kolay bağlantılar
              kurulmasına katkı sağlamak.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          3. MISSION & VISION
      ===================================================== */}
      <section className="bg-surface py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Section heading */}
          <div className="mb-12 max-w-4xl sm:mb-14">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              MİSYONUMUZ & VİZYONUMUZ
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Bugün ne yapıyoruz,
              <span className="text-brand">
                {' '}yarın neyi hedefliyoruz?
              </span>
            </h2>

          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <article className="group flex h-full flex-col rounded-3xl border border-border-soft bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-xl hover:shadow-sage/15 motion-reduce:transform-none sm:p-10">

              {/* Icon */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/25 text-brand transition-colors duration-300 group-hover:bg-sage/40">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" />
                </svg>

              </div>

              {/* Label */}
              <span className="text-sm font-semibold text-brand">
                Misyonumuz
              </span>

              {/* Heading */}
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                Taşımacılığı kolaylaştırmak.
              </h3>

              {/* Description */}
              <p className="mt-6 text-base leading-8 text-gray-600">
                Taşımacılığın farklı tarafları arasındaki
                bağlantıyı güçlendirmek, iş süreçlerini
                sadeleştirmek ve kullanıcıların ihtiyaçlarına
                daha kolay ulaşabildiği bir dijital deneyim
                sunmak.
              </p>

            </article>


            {/* Vision */}
            <article className="group flex h-full flex-col rounded-3xl border border-border-soft bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-xl hover:shadow-sage/15 motion-reduce:transform-none sm:p-10">

              {/* Icon */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/25 text-brand transition-colors duration-300 group-hover:bg-sage/40">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>

              </div>

              {/* Label */}
              <span className="text-sm font-semibold text-brand">
                Vizyonumuz
              </span>

              {/* Heading */}
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                Daha bağlantılı bir
                <span className="block">
                  taşımacılık ekosistemi.
                </span>
              </h3>

              {/* Description */}
              <p className="mt-6 text-base leading-8 text-gray-600">
                Yük sahiplerinin, nakliyecilerin ve taşımacılık
                işletmelerinin dijital imkânlardan daha etkin
                yararlandığı; erişilebilir, güvenilir ve
                sürdürülebilir bir taşımacılık ekosisteminin
                gelişimine katkı sağlamak.
              </p>

            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          4. PLATFORM CTA
      ===================================================== */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-8 border-t border-border-soft pt-12 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pt-14">

            {/* Left: Content */}
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                PLATFORMUMUZ
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                ENTIR'ı daha yakından tanıyın.
              </h2>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Platformun sunduğu özellikleri ve nasıl çalıştığını inceleyin.
              </p>
            </div>

            {/* Right: CTA */}
            <div className="lg:justify-self-end">
              <Link
                to="/platformumuz"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Platformumuzu İnceleyin
                <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage