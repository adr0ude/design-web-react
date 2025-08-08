import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden flex items-center justify-center px-4 py-6 bg-white dark:bg-gray-900">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Olá, eu sou o Evandro 👋
        </h1>

        <h2 className="text-xl md:text-2xl text-green-600 font-semibold mb-6">
          desenvolvedor & designer web
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Eu crio experiências digitais limpas, responsivas e envolventes com
          React, Tailwind e um toque de design thinking. Vamos dar vida às
          ideias.
        </p>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Veja o meu trabalho <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
