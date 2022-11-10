import css from "./Card.module.css"

// TODO: implement all props 
function Card() {
  return (
    <div className={css.wrapper}>
        <div className={css.imgWrapper}>
            <img src="https://media.istockphoto.com/id/155666671/vector/vector-illustration-of-red-house-icon.jpg?s=612x612&w=0&k=20&c=tBqaabvmjFOBVUibZxbd8oWJqrFR5dy-l2bEDJMtZ40=" alt="#" />
        </div>
        <div className={css.content}>
            <h2>Продаю 6км дом  в Бишкеке</h2>
            <h3>55000$</h3>
            <button>Подробнее</button>
        </div>
    </div>
  )
}

export default Card;
