import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";

const HomePage = () => {
  const houses = useSelector((state) => state.data );
  return (
    <div className="container">
        <Title position="center">Последние объявления</Title>
        <div className={"cardsWrapper"}>
          {
            houses.map((item) => <Card key={item.id} {...item} />)
          }
        </div>
    </div>
  )
}

export default HomePage;