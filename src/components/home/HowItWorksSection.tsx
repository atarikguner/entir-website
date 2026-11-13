import { Link } from 'react-router'

const steps = [
  {
    number: '1',
    title: 'Yük İlanı Oluştur',
    description:
      'Yük sahipleri, taşınmasını istedikleri yükün detaylarını ve taşıma ihtiyaçlarını belirterek ilan oluşturur.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Teklif Al / Ver',
    description:
      'Nakliyeciler uygun yük ilanlarını inceleyerek teklif verir. Yük sahipleri gelen teklifleri değerlendirir.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 7h16M4 12h16M4 17h10" />
        <path d="m17 16 3 3-3 3" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Mesajlaş',
    description:
      'Taraflar platform üzerinden iletişim kurarak taşıma detaylarını ve teklif koşullarını görüşür.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l-2 2v-9.5A7.5 7.5 0 0 1 10.5 4H12a8 8 0 0 1 8 7.5Z" />
        <path d="M8 11h8M8 14h5" />
      </svg>
    ),
  },
  {
    number: '4',
    title: 'Karşılıklı Onayla',
    description:
      'Yük sahibi ve nakliyeci taşıma koşullarında anlaşarak süreci karşılıklı onayla tamamlar.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    ),
  },
]

function HowItWorksSection() {
  return (
    <section
      id="nasil-calisir"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Nasıl Çalışır?
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Taşımacılık sürecini
            <span className="text-brand"> kolaylaştırıyoruz.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            ENTIR, yük sahipleri ile nakliyecilerin bir araya gelmesini,
            teklifleri değerlendirmesini ve taşıma koşullarında anlaşmasını
            dört temel adımda mümkün kılar.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Desktop connection line */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-10 hidden border-t-2 border-dashed border-border-soft lg:block"
          />

          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-border-soft bg-surface text-brand transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sage group-hover:bg-sage/30">
                <div className="h-9 w-9">{step.icon}</div>
              </div>

              {/* Step number */}
              <span className="mt-7 text-sm font-bold tracking-[0.2em] text-brand-secondary">
                ADIM {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-xl font-bold text-ink">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-xs text-sm leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/platformumuz"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border-soft px-7 py-3 text-sm font-semibold text-brand transition-all duration-200 hover:border-brand hover:bg-surface"
          >
            Platformun tüm özelliklerini keşfet
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection