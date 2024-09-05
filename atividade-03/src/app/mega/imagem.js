import style from "./megasena.module.css"

export default function Imagem() {
  return (
    <>
    <div className={style.div}>

    <img src="https://img.odcdn.com.br/wp-content/uploads/2022/10/mega-sena-1.jpg" className={style.imagem}></img>
    </div>
    <div>
    <h1 className={style.h1}>Números Premiados:</h1>
    </div>
    </>
  )
}
