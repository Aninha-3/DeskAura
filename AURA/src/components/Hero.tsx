export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Bem-vindo ao Aura
      </h1>
      <p className="mt-6 max-w-xl text-gray-400">
        Uma plataforma moderna, rápida e intuitiva, feita para transformar sua
        experiência digital.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition font-medium shadow-lg">
          Começar agora
        </button>
        <button className="px-6 py-3 rounded-2xl border border-gray-600 hover:bg-gray-800 transition font-medium">
          Saiba mais
        </button>
      </div>
    </section>
  );
}
