import { useState } from "react";
import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
import Logo from "assets/logo.svg";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from "./Itens";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filto, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <main>
      <nav className={styles.menu}>
        <img src={Logo} alt="Logo Aluroni" />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filto} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens />
      </section>
    </main>
  );
}
