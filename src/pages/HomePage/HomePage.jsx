import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
        <Title position="center">Последние объявления</Title>
        <div className={css.cardsWrapper}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default HomePage;