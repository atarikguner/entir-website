const advantages = [
  {
    number: '01',
    title: 'İhtiyacınıza Uygun Seçenekler',
    description:
      'Yük sahipleri farklı taşıyıcılardan gelen teklifleri değerlendirebilir. Nakliyeciler ise araçlarına ve güzergâhlarına uygun yük ilanlarını inceleyebilir.',
  },
  {
    number: '02',
    title: 'Daha Düzenli Bir Süreç',
    description:
      'Yük ilanları, taşıma teklifleri ve taraflar arasındaki görüşmeler aynı platform üzerinden yürütülerek sürecin takip edilmesi kolaylaştırılır.',
  },
  {
    number: '03',
    title: 'Doğrudan İletişim',
    description:
      'Yük sahipleri ve nakliyeciler, taşıma detaylarını ve teklif koşullarını doğrudan görüşerek karşılıklı beklentilerini netleştirebilir.',
  },
  {
    number: '04',
    title: 'Karşılıklı Onaya Dayalı Anlaşma',
    description:
      'Taraflar, taşıma koşullarında uzlaştıktan sonra anlaşmayı karşılıklı olarak onaylayarak süreci ilerletebilir.',
  },
]

function WhyEntirSection() {
  return (
    <section
      id="neden-entir"
      className="bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left: Introduction */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Neden ENTIR?
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Taşımacılıkta
              <span className="block text-brand">
                daha fazlası mümkün.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              ENTIR, yük sahipleri ve nakliyecilerin ihtiyaçlarını
              aynı dijital ortamda buluşturarak taşımacılık
              süreçlerini daha erişilebilir, düzenli ve
              yönetilebilir hale getirmeyi hedefler.
            </p>

            {/* Decorative element */}
            <div
              aria-hidden="true"
              className="mt-10 hidden h-1 w-20 rounded-full bg-brand lg:block"
            />
          </div>

          {/* Right: Advantages */}
          <div className="divide-y divide-border-soft border-y border-border-soft">
            {advantages.map((advantage) => (
              <div
                key={advantage.number}
                className="group grid gap-5 py-8 sm:grid-cols-[64px_1fr] sm:gap-7 sm:py-10"
              >
                {/* Number */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/30 text-sm font-bold text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  {advantage.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-ink transition-colors duration-200 group-hover:text-brand">
                    {advantage.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyEntirSection