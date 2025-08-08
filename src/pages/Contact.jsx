import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    assunto: "",
    email: "",
    mensagem: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Mensagem enviada:", formData);

    // Apaga os campos
    setFormData({
      nome: "",
      assunto: "",
      email: "",
      mensagem: "",
    });

    // Mostra mensagem de sucesso
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <section className="max-w-md w-full border border-gray-600 border-t-8 border-t-purple-500 dark:border-t-purple-500 dark:border-gray-700 rounded-xl p-6 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-center text-2xl font-bold mb-2">Converse Comigo</h1>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
          Quer solicitar um projeto e/ou bater um papo? <br />
          Sinta-se livre para me enviar uma mensagem.
        </p>

        {success && (
          <p className="text-center text-green-500 font-medium mb-4">
            Mensagem enviada com sucesso!
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 px-3 py-2 rounded-xl outline-none"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Assunto</label>
            <input
              type="text"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 px-3 py-2 rounded-xl outline-none"
              placeholder="Assunto"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 px-3 py-2 rounded-xl outline-none"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Mensagem</label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 px-3 py-2 rounded-xl outline-none resize-none"
              placeholder="Digite sua mensagem aqui..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-xl shadow-[0_4px_0_#9333EA] active:shadow-none transition-all active:translate-y-1 duration-200"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </section>
    </main>
  );
}
