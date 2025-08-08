import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden flex items-center justify-center px-4 pt-32 pb-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Olá, eu sou o Evandro 👋
        </h1>

        <h2 className="text-xl md:text-2xl text-purple-500 font-semibold mb-6">
          professor & desenvolvedor
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Possuo mais de 10 anos de experiência docente, atuo em pesquisas
          voltadas ao desenvolvimento de software e hardware, além de coordenar
          projetos na área de informática básica e capacitação digital na
          comunidade.
        </p>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 font-semibold text-white rounded-full hover:bg-purple-600 transition"
        >
          Veja o meu trabalho <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
