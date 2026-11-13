import { Link } from 'react-router'

function AboutPage() {
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
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-sage/25 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Hakkımızda
            </span>

            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-7xl">
            Taşımacılığın geleceğini
            <span className="block text-brand">
                birlikte şekillendiriyoruz.
            </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            ENTIR, yük sahipleri ile nakliyecileri dijital ortamda
            buluşturarak taşımacılık süreçlerini daha erişilebilir,
            düzenli ve yönetilebilir hale getirmeyi amaçlayan
            bir lojistik platformudur.
            </p>

        </div>
        </section>

      {/* 2. OUR STORY */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">

          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Hikâyemiz
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Bir ihtiyaçtan
              <span className="block text-brand">
                doğan fikir.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-6 text-base leading-8 text-gray-600 sm:text-lg">

            <p>
              Taşımacılık sektöründe yük sahipleri ile nakliyecilerin
              birbirlerine ulaşması, uygun taşıma seçeneklerini
              değerlendirmesi ve taşıma koşullarında anlaşması
              birçok farklı aşamayı içerebilir.
            </p>

            <p>
              ENTIR, bu süreçleri tek bir dijital platformda
              bir araya getirme fikriyle geliştirilmektedir.
              Yük sahiplerinin taşıma ihtiyaçlarını ilan olarak
              yayınlayabildiği, nakliyecilerin ise uygun ilanları
              inceleyerek teklif verebildiği bir ortam sunmayı
              hedefliyoruz.
            </p>

            <p>
              Amacımız, teknolojinin sunduğu imkânlardan
              yararlanarak yük sahipleri ile nakliyeciler
              arasındaki iletişimi kolaylaştırmak ve
              taşımacılık süreçlerine daha düzenli
              bir yapı kazandırmaktır.
            </p>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-14 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Bizi Yönlendiren Değerler
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Bugün ne yapıyoruz,
              <span className="text-brand">
                {' '}yarın neyi hedefliyoruz?
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <div className="group rounded-3xl border border-border-soft bg-white p-8 transition-all duration-300 hover:border-sage hover:shadow-lg hover:shadow-sage/30 sm:p-10">

              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/30 text-brand">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>

              <span className="text-sm font-semibold text-brand">
                Misyonumuz
              </span>

              <h3 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
                Taşımacılığı kolaylaştırmak.
              </h3>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Yük sahipleri ile nakliyecileri aynı dijital ortamda
                buluşturarak yük ilanı, teklif, iletişim ve
                karşılıklı onay süreçlerini daha erişilebilir,
                anlaşılır ve düzenli hale getirmek.
              </p>

            </div>

            {/* Vision */}
            <div className="group rounded-3xl border border-border-soft bg-white p-8 transition-all duration-300 hover:border-sage hover:shadow-lg hover:shadow-sage/30 sm:p-10">

              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/30 text-brand">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <span className="text-sm font-semibold text-brand">
                Vizyonumuz
              </span>

              <h3 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
                Dijital lojistiğin geleceği.
              </h3>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Teknoloji ile lojistik sektörünü daha güçlü
                biçimde bir araya getirerek yük sahipleri,
                bireysel nakliyeciler ve taşımacılık
                işletmeleri için erişilebilir, güvenilir
                ve sürdürülebilir bir dijital ekosistem
                oluşturmak.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            ENTIR'ı Keşfedin
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Taşımacılığa yeni bir
            <span className="text-brand">
              {' '}bakış açısı.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            ENTIR'ın yük sahipleri ve nakliyeciler için
            sunduğu özellikleri ve platformun nasıl
            çalıştığını daha yakından inceleyin.
          </p>

          <Link
            to="/platformumuz"
            className="mt-10 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-hover hover:shadow-lg hover:shadow-sage/30"
          >
            Platformumuzu Keşfedin

            <span aria-hidden="true">→</span>
          </Link>

        </div>
      </section>

    </main>
  )
}

export default AboutPage