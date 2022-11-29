import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../api/Api";
import Title from "../../components/Title/Title";
import { housesSliceActions } from "../../redux/houseSlice";

function CreateAdPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [isSending, setSending] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    setSending(true)
    const data = {
      title: title,
      price: price,
      desciption: desc,
      imgUrl: img,
    };
    API.createAd(data)
    .then((res) => {
      dispatch(housesSliceActions.addHouse(res.data));
      navigate("/dashboard");
    });
  };

  return (
    <div className="container">
      <Title>Создать объявления</Title>
      <form onSubmit={submit} className="d-grid">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="inp"
          placeholder="Title"
          type="text"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="inp"
          placeholder="Description"
          rows="10"
        ></textarea>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="inp"
          placeholder="Price"
          type="number"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="inp"
          placeholder="Image"
          type="text"
        />
        <button disabled={isSending} className="btn">+Создать</button>
      </form>
    </div>
  );
}

export default CreateAdPage;
