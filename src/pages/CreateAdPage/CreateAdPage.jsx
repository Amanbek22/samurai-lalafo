import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";

function CreateAdPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const data = {
        title: title,
        price: price,
        desciption: desc,
        imgUrl: img
    }
    fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/houses", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(() => {
            navigate("/dashboard")
        })
  }

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
        <button className="btn">+Создать</button>
      </form>
    </div>
  );
}

export default CreateAdPage;
