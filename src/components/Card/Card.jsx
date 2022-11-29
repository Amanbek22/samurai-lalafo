import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import API from "../../api/Api";
import { housesSliceActions } from "../../redux/houseSlice";
import css from "./Card.module.css";

function Card({ id, imgUrl, title, price, isAdmin }) {

  const dispatch = useDispatch();

  const onDelete = () => {
    const res = window.confirm("Удалить?");
    if (res) {
      API.deleteAdById(id).then(() => {
        alert("Вы успешно удалили " + id);
        // window.location.reload();
        dispatch(housesSliceActions.deleteHouse(id))
      });
    }
  };
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img src={imgUrl} alt="#" />
      </div>
      <div className={css.content}>
        <h2>{title}</h2>
        <h3>{price}$</h3>
        {isAdmin ? (
          <button onClick={onDelete} className="btn danger">
            Удалить
          </button>
        ) : (
          <Link to={`/ad/${id}`} className="btn">
            Подробнее
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
