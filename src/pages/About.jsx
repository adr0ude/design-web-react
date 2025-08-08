export default function About() {
  return (
    <main className="min-h-screen px-4 pt-32 pb-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-200">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="relative w-full md:w-1/3">
          <img
            src="/assets/profilePicture.png"
            alt="Profile"
            className="w-full object-cover rounded shadow-md relative z-10"
          />
          <div className="absolute bottom-0 right-0 w-full h-full border-4 border-purple-500 rounded -translate-x-2 translate-y-2 z-0" />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Encontro na docência a oportunidade de impactar vidas por meio da
            tecnologia. Leciono no IFCE, onde alinho minha experiência em
            computação com o compromisso de formar profissionais criativos e
            preparados para o futuro digital. Acredito no poder da educação
            pública de qualidade para transformar realidades.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Tenho mais de 10 anos de experiência na área de tecnologia, atuando
            como professor e desenvolvedor. Ao longo da minha trajetória,
            lecionei disciplinas como redes de computadores, eletrônica, lógica
            de programação e programação orientada a objetos.
          </p>
        </div>
      </section>

      <section className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">
          Ferramentas e Tecnologias
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {["HTML", "CSS", "Javascript", "React", "Git", "Tailwind"].map(
            (tech) => (
              <span
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-center transform transition-transform duration-200 hover:scale-105"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </section>

      <section className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Habilidades</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {[
            "Programação Orientada a Objetos (Java, Delphi)",
            "Redes de Computadores e Segurança",
            "Desenvolvimento Mobile",
            "Microserviços e Blockchain",
            "Administração de Sistemas Linux",
            "Banco de Dados e SQL",
            "Testes Automatizados de Software",
            "Ensino e Capacitação Técnica",
            "nglês Técnico",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 px-3 py-2 rounded text-center transform transition-transform duration-200 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
