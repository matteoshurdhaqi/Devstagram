import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  const [err, setErr] = useState('');

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev=>({...prev, [e.target.name] : e.target.value}));
  }
  const {login} = useContext(AuthContext);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (error) {
      setErr(Object.values(error.response.data))
    }
  }
  
  return (
    <div className="login">
      <div className="card">
        <h1>Accedi</h1>
        <form>
          <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
          <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
          {err && (
            <p style={{color: "red"}}>{err}</p>
          )}
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