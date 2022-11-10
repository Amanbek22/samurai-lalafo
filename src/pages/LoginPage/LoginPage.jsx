import Title from "../../components/Title/Title"

function LoginPage() {
  return (
    <div className="container">
        <Title position="center">Войти</Title>
        <form>
            <label>
                Login
                <input type="text" placeholder="login" />
            </label>
            <label>
                Password
                <input type="password" placeholder="Password" />
            </label>
            <button>Войти</button>
        </form>
    </div>
  )
}

export default LoginPage