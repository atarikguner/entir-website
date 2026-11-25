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
            ENTIR, yük sahipleriyle nakliyecileri tek platformda buluşturur.
            Yükünüzü ilan edin, teklifleri değerlendirin ve size uygun
            taşıyıcıyla anlaşın. Aracınıza yük arıyorsanız güzergâhınıza
            uygun ilanları keşfedin ve yeni iş fırsatlarına ulaşın.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/platformumuz"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-lg"
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

        {/* Right: Animated logistics network */}
        <div className="relative mx-auto w-full max-w-xl">
          <svg
            viewBox="0 0 620 480"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            aria-labelledby="hero-logistics-title hero-logistics-desc"
            className="h-auto w-full"
          >
            <title id="hero-logistics-title">
              ENTIR Lojistik Ağı
            </title>
            <desc id="hero-logistics-desc">
              Lojistik bağlantı noktaları ve hareketli güzergâh çizgileri
              arasında yük taşıyan modern bir tır illüstrasyonu.
            </desc>

            <defs>
              <linearGradient id="hero-bg-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F7F9F6" />
                <stop offset="100%" stopColor="#EAF2ED" />
              </linearGradient>

              <linearGradient id="hero-trailer-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#42796A" />
                <stop offset="100%" stopColor="#2A5E51" />
              </linearGradient>

              <linearGradient id="hero-cabin-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2A5E51" />
                <stop offset="100%" stopColor="#173F35" />
              </linearGradient>

              <filter id="hero-soft-shadow" x="-30%" y="-50%" width="160%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="12"
                  stdDeviation="12"
                  floodColor="#173F35"
                  floodOpacity="0.12"
                />
              </filter>
            </defs>

            {/* Background */}
            <circle cx="310" cy="235" r="195" fill="url(#hero-bg-gradient)" />

            <circle
              cx="310"
              cy="235"
              r="157"
              stroke="#DCE9E1"
              strokeWidth="1.5"
              strokeDasharray="5 10"
              className="hero-orbit"
            />

            <circle
              cx="310"
              cy="235"
              r="115"
              stroke="#DCE9E1"
              strokeWidth="1.5"
            />

            {/* Logistics connections */}
            <path
              d="M95 335 C155 335 165 275 225 275 H395 C455 275 465 335 525 335"
              stroke="#A8C5B5"
              strokeWidth="3"
              strokeDasharray="8 12"
              strokeLinecap="round"
              className="hero-route"
            />

            <path
              d="M155 145 C210 105 255 110 295 155"
              stroke="#B8D0C3"
              strokeWidth="2"
              strokeDasharray="5 10"
              className="hero-route hero-route-slow"
            />

            <path
              d="M405 155 C455 115 495 145 515 195"
              stroke="#B8D0C3"
              strokeWidth="2"
              strokeDasharray="5 10"
              className="hero-route hero-route-slow"
            />

            {/* Connection points */}
            <g className="hero-node">
              <circle cx="95" cy="335" r="20" fill="#E5F0E9" />
              <circle cx="95" cy="335" r="11" fill="#2A5E51" />
              <circle
                cx="95"
                cy="335"
                r="25"
                stroke="#A8C5B5"
                strokeWidth="2"
                className="hero-pulse"
              />
            </g>

            <g className="hero-node hero-node-delayed">
              <circle cx="525" cy="335" r="20" fill="#E5F0E9" />
              <circle cx="525" cy="335" r="11" fill="#2A5E51" />
              <circle
                cx="525"
                cy="335"
                r="25"
                stroke="#A8C5B5"
                strokeWidth="2"
                className="hero-pulse"
              />
            </g>

            {/* Floating logistics cards */}
            <g className="hero-float-card">
              <rect
                x="85"
                y="115"
                width="125"
                height="58"
                rx="14"
                fill="white"
                stroke="#E1E9E3"
                strokeWidth="1.5"
              />
              <rect x="101" y="130" width="27" height="27" rx="8" fill="#EAF2ED" />
              <path
                d="M108 143 H121 M108 149 H118"
                stroke="#2A5E51"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect x="139" y="134" width="53" height="5" rx="2.5" fill="#2A5E51" />
              <rect x="139" y="145" width="39" height="4" rx="2" fill="#C7D8CE" />
            </g>

            <g className="hero-float-card hero-float-card-delayed">
              <rect
                x="425"
                y="115"
                width="120"
                height="58"
                rx="14"
                fill="white"
                stroke="#E1E9E3"
                strokeWidth="1.5"
              />
              <circle cx="449" cy="144" r="14" fill="#EAF2ED" />
              <path
                d="M443 144 L448 149 L456 139"
                stroke="#2A5E51"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="471" y="134" width="55" height="5" rx="2.5" fill="#2A5E51" />
              <rect x="471" y="145" width="37" height="4" rx="2" fill="#C7D8CE" />
            </g>

            {/* Moving road */}
            <g aria-hidden="true">
              <path
                d="M110 390 H510"
                stroke="#DCE9E1"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M110 390 H510"
                stroke="#8CB4A3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="35 55"
                className="hero-moving-road"
              />
            </g>

            {/* Truck shadow */}
            <ellipse
              cx="320"
              cy="355"
              rx="175"
              ry="17"
              fill="#173F35"
              opacity="0.10"
            />

            {/* Truck */}
            <g className="hero-truck" filter="url(#hero-soft-shadow)">
              {/* Trailer */}
              <rect
                x="150"
                y="205"
                width="240"
                height="118"
                rx="12"
                fill="url(#hero-trailer-gradient)"
              />

              {/* Trailer top highlight */}
              <path
                d="M162 217 H378"
                stroke="#8CB4A3"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.65"
              />

              {/* Trailer vertical panels */}
              {[190, 225, 260, 295, 330, 365].map((x) => (
                <path
                  key={x}
                  d={`M${x} 225 V307`}
                  stroke="#A8C5B5"
                  strokeWidth="2"
                  opacity="0.32"
                />
              ))}

              {/* Trailer lower trim */}
              <rect x="157" y="311" width="226" height="7" rx="3" fill="#173F35" />

              {/* Cabin */}
              <path
                d="M390 248 H438 Q448 248 454 256 L492 294 Q498 300 498 311 V325 H390 Z"
                fill="url(#hero-cabin-gradient)"
              />

              {/* Cabin window */}
              <path
                d="M416 261 H438 L472 294 H416 Z"
                fill="#B9D8C8"
              />

              <path
                d="M416 261 V294"
                stroke="#173F35"
                strokeWidth="4"
              />

              {/* Door detail */}
              <path d="M413 303 H435" stroke="#8CB4A3" strokeWidth="3" strokeLinecap="round" />

              {/* Front light */}
              <rect x="490" y="303" width="8" height="12" rx="3" fill="#E5D6A5" />

              {/* Chassis */}
              <rect x="145" y="320" width="360" height="13" rx="6" fill="#202C29" />

              {/* Animated wheels */}
              {[215, 330, 445].map((x) => (
                <g key={x}>
                  {/* Tire */}
                  <circle cx={x} cy="337" r="27" fill="#202C29" />

                  {/* Rotating rim */}
                  <g
                    className="hero-wheel"
                    style={{
                      transformOrigin: `${x}px 337px`,
                    }}
                  >
                    <circle cx={x} cy="337" r="15" fill="#F7F9F6" />

                    {[0, 90, 180, 270].map((angle) => (
                      <path
                        key={angle}
                        d={`M${x} 325 V331`}
                        stroke="#8CA99B"
                        strokeWidth="3"
                        strokeLinecap="round"
                        transform={`rotate(${angle} ${x} 337)`}
                      />
                    ))}

                    <circle cx={x} cy="337" r="7" fill="#8CA99B" />
                  </g>
                </g>
              ))}
            </g>

            {/* Decorative accents */}
            <circle cx="300" cy="75" r="5" fill="#42796A" opacity="0.7" />
            <circle cx="555" cy="240" r="7" fill="#A8C5B5" />
            <circle cx="70" cy="250" r="5" fill="#A8C5B5" />

            <path
              d="M120 405 H185"
              stroke="#A8C5B5"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M455 405 H505"
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