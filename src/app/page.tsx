import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center w-full max-w-3xl py-24 px-6 bg-white dark:bg-black rounded-lg shadow-lg">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-2">Cos'è il Kakeibo?</h1>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            Kakeibo è un metodo giapponese per la gestione consapevole delle finanze personali. Ti aiuta a risparmiare, riflettere sulle tue spese e raggiungere i tuoi obiettivi economici attraverso 4 semplici domande e una registrazione quotidiana.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-10 flex flex-col items-center gap-4">
          <a
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow transition-colors"
          >
            Inizia ora: Registrati gratis
          </a>
          <span className="text-sm text-zinc-500">Nessuna carta di credito richiesta</span>
        </section>

        {/* Preview App */}
        <section className="mt-14 flex flex-col items-center">
          <div className="relative w-[320px] h-[200px] sm:w-[400px] sm:h-[250px] rounded-xl overflow-hidden border border-zinc-200 shadow-lg bg-zinc-100 dark:bg-zinc-900">
            <Image
              src="/preview-app.png"
              alt="Preview dell'app Kakeibo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <span className="mt-2 text-xs text-zinc-400">Screenshot dell'applicazione</span>
        </section>
      </main>
    </div>
  );
}
