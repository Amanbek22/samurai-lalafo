import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authSliceActions } from '../../redux/authSlice'
import css from './Header.module.css'

const Header = () => {
  const auth = useSelector( (state) => state.auth.isAuth )
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( authSliceActions.logout() )
  }
  return (
    <div className={css.wrapper}>
        <Link to="/">
            <h2>Lalalfo</h2>
        </Link>
        <div>
          {
            auth 
              ? <>
                  <Link to="/dashboard">Dashboard</Link>
                  <div onClick={onLogout}>Logout</div>
                </> 
              : <Link to="/login">Login</Link>
          }
            
        </div>
    </div>
  )
}

export default Header