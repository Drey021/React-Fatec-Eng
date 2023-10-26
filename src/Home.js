import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Tarefas em React  😄</h1>
      <nav>
        <ul>  
          <li>
            <Link to={"/Atividade01"}>Atividade 1 - Letreiro e Relogio ✔️</Link>
          </li>
          <li>
            <Link to={"/Atividade02"}>Atividade 2 - Contador Homem e Mulher ✔️</Link>
          </li>
          <li>
            <Link to={"/Atividade03"}>Atividade 3 ❌</Link>
          </li>
          <li>
            <Link to={"/Atividade04"}>Atividade 4 ❌</Link>
          </li>
          <li>
            <Link to={"/Atividade05"}>Atividade 5 ❌</Link>
          </li>
        </ul>
      </nav>
      <footer>
            © 2023 Meus Projetos em REACT | Desenvolvido por Andrey S. Soares
      </footer>
    </div>
  );
}

export default Home;
