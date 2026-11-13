import { Link } from 'react-router'

function ContactCTASection() {
  return (
    <section
      id="iletisim"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-sage/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-sage/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
        {/* Section label */}
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          İLETİŞİM
        </span>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Birlikte
          <span className="text-brand"> iletişime geçelim.</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
          ENTIR hakkında daha fazla bilgi almak, görüşlerinizi paylaşmak
          veya iş birliği fırsatlarını değerlendirmek için bizimle
          iletişime geçebilirsiniz.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            to="/iletisim"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-lg hover:shadow-sage/30"
          >
            Bizimle İletişime Geçin

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactCTASection