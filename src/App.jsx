import { Header } from "./components/header";
import { Home } from "./components/home";
import { Dores } from "./components/dores";
import { Solucao } from "./components/solucao";
import { Oferta } from "./components/oferta/oferta";
import { Sobre } from "./components/sobre";
import { Beneficios } from "./components/beneficios";
import { Cases } from "./components/cases";
import { Contato } from "./components/contato";
import { Footer } from "./components/footer";
import { Duvidas } from "./components/Duvidas";

function App() {
  return (
    <div className="m-3 max-w-[1200px]">
      <Header />
      <Home />
      <Dores />
      <Solucao />
      <Oferta />
      <Beneficios />
      <Cases />
      <Duvidas />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
