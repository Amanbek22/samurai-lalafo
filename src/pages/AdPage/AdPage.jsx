import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AdPage() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://605b21f027f0050017c063b9.mockapi.io/api/v3/houses/${id}`)
        .finally(() => {
            setLoading(false)
        })
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
  }, [id])

  if(isLoading || data === null) {
    return <h1>...Loading</h1>
  }
//   TODO: fix in lesson
//   if(data === null) {
//     return <h1></h1>
//   }
  return (
    <div>
      <h1>AdPage id = {id}</h1>
      <h2>Title: {data.title}</h2>
      <h2>Price: {data.price}$</h2>
    </div>
  );
}

export default AdPage;
