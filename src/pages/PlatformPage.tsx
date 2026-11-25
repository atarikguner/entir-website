import { Link } from 'react-router'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)

  if (!element) return

  const navbarHeight = 80

  const targetPosition =
    element.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight

  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  const duration = 550

  let startTime: number | null = null

  const easeInOutCubic = (t: number) =>
    t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2

  const animateScroll = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime
    }

    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const easedProgress = easeInOutCubic(progress)

    window.scrollTo(
      0,
      startPosition + distance * easedProgress
    )

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}


const shipperFeatures = [
  {
    number: '01',
    title: 'Yük İlanı Oluşturma',
    description:
      'Taşınmasını istediğiniz yükün detaylarını, çıkış ve varış noktalarını belirterek ilanınızı oluşturun.',
  },
  {
    number: '02',
    title: 'Gelen Teklifleri Değerlendirme',
    description:
      'Nakliyecilerden gelen teklifleri inceleyin, ihtiyaçlarınıza ve beklentilerinize uygun seçenekleri karşılaştırın.',
  },
  {
    number: '03',
    title: 'Nakliyecilerle İletişim',
    description:
      'Teklif veren nakliyecilerle platform üzerinden mesajlaşarak taşıma detaylarını ve koşullarını görüşün.',
  },
  {
    number: '04',
    title: 'Karşılıklı Onay',
    description:
      'Taşıma koşullarında anlaştığınızda süreci karşılıklı onayla tamamlayın.',
  },
]

const carrierFeatures = [
  {
    number: '01',
    title: 'Yük İlanlarını Keşfetme',
    description:
      'Platformdaki güncel yük ilanlarını inceleyerek yeni taşıma fırsatlarından haberdar olun.',
  },
  {
    number: '02',
    title: 'Size Uygun Yükleri Belirleme',
    description:
      'Güzergâhınıza, aracınıza ve çalışma planınıza uygun ilanları filtreleyerek seçeneklerinizi daraltın.',
  },
  {
    number: '03',
    title: 'Taşıma Teklifi Verme',
    description:
      'İlgilendiğiniz yükler için teklifinizi iletin ve yük sahipleriyle taşıma koşullarını görüşün.',
  },
  {
    number: '04',
    title: 'Anlaşmayı Tamamlama',
    description:
      'Taşıma detaylarında uzlaştığınızda karşılıklı onay sürecini tamamlayın.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'İlan',
    description: 'Taşıma ihtiyacı paylaşılır.',
  },
  {
    number: '02',
    title: 'Teklif',
    description: 'Nakliyeciler teklif sunar.',
  },
  {
    number: '03',
    title: 'Mesajlaşma',
    description: 'Taşıma koşulları görüşülür.',
  },
  {
    number: '04',
    title: 'Onay',
    description: 'Taraflar anlaşmayı onaylar.',
  },
]

function PlatformPage() {
  return (
    <main className="bg-white">

      {/* 1. PAGE HERO */}
      <section className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">

        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage/35 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sage/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10">

          {/* Left: Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Platformumuz
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]">
              Yük sahipleri ve nakliyeciler
              <span className="block text-brand">
                aynı platformda.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              ENTIR, yük sahiplerinin taşıma ihtiyaçlarını
              paylaşabildiği, nakliyecilerin uygun ilanlara
              teklif verebildiği ve tarafların doğrudan
              iletişim kurabildiği dijital bir lojistik platformudur.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#yuk-sahipleri"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('yuk-sahipleri')
                }}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-lg hover:shadow-sage/30"
              >
                YÜK SAHİPLERİ İÇİN
              </a>

              <a
                href="#nakliyeciler"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('nakliyeciler')
                }}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-soft bg-white px-7 py-3 text-sm font-semibold text-brand transition-all duration-200 hover:border-sage hover:bg-sage/30"
              >
                NAKLİYECİLER İÇİN
              </a>
            </div>
          </div>

          {/* Right: Platform illustration */}
          <div
            className="relative mx-auto w-full max-w-[460px]"
            aria-hidden="true"
          >
            <div className="absolute inset-8 rounded-full bg-sage/20 blur-3xl" />

            <div className="relative rounded-[28px] border border-border-soft bg-white p-6 shadow-xl shadow-brand/5 sm:p-8">

              {/* Illustration header */}
              <div className="flex items-center justify-between border-b border-border-soft pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage/30">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-brand"
                    >
                      <path d="M3 7h12v10H3z" />
                      <path d="M15 10h3l3 3v4h-6z" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="18" cy="18" r="2" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-ink">
                      Taşıma Süreci
                    </p>
                    <p className="text-xs text-gray-500">
                      Tek platformda
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-sage/25 px-3 py-1 text-xs font-medium text-brand">
                  ENTIR
                </span>
              </div>

              {/* Process overview */}
              <div className="mt-7 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    1
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink">
                      Yük ilanı
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Taşıma ihtiyacı paylaşılır
                    </p>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-brand" />
                </div>

                <div className="ml-5 h-5 border-l-2 border-dashed border-sage" />

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/40 text-sm font-bold text-brand">
                    2
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink">
                      Taşıma teklifi
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Nakliyeciler teklif sunar
                    </p>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-sage" />
                </div>

                <div className="ml-5 h-5 border-l-2 border-dashed border-sage" />

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/40 text-sm font-bold text-brand">
                    3
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink">
                      İletişim ve anlaşma
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Koşullar görüşülür ve onaylanır
                    </p>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-sage" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SHIPPER FEATURES */}
      <section
        id="yuk-sahipleri"
        className="scroll-mt-20 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">

          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              YÜK SAHİPLERİ İÇİN
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Yükünüz için
              <span className="block text-brand">
                doğru taşıyıcıyı bulun.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              Taşıma ihtiyaçlarınızı platformda paylaşın,
              gelen teklifleri değerlendirin ve
              sizin için uygun taşıma koşullarında anlaşın.
            </p>
          </div>

          {/* Right */}
          <div className="divide-y divide-border-soft border-y border-border-soft">
            {shipperFeatures.map((feature) => (
              <div
                key={feature.number}
                className="group grid gap-4 rounded-xl px-3 py-8 transition-colors duration-200 hover:bg-surface sm:grid-cols-[64px_1fr] sm:gap-6 sm:px-5 sm:py-9"
              >
                <span className="text-2xl font-bold text-brand-secondary">
                  {feature.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-ink transition-colors duration-200 group-hover:text-brand">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CARRIER FEATURES */}
      <section
        id="nakliyeciler"
        className="scroll-mt-20 bg-surface py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">

          {/* Steps: left on desktop */}
          <div className="order-2 divide-y divide-border-soft border-y border-border-soft lg:order-1">
            {carrierFeatures.map((feature) => (
              <div
                key={feature.number}
                className="group grid gap-4 rounded-xl px-3 py-8 transition-colors duration-200 hover:bg-white/80 sm:grid-cols-[64px_1fr] sm:gap-6 sm:px-5 sm:py-9"
              >
                <span className="text-2xl font-bold text-brand-secondary">
                  {feature.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-ink transition-colors duration-200 group-hover:text-brand">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Description: right on desktop */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              NAKLİYECİLER İÇİN
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Aracınız için
              <span className="block text-brand">
                yeni işler keşfedin.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              Aracınıza ve güzergâhınıza uygun yük ilanlarını
              inceleyin, teklifinizi verin ve
              yük sahipleriyle doğrudan iletişim kurun.
            </p>
          </div>

        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Nasıl Çalışır?
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Dört adımda
              <span className="text-brand">
                {' '}taşıma anlaşması.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              İlandan karşılıklı onaya kadar sürecin özeti.
            </p>
          </div>

          {/* Process timeline */}
          <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">

            {/* Connecting line */}
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-border-soft md:block"
            />

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative flex items-start gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sage bg-white text-sm font-bold text-brand shadow-sm">
                  {step.number}
                </div>

                <div className="md:mt-7">
                  <h3 className="text-lg font-bold text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-brand-hover py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            İletişim
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            ENTIR hakkında
            <span className="text-sage">
              {' '}konuşalım.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
            Platformla ilgili sorularınız, önerileriniz
            veya iş birliği fikirleriniz için bizimle
            iletişime geçebilirsiniz.
          </p>

          <Link
            to="/iletisim"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-sage px-8 py-4 text-sm font-semibold text-brand-hover transition-colors duration-200 hover:bg-white"
          >
            İletişime Geçin
            <span aria-hidden="true">→</span>
          </Link>

        </div>
      </section>

    </main>
  )
}

export default PlatformPage