import { useState } from "react";
import Title from "../../components/Title/Title";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../redux/authSlice";

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if(login === 'admin' && password === 'admin') {
      dispatch( authSliceActions.login() )
    } else {
      setError(true)
    }
  }
  return (
    <div className="container">
      <Title position="center">Войти</Title>
      <form onSubmit={submit} onChange={() => setError(false)}>
        <label>
          Login
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="login"
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </label>
        <button>Войти</button>
        {isError && <div className="error">Login or Password is incorrect</div>}
      </form>
    </div>
  );
}

export default LoginPage;
