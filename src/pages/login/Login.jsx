import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <h1>Accedi</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button>Accedi</button>
        </form>
        <div>
          <span>Non hai un account?</span>
          <Link to = "/register">
            <button>Registrati</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login