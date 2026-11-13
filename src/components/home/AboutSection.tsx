import { Link } from 'react-router'

const features = [
  {
    number: '01',
    title: 'Yük İlanları',
    description:
      'Yük sahipleri, taşıma ihtiyaçlarını ilan olarak yayınlayarak uygun nakliyecilere ulaşabilir.',
  },
  {
    number: '02',
    title: 'Taşıma Teklifleri',
    description:
      'Nakliyeciler, güzergâhlarına ve araçlarına uygun yük ilanlarını inceleyerek teklif verebilir.',
  },
  {
    number: '03',
    title: 'Doğrudan İletişim',
    description:
      'Yük sahipleri ve nakliyeciler, platform üzerinden iletişim kurarak taşıma koşullarını görüşebilir.',
  },
]

function AboutSection() {
  return (
    <section
      id="entir-nedir"
      className="bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            ENTIR NEDİR?
          </span>

        <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Taşımacılık ihtiyaçlarını
            <span className="block text-brand">
                tek platformda buluşturuyoruz.
            </span>
        </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            ENTIR, yük sahipleri ile nakliyecileri dijital ortamda bir araya
            getiren bir lojistik platformudur. Yük ilanlarının yayınlanmasını,
            taşıma tekliflerinin değerlendirilmesini ve tarafların doğrudan
            iletişim kurmasını sağlayarak taşımacılık süreçlerini daha
            erişilebilir ve düzenli hale getirmeyi amaçlar.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group rounded-3xl border border-border-soft bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-lg hover:shadow-sage/30 sm:p-8"
            >
              <span className="text-sm font-semibold text-brand-secondary">
                {feature.number}
              </span>

              <div className="mt-8 h-px w-12 bg-sage transition-all duration-300 group-hover:w-20" />

              <h3 className="mt-7 text-xl font-bold text-ink">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-12">
          <Link
            to="/platformumuz"
            className="inline-flex items-center gap-3 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
          >
            Platformumuzu daha yakından tanıyın
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection