import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <h1>Registrati</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Registrati</button>
        </form>
        <div>
          <span>Hai già un account?</span>
          <Link to = "/login">
            <button>Accedi</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register