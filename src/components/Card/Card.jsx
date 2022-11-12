import css from "./Card.module.css"

function Card({ imgUrl, title, price, isAdmin }) {
  return (
    <div className={css.wrapper}>
        <div className={css.imgWrapper}>
            <img src={imgUrl} alt="#" />
        </div>
        <div className={css.content}>
            <h2>{title}</h2>
            <h3>{price}$</h3>
            {
              isAdmin 
                ? <button className="btn danger">Удалить</button>
                : <button className="btn">Подробнее</button>
            }
        </div>
    </div>
  )
}

export default Card;
