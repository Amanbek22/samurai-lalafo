import { Link } from 'react-router-dom'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.wrapper}>
        <Link to="/">
            <h2>LOGO</h2>
        </Link>
        <div>
            <Link to="/login">Войти</Link>
        </div>
    </div>
  )
}

export default Header