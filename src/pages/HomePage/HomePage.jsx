import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";

const HomePage = ( { houses } ) => {
  console.log(houses);
  return (
    <div className="container">
        <Title position="center">Последние объявления</Title>
        <div className={"cardsWrapper"}>
          {
            houses.map((item) => <Card {...item} />)
          }
        </div>
    </div>
  )
}

export default HomePage;