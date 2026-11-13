import { Link } from 'react-router'

const shipperFeatures = [
  {
    number: '1',
    title: 'Yük İlanı Oluşturma',
    description:
      'Taşınmasını istediğiniz yükün detaylarını, çıkış ve varış noktalarını ve taşıma ihtiyaçlarını belirterek ilan oluşturabilirsiniz.',
  },
  {
    number: '2',
    title: 'Gelen Teklifleri Değerlendirme',
    description:
      'Nakliyecilerden gelen taşıma tekliflerini inceleyerek ihtiyaçlarınıza uygun seçenekleri değerlendirebilirsiniz.',
  },
  {
    number: '3',
    title: 'Nakliyecilerle İletişim',
    description:
      'Teklif veren nakliyecilerle platform üzerinden mesajlaşarak taşıma detaylarını görüşebilirsiniz.',
  },
  {
    number: '4',
    title: 'Karşılıklı Onay',
    description:
      'Taşıma koşullarında anlaşmanız halinde süreci karşılıklı onayla ilerletebilirsiniz.',
  },
]

const carrierFeatures = [
  {
    number: '1',
    title: 'Yük İlanlarını İnceleme',
    description:
      'Platformda yayınlanan yük ilanlarını inceleyerek aracınıza ve çalışma planınıza uygun taşıma fırsatlarını keşfedebilirsiniz.',
  },
  {
    number: '2',
    title: 'Güzergâha Uygun Yük Bulma',
    description:
      'Çalıştığınız veya planladığınız güzergâhlara uygun yük ilanlarını değerlendirerek yeni taşıma işleri bulabilirsiniz.',
  },
  {
    number: '3',
    title: 'Taşıma Teklifi Verme',
    description:
      'İlgilendiğiniz yük ilanlarına teklif sunabilir ve yük sahipleriyle taşıma koşullarını görüşebilirsiniz.',
  },
  {
    number: '4',
    title: 'Anlaşma Sürecini Yönetme',
    description:
      'Yük sahipleriyle iletişim kurarak taşıma detaylarında anlaşabilir ve karşılıklı onay sürecini tamamlayabilirsiniz.',
  },
]

const processSteps = [
  {
    number: '1',
    title: 'İlan',
    description: 'Yük sahibi taşıma ihtiyacını platformda yayınlar.',
  },
  {
    number: '2',
    title: 'Teklif',
    description: 'Nakliyeciler uygun ilanlara taşıma teklifi verir.',
  },
  {
    number: '3',
    title: 'Mesajlaşma',
    description: 'Taraflar taşıma detaylarını ve koşullarını görüşür.',
  },
  {
    number: '4',
    title: 'Onay',
    description: 'Taraflar anlaşmayı karşılıklı olarak onaylar.',
  },
]

function PlatformPage() {
  return (
    <main className="bg-white">

      {/* 1. PAGE HERO */}
        <section className="relative overflow-hidden bg-surface py-24 sm:py-32 lg:py-40">

        {/* Background decoration */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage/40 blur-3xl"
        />

        <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sage/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

            {/* Section label */}
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Platformumuz
            </span>
            {/* Heading */}
            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-7xl">
            Yük sahipleri ve nakliyeciler
            <span className="block text-brand">
                aynı platformda.
            </span>
            </h1>
            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            ENTIR, yük sahiplerinin taşıma ihtiyaçlarını
            yayınlayabildiği, nakliyecilerin uygun ilanlara
            teklif verebildiği ve tarafların doğrudan
            iletişim kurabildiği dijital bir lojistik platformudur.
            </p>
            {/* Navigation buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
            <a
                href="#yuk-sahipleri"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-lg hover:shadow-sage/30"
            >
                YÜK SAHİPLERİ İÇİN
            </a>
            <a
                href="#nakliyeciler"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-soft bg-white px-7 py-3 text-sm font-semibold text-brand transition-all duration-200 hover:border-sage hover:bg-sage/30"
            >
                NAKLİYECİLER İÇİN
            </a>
            </div>
        </div>
        </section>

      {/* 2. SHIPPER FEATURES */}
      <section
        id="yuk-sahipleri"
        className="scroll-mt-20 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">

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
              Taşıma ihtiyaçlarınızı platformda yayınlayın,
              gelen teklifleri değerlendirin ve
              sizin için uygun taşıma koşullarında anlaşın.
            </p>
          </div>

          <div className="divide-y divide-border-soft border-y border-border-soft">
            {shipperFeatures.map((feature) => (
              <div
                key={feature.number}
                className="group grid gap-4 py-8 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-10"
              >
                <span className="text-lg font-bold text-brand-secondary">
                  {feature.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-brand">
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">

          <div className="lg:sticky lg:top-32 lg:self-start">
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

          <div className="divide-y divide-border-soft border-y border-border-soft">
            {carrierFeatures.map((feature) => (
              <div
                key={feature.number}
                className="group grid gap-4 py-8 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-10"
              >
                <span className="text-lg font-bold text-brand-secondary">
                  {feature.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-brand">
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

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              İlan oluşturmadan karşılıklı onaya kadar
              temel süreçleri tek bir platformda yönetin.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-border-soft bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-lg hover:shadow-sage/30"
              >
                <span className="text-3xl font-bold text-brand-secondary">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-bold text-ink">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-brand-hover py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            ENTIR
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Platformumuz hakkında
            <span className="text-sage">
              {' '}daha fazla bilgi alın.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
            ENTIR hakkında sorularınız, önerileriniz veya
            iş birliği fikirleriniz varsa bizimle iletişime geçebilirsiniz.
          </p>

          <Link
            to="/iletisim"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-sage px-8 py-4 text-sm font-semibold text-brand-hover transition-colors hover:bg-white"
          >
            Bizimle İletişime Geçin
            <span aria-hidden="true">→</span>
          </Link>

        </div>
      </section>

    </main>
  )
}

export default PlatformPage