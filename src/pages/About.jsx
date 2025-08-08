export default function About() {
  return (
    <main className="min-h-screen px-4 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Imagem de perfil */}
        <div className="relative w-full md:w-1/3">
          <img
            src="/path/to/profile.jpg"
            alt="Profile"
            className="w-full object-cover rounded shadow-md"
          />
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-green-500 rounded z-[-1]" />
        </div>

        {/* Texto sobre mim */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Sou apaixonado por tecnologia, design e soluções criativas. Trabalho com desenvolvimento frontend, focado em criar experiências interativas, acessíveis e visualmente consistentes. Busco sempre alinhar usabilidade, performance e estética para entregar produtos de alta qualidade.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Tenho experiência com React, Tailwind CSS, ferramentas de design como Figma e Photoshop, e também com integração de APIs e serviços como Firebase e Netlify.
          </p>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Ferramentas e Tecnologias</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            'HTML', 'CSS', 'Bootstrap', 'SASS',
            'Javascript', 'React', 'Firebase', 'Git',
            'NPM/Yarn', 'Figma', 'Adobe Photoshop', 'Corel Draw',
            'Markdown', 'Miro', 'Notion', 'Netlify',
            'Wordpress', 'Solidity',
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-center"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
