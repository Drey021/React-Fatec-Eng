import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/Ativ01">Atividade 1 - Relogio e Letreiro </Link>
                </li>
                <li>
                    <Link to="/Ativ02">Atividade 2 -  </Link>
                </li>
                <li>
                    <Link to="/Ativ03">Atividade 3 -  </Link>
                </li>
                <li>
                    <Link to="/Ativ04">Atividade 4 -  </Link>
                </li>
                <li>
                    <Link to="/Ativ05">Atividade 5 -  </Link>
                </li>
                <li>
                    <Link to="/Ativ06">Atividade 6 -  </Link>
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
