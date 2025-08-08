import { useState } from "react";

const categories = ["ALL", "DESIGN WEB"];

const projects = [
  {
    id: 1,
    title: "Portfólio",
    image: "/assets/projects.png",
    category: "DESIGN WEB",
    description:
      "Este é um site de portfólio pessoal criado apenas com HTML, CSS e JavaScript. Foi desenvolvido para obtenção de nota parcial na disciplina de Design Web",
    link: "https://adr0ude.github.io/DesignWeb-Portfolio/",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const toggleDetails = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-center px-4 pt-32 pb-12 text-gray-900 dark:text-white transition-colors duration-200">
      <h2 className="text-3xl font-bold mb-2">Projetos em Destaque</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Esses são alguns projetos que desenvolvi
      </p>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === cat
                ? "bg-purple-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-transparent hover:border-gray-400 dark:hover:border-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded overflow-hidden shadow hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.category}
              </p>

              <button
                onClick={() => toggleDetails(project.id)}
                className="mt-2 text-purple-600 hover:underline"
              >
                {expandedProjectId === project.id
                  ? "Ocultar Detalhes"
                  : "Ver Detalhes"}
              </button>

              {expandedProjectId === project.id && (
                <div className="mt-4 text-center text-sm">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Acessar Projeto
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
