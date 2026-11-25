function ContactPage() {
  return (
    <main className="bg-white">

      {/* 1. PAGE HERO */}

        <section className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-28">

        {/* Background decoration */}

        <div

            aria-hidden="true"

            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage/30 blur-3xl"

        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">

            İLETİŞİM

            </span>

            <h1 className="mt-7 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-7xl">

            Sizinle

            <span className="block text-brand">

                iletişimde olalım.

            </span>

            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">

            ENTIR hakkında sorularınız, önerileriniz veya iş birliği

            fikirleriniz için bizimle iletişime geçebilirsiniz.

            </p>

        </div>

        </section>

      {/* 2. CONTACT CONTENT */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">

          {/* LEFT: CONTACT INFORMATION */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              BİZE ULAŞIN
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Sorularınızı
              <span className="block text-brand">
                yanıtlamaktan memnuniyet duyarız.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-600">
              Platformumuz hakkında bilgi almak veya iş birliği
              fırsatlarını değerlendirmek için bizimle
              iletişime geçebilirsiniz.
            </p>

            <div className="mt-12 border-t border-border-soft pt-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage/30 text-brand">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    E-posta
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Kurumsal e-posta adresimiz yakında
                    burada paylaşılacaktır.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border-soft pt-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage/30 text-brand">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 3a15 15 0 0 1-7-7l3-2-2-5Z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    Telefon
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Telefon iletişim bilgilerimiz yakında
                    paylaşılacaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="rounded-3xl border border-border-soft bg-surface p-6 sm:p-10">
            <div className="mb-9">
              <h2 className="text-2xl font-bold text-ink">
                Bize Mesaj Gönderin
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Mesaj gönderme özelliğimiz yakında kullanıma açılacaktır.
              </p>
            </div>

            <form className="space-y-6">
              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Adınız Soyadınız
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Adınız Soyadınız"
                  autoComplete="name"
                  disabled
                  className="w-full rounded-xl border border-border-soft bg-white px-4 py-3.5 text-base text-gray-900 outline-none disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  E-posta Adresiniz
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="ornek@eposta.com"
                  autoComplete="email"
                  disabled
                  className="w-full rounded-xl border border-border-soft bg-white px-4 py-3.5 text-base text-gray-900 outline-none disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Konu
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Mesajınızın konusu"
                  disabled
                  className="w-full rounded-xl border border-border-soft bg-white px-4 py-3.5 text-base text-gray-900 outline-none disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Mesajınız
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Mesajınızı buraya yazabilirsiniz..."
                  disabled
                  className="w-full resize-none rounded-xl border border-border-soft bg-white px-4 py-3.5 text-base text-gray-900 outline-none disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white opacity-60"
              >
                Mesaj Gönder
                <span aria-hidden="true">→</span>
              </button>

              <p className="text-center text-xs leading-6 text-gray-500">
                İletişim formumuz henüz aktif değildir.
              </p>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}

export default ContactPage