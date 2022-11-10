import { Link } from 'react-router-dom'
import css from './Header.module.css'

const Header = () => {
  return (
    <div className={css.wrapper}>
        <Link to="/">
            <h2>Lalalfo</h2>
        </Link>
        <div>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Header