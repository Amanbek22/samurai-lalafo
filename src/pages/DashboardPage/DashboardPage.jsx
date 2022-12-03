import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const houses = useSelector((state) => state.houses.data );

  return (
    <div className="container">
        <Title position="center">Мои объявления</Title>
        <Link to="/create" className="btn">Добавить</Link>
        <div className="cardsWrapper">
            {houses.map((item) => <Card key={item.id} isAdmin {...item} />)}
        </div>
    </div>
  )
}

export default DashboardPage;