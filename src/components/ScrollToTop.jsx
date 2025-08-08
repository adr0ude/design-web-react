export default function ScrollToTop() {
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition"
      >
        ↑
      </button>
    );
}