import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const images = [
  "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  "https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149",
  "https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg"
]
function AdPage() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://605b21f027f0050017c063b9.mockapi.io/api/v3/houses/${id}`)
      .finally(() => {
        setLoading(false);
      })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  if (isLoading || data === null) {
    return <h1>...Loading</h1>;
  }
  //   TODO: fix in lesson
  //   if(data === null) {
  //     return <h1></h1>
  //   }
  return (
    <div className="container d-flex">
      <div>
        <Carousel width={'600px'}>
          <img src={data.imgUrl} alt="" />
          {
            images.map((item) => <img src={item} />)
          }
         </Carousel>
      </div>
      <div>
        <h1>AdPage id = {id}</h1>
        <h2>Title: {data.title}</h2>
        <h2>Price: {data.price}$</h2>
        <h3>Description: {data.description}</h3>
      </div>
    </div>
  );
}

export default AdPage;
