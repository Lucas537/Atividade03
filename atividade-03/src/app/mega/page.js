import style from "./megasena.module.css"

import Imagem from "./imagem"
import Sorteio from "./sorteio"

export default function megasena() {

    return(
        <>
        <Imagem />

        <div className={style.numeros}>


        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        <Sorteio /> 
        </div>
        <p className={style.p}>Estimativa de prêmio do próximo concurso 03/09/2024: R$ 45.785.926,30</p>
        <p className={style.p}>Acumulado próximo concurso R$ 57.469.269,01</p>
        <p className={style.p}>Acumulado próximo concurso final zero/cinco (2500) R$ 67.402.701,33</p>
        <p className={style.p}>Acumulado para Sorteio Especial Mega da Virada R$ 101.395.081,39</p>
        </>
    )
}
