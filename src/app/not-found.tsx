import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center w-full max-w-2xl py-24 px-6 bg-white dark:bg-black rounded-lg shadow-lg">
        <Image
          src="/404.svg"
          alt="404 Not Found"
          width={120}
          height={120}
          className="mb-6"
        />
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-2">Pagina non trovata</h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-300 mb-8 text-center">
          Oops! La pagina che cerchi non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow transition-colors"
        >
          Torna alla homepage
        </Link>
      </main>
    </div>
  );
}
