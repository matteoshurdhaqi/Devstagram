import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const {login} = useContext(AuthContext);
  const handleLogin = () => {
    login();
  }
  
  return (
    <div className="login">
      <div className="card">
        <h1>Accedi</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>
          <button onClick={handleLogin}>Accedi</button>
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