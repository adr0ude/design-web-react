export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="max-w-md w-full border border-gray-200 dark:border-gray-700 rounded p-6 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-center text-2xl font-bold mb-2">Converse Comigo</h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
          Quer solicitar um projeto e/ou bater um papo? <br />
          Sinta-se livre para me enviar uma mensagem.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 rounded outline-none"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Assunto</label>
            <input
              type="text"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 rounded outline-none"
              placeholder="Assunto"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 rounded outline-none"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Mensagem</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 rounded outline-none resize-none"
              placeholder="Digite sua mensagem aqui..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </section>
    </main>
  );
}
