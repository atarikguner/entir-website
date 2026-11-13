import { Link } from 'react-router'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sage/30 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Left: Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Yükünüz için doğru aracı,
            <span className="block text-brand">
              aracınız için doğru işi bulun.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            ENTIR, yük sahipleriyle tırcıları aynı platformda buluşturur.
            Yükünüzü ilan olarak yayınlayın, taşıyıcılardan teklif alın ve
            sizin için en uygun koşullarda anlaşın. Aracınıza yük arıyorsanız
            güzergâhınıza uygun ilanları inceleyin, teklifinizi verin ve
            sıradaki işinizi kolayca bağlayın.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/platformumuz"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-lg"
            >
              Platformu Keşfet
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/hakkimizda"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-soft px-7 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              Bizi Tanıyın
            </Link>
          </div>
        </div>

        {/* Right: Minimalist logistics illustration */}
        <div className="relative mx-auto w-full max-w-xl">
          <svg
            viewBox="0 0 600 460"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            aria-labelledby="logistics-title logistics-description"
            className="h-auto w-full"
          >
            <title id="logistics-title">
              ENTIR Lojistik Ağı
            </title>

            <desc id="logistics-description">
              Çıkış noktasından varış noktasına uzanan bir güzergâh
              üzerinde yük taşıyan tır illüstrasyonu.
            </desc>

            {/* Subtle background geometry */}
            <circle
              cx="300"
              cy="225"
              r="175"
              fill="#F7F9F6"
            />

            <circle
              cx="300"
              cy="225"
              r="135"
              stroke="#E1E9E3"
              strokeWidth="1.5"
              strokeDasharray="5 9"
            />

            <circle
              cx="300"
              cy="225"
              r="95"
              stroke="#E1E9E3"
              strokeWidth="1"
            />

            {/* Route */}
            <path
              d="M105 335 C145 335 155 275 210 275 H375 C430 275 440 335 495 335"
              stroke="#A8C5B5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="7 10"
            />

            {/* Starting point */}
            <circle
              cx="105"
              cy="335"
              r="9"
              fill="#2A5E51"
            />

            <circle
              cx="105"
              cy="335"
              r="17"
              stroke="#A8C5B5"
              strokeWidth="2"
            />

            {/* Destination */}
            <circle
              cx="495"
              cy="335"
              r="9"
              fill="#2A5E51"
            />

            <circle
              cx="495"
              cy="335"
              r="17"
              stroke="#A8C5B5"
              strokeWidth="2"
            />

            {/* Cargo containers */}
            <g transform="translate(135 145)">
              <rect
                x="0"
                y="25"
                width="115"
                height="80"
                rx="5"
                fill="#A8C5B5"
              />

              <path
                d="M15 25 V105 M35 25 V105 M55 25 V105 M75 25 V105 M95 25 V105"
                stroke="#2A5E51"
                strokeWidth="2"
                opacity="0.45"
              />

              <rect
                x="25"
                y="0"
                width="115"
                height="80"
                rx="5"
                fill="#42796A"
              />

              <path
                d="M40 0 V80 M60 0 V80 M80 0 V80 M100 0 V80 M120 0 V80"
                stroke="#173F35"
                strokeWidth="2"
                opacity="0.3"
              />
            </g>

            {/* Truck */}
            <g transform="translate(205 250)">
              {/* Trailer */}
              <rect
                x="0"
                y="-40"
                width="175"
                height="95"
                rx="8"
                fill="#2A5E51"
              />

              {/* Trailer details */}
              <path
                d="M25 -25 V40 M55 -25 V40 M85 -25 V40 M115 -25 V40 M145 -25 V40"
                stroke="#A8C5B5"
                strokeWidth="2"
                opacity="0.35"
              />

              {/* Cabin */}
              <path
                d="M175 -5 H215 L245 25 V55 H175 Z"
                fill="#173F35"
              />

              {/* Window */}
              <path
                d="M190 5 H211 L228 25 H190 Z"
                fill="#A8C5B5"
              />

              {/* Chassis */}
              <rect
                x="-5"
                y="52"
                width="255"
                height="9"
                rx="4"
                fill="#202C29"
              />

              {/* Wheels */}
              <circle
                cx="45"
                cy="65"
                r="20"
                fill="#202C29"
              />

              <circle
                cx="45"
                cy="65"
                r="9"
                fill="#F7F9F6"
              />

              <circle
                cx="145"
                cy="65"
                r="20"
                fill="#202C29"
              />

              <circle
                cx="145"
                cy="65"
                r="9"
                fill="#F7F9F6"
              />

              <circle
                cx="215"
                cy="65"
                r="20"
                fill="#202C29"
              />

              <circle
                cx="215"
                cy="65"
                r="9"
                fill="#F7F9F6"
              />
            </g>

            {/* Small decorative elements */}
            <circle
              cx="425"
              cy="120"
              r="6"
              fill="#A8C5B5"
            />

            <circle
              cx="155"
              cy="110"
              r="4"
              fill="#42796A"
            />

            <path
              d="M440 160 H485"
              stroke="#A8C5B5"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M115 390 H165"
              stroke="#A8C5B5"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection