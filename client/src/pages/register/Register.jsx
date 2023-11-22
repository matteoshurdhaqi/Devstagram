import { Link } from "react-router-dom";
import "./register.scss"
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [err, setErr] = useState('');

  const handleChange = (e) => {
    setInputs(prev=>({...prev, [e.target.name] : e.target.value}));
  }
  const handleClick = async (e) => {
    e.preventDefault()
  
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs)

    } catch (error) {
      setErr(Object.values(error.response.data));
    }
  }


  return (
    <div className="register">
      <div className="card">
        <h1>Registrati</h1>
        <form>
          <input type="text" placeholder="Username" name="name" onChange={handleChange}/>
          <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
          <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
          {err && (
            <p style={{color: "red"}}>{err}</p>
          )}
          <button onClick={handleClick}>Registrati</button>
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