export function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h2 className="text-2xl font-bold text-indigo-400">Aura</h2>
      <nav className="flex gap-6 text-gray-300">
        <a href="#" className="hover:text-white">Início</a>
        <a href="#" className="hover:text-white">Sobre</a>
        <a href="#" className="hover:text-white">Contato</a>
      </nav>
    </header>
  );
}
