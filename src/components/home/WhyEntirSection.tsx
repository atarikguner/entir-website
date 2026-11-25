const advantages = [
  {
    number: '01',
    title: 'İhtiyacınıza Uygun Seçenekler',
    description:
      'Yükünüz için farklı taşıma tekliflerini karşılaştırın veya aracınıza ve güzergâhınıza uygun iş fırsatlarını keşfedin.',
  },
  {
    number: '02',
    title: 'Tüm Süreç Tek Yerde',
    description:
      'İlanlardan tekliflere, görüşmelerden anlaşmalara kadar taşıma sürecinin temel adımlarını tek platformdan takip edin.',
  },
  {
    number: '03',
    title: 'Koşulları Siz Belirleyin',
    description:
      'Taşıma detaylarını doğrudan görüşün, beklentilerinizi paylaşın ve sizin için uygun koşullarda anlaşın.',
  },
  {
    number: '04',
    title: 'Karşılıklı Onay',
    description:
      'Tarafların üzerinde uzlaştığı koşullar, karşılıklı onayla netleşsin. Süreç her iki tarafın da bilgisi dahilinde ilerlesin.',
  },
]

function WhyEntirSection() {
  return (
    <section
      id="neden-entir"
      className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-sage/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left: Introduction */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              NEDEN ENTIR?
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Taşımacılıkta doğru bağlantılar,
              <span className="mt-2 block text-brand">
                daha kolay süreçler.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              Doğru taşıma fırsatına ulaşmak, seçenekleri değerlendirmek
              ve anlaşma sürecini yönetmek karmaşık olmak zorunda değil.
              ENTIR, taşımacılığın farklı aşamalarını daha anlaşılır
              ve erişilebilir hale getirmek için tasarlanıyor.
            </p>

            {/* Decorative line */}
            <div
              aria-hidden="true"
              className="mt-10 hidden h-1 w-20 rounded-full bg-brand lg:block"
            />
          </div>

          {/* Right: Advantages */}
          <div className="divide-y divide-border-soft border-y border-border-soft">
            {advantages.map((advantage) => (
              <article
                key={advantage.number}
                className="group relative grid gap-5 py-8 transition-all duration-300 sm:grid-cols-[64px_1fr] sm:gap-7 sm:py-10"
              >
                {/* Hover background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-4 inset-y-2 rounded-2xl bg-sage/0 transition-colors duration-300 group-hover:bg-sage/10 sm:-inset-x-5"
                />

                {/* Number */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-sage/40 bg-sage/20 text-sm font-bold text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  {advantage.number}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                    {advantage.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                    {advantage.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyEntirSection