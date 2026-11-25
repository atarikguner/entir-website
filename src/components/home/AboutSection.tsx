import { Link } from 'react-router'

type IllustrationProps = {
  className?: string
}

/* -------------------------------------------------------
   Illustration 1 — Yük Sahipleri
------------------------------------------------------- */

function ShipperIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background */}
      <circle cx="140" cy="85" r="72" fill="#EAF2ED" />

      <circle
        cx="140"
        cy="85"
        r="57"
        stroke="#C7D8CE"
        strokeDasharray="4 7"
      />

      {/* Cargo boxes */}
      <g className="about-illustration-float">
        <rect
          x="82"
          y="66"
          width="72"
          height="66"
          rx="8"
          fill="#42796A"
        />

        <path
          d="M82 84 H154"
          stroke="#A8C5B5"
          strokeWidth="2"
        />

        <path
          d="M118 66 V132"
          stroke="#A8C5B5"
          strokeWidth="2"
        />

        <rect
          x="128"
          y="42"
          width="68"
          height="60"
          rx="8"
          fill="#2A5E51"
        />

        <path
          d="M128 59 H196"
          stroke="#A8C5B5"
          strokeWidth="2"
        />

        <path
          d="M162 42 V102"
          stroke="#A8C5B5"
          strokeWidth="2"
        />

        {/* Package label */}
        <rect
          x="145"
          y="69"
          width="34"
          height="17"
          rx="4"
          fill="#EAF2ED"
        />

        <path
          d="M151 77 H173"
          stroke="#42796A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Decorative elements */}
      <circle cx="67" cy="49" r="5" fill="#A8C5B5" />
      <circle cx="212" cy="121" r="7" fill="#C7D8CE" />

      <path
        d="M56 126 H85"
        stroke="#A8C5B5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* -------------------------------------------------------
   Illustration 2 — Nakliyeciler
------------------------------------------------------- */

function CarrierIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="140" cy="85" r="72" fill="#EAF2ED" />

      <circle
        cx="140"
        cy="85"
        r="57"
        stroke="#C7D8CE"
        strokeDasharray="4 7"
      />

      {/* Road */}
      <path
        d="M45 125 H235"
        stroke="#C7D8CE"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M55 138 H225"
        stroke="#A8C5B5"
        strokeWidth="3"
        strokeDasharray="15 12"
        className="about-road-animation"
      />

      {/* Truck */}
      <g className="about-truck-animation">
        {/* Trailer */}
        <rect
          x="64"
          y="66"
          width="112"
          height="58"
          rx="7"
          fill="#2A5E51"
        />

        <path
          d="M80 76 V113 M100 76 V113 M120 76 V113 M140 76 V113 M160 76 V113"
          stroke="#A8C5B5"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* Cabin */}
        <path
          d="M176 87 H196 L216 106 V124 H176 Z"
          fill="#173F35"
        />

        {/* Window */}
        <path
          d="M185 94 H195 L207 106 H185 Z"
          fill="#B9D8C8"
        />

        {/* Chassis */}
        <rect
          x="60"
          y="119"
          width="160"
          height="8"
          rx="4"
          fill="#202C29"
        />

        {/* Wheels */}
        {[91, 151, 197].map((x) => (
          <g key={x}>
            <circle cx={x} cy="128" r="13" fill="#202C29" />
            <circle cx={x} cy="128" r="6" fill="#F7F9F6" />
          </g>
        ))}
      </g>

      <circle cx="220" cy="48" r="6" fill="#A8C5B5" />
      <circle cx="55" cy="85" r="4" fill="#42796A" />
    </svg>
  )
}

/* -------------------------------------------------------
   Illustration 3 — Tek Platform
------------------------------------------------------- */

function PlatformIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="140" cy="85" r="72" fill="#EAF2ED" />

      {/* Connection lines */}
      <path
        d="M140 85 L78 52"
        stroke="#A8C5B5"
        strokeWidth="3"
        strokeDasharray="5 7"
      />

      <path
        d="M140 85 L205 52"
        stroke="#A8C5B5"
        strokeWidth="3"
        strokeDasharray="5 7"
      />

      <path
        d="M140 85 L140 139"
        stroke="#A8C5B5"
        strokeWidth="3"
        strokeDasharray="5 7"
      />

      {/* Central platform */}
      <g className="about-platform-pulse">
        <circle cx="140" cy="85" r="35" fill="#2A5E51" />

        <circle
          cx="140"
          cy="85"
          r="28"
          stroke="#A8C5B5"
          strokeWidth="1.5"
        />

        {/* Connection icon */}
        <circle cx="128" cy="85" r="6" fill="white" />
        <circle cx="152" cy="85" r="6" fill="white" />

        <path
          d="M134 85 H146"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Outer nodes */}
      {[
        { x: 78, y: 52 },
        { x: 205, y: 52 },
        { x: 140, y: 139 },
      ].map((node, index) => (
        <g key={index}>
          <circle
            cx={node.x}
            cy={node.y}
            r="19"
            fill="white"
            stroke="#C7D8CE"
            strokeWidth="2"
          />

          <circle
            cx={node.x}
            cy={node.y}
            r="7"
            fill="#42796A"
          />
        </g>
      ))}

      <circle cx="60" cy="118" r="5" fill="#A8C5B5" />
      <circle cx="220" cy="123" r="6" fill="#C7D8CE" />
    </svg>
  )
}

/* -------------------------------------------------------
   Features
------------------------------------------------------- */

const features = [
  {
    id: 'shipper',
    number: '01',
    title: 'Yük Sahipleri İçin',
    description:
      'Taşıma ihtiyacı olan bireylerin ve işletmelerin farklı nakliyecilere ulaşabildiği, seçeneklerini değerlendirebildiği dijital bir ortam.',
    Illustration: ShipperIllustration,
  },
  {
    id: 'carrier',
    number: '02',
    title: 'Nakliyeciler İçin',
    description:
      'Bireysel nakliyecilerin ve taşımacılık işletmelerinin yeni iş fırsatlarını keşfedebildiği, araçlarına uygun taşıma taleplerine ulaşabildiği bir platform.',
    Illustration: CarrierIllustration,
  },
  {
    id: 'platform',
    number: '03',
    title: 'Tek Platformda',
    description:
      'Taşımacılığın farklı taraflarını ortak bir dijital ortamda buluşturan, iletişimi ve iş süreçlerinin takibini kolaylaştırmayı hedefleyen bütünleşik bir yapı.',
    Illustration: PlatformIllustration,
  },
]

/* -------------------------------------------------------
   About Section
------------------------------------------------------- */

function AboutSection() {
  return (
    <section
      id="entir-nedir"
      className="bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: Heading */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              ENTIR NEDİR?
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Taşımacılığın farklı ihtiyaçlarına,
              <span className="mt-2 block text-brand">
                tek bir platform.
              </span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="lg:border-l lg:border-sage/50 lg:pl-10">
            <p className="max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              ENTIR, taşımacılığın farklı taraflarını ortak bir dijital
              ortamda buluşturmak için geliştiriliyor. Yük sahiplerinden
              bireysel nakliyecilere, taşımacılık işletmelerinden
              sektördeki diğer paydaşlara kadar farklı ihtiyaçlara
              hitap eden erişilebilir ve düzenli bir platform
              deneyimi sunmayı hedefliyor.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Illustration = feature.Illustration

            return (
              <article
                key={feature.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-soft bg-white transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-xl hover:shadow-sage/20"
              >
                {/* Illustration area */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#F2F7F3] px-5 sm:h-52">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sage/20 blur-2xl"
                  />

                  <Illustration className="relative h-auto w-full max-w-[280px] transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-secondary">
                    {feature.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </article>
            )
          })}
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