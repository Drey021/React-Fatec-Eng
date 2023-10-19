import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

export default function Ativ01(){
    return(
        <>
        <h2>Ativ01</h2>
        <Letreiro />
        <Relogio />
        <Link to="/">Voltar</Link>
        </>
    );
}