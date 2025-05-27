import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import icone from "../../assets/img/icone.jpg";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const links = [
    { nome: "Início", href: "#hero" },
    { nome: "Benefícios", href: "#beneficios" },
    { nome: "Cases", href: "#cases" },
    { nome: "Sobre", href: "#quem-sou" },
    { nome: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full h-[100px] bg-[var(--preto)] px-6  z-10">
      <div id="logo" className="flex items-center">
        <img src={icone} alt="Logo" className="h-10 rounded-2xl" />
      </div>

      <nav className="flex items-center">
        {/* Botão de menu mobile */}
        <button onClick={toggleMenu} className="lg:hidden z-50">
          {menuAberto ? <IoClose size={35} /> : <IoMenu size={35} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex gap-6 2xl:gap-10">
          {links.map((link) => (
            <li key={link.nome}>
              <a
                href={link.href}
                className="hover:bg-[var(--verde)] px-4 py-2 rounded transition text-lg lg:text-1xl"
                aria-label="abre o menu mobile"
              >
                {link.nome}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Mobile */}
        <div
          className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-6 bg-[var(--preto)]/95 backdrop-blur-sm transition-all duration-1000 ease-in-out
            ${
              menuAberto
                ? "opacity-100 translate-y-0"
                : "opacity-0 pointer-events-none translate-y-[50px]"
            }
            lg:hidden`}
        >
          <ul className="text-center text-3xl">
            {links.map((link) => (
              <li key={link.nome} className="mb-4">
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="block px-6 py-2 hover:bg-[var(--verde)] rounded transition-all duration-300"
                  aria-label="fecha o menu mobile"
                >
                  {link.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
