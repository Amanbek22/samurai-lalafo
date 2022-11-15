import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";


const DashboardPage = ({ houses }) => {
  return (
    <div className="container">
        <Title position="center">Мои объявления</Title>
        <button className="btn">+Добавить</button>
        <div className="cardsWrapper">
            {houses.map((item) => <Card key={item.id} isAdmin {...item} />)}
        </div>
    </div>
  )
}

export default DashboardPage;