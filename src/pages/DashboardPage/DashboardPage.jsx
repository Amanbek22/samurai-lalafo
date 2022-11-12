import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";


const DashboardPage = () => {
  return (
    <div className="container">
        <Title position="center">Мои объявления</Title>
        <button className="btn">+Добавить</button>
        <div className="cardsWrapper">
            <Card isAdmin />
            <Card isAdmin />
            <Card isAdmin />
            <Card isAdmin />
        </div>
    </div>
  )
}

export default DashboardPage;