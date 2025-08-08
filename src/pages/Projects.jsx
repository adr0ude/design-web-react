import { useState } from "react";

const categories = ["ALL", "DESIGN", "SOFTWARE", "BLOCKCHAIN"];

const projects = [
  {
    id: 1,
    title: "Weather App",
    image: "/projects/weather.png",
    category: "SOFTWARE",
  },
  {
    id: 2,
    title: "Profile Card",
    image: "/projects/profile.png",
    category: "DESIGN",
  },
  {
    id: 3,
    title: "Blockchain Certifier",
    image: "/projects/blockchain.png",
    category: "BLOCKCHAIN",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-center px-4 py-16 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-2">Projetos em Destaque</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Alguns projetos que desenvolvi</p>

      {/* Botões de filtro */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded transition ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-transparent hover:border-gray-400 dark:hover:border-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de projetos */}
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
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
