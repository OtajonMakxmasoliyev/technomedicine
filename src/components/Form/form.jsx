import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../Context'
import "./form.scss"

const Form = () => {
    const [user, setUser] = useContext(Context)
    const navigate = useNavigate()
    const userData = {}
    const handleInputs = (event) => {
        userData[event.target.name] = event.target.value

    }
    const submitUser = (event) => {
        event.preventDefault();
        console.log(userData);
        fetch(`http://localhost:3000/logins?username=${userData.username}&password=${userData.password}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data[0].status === "true") {
                    setUser(data[0])
                    localStorage.setItem("id", data[0].id)
                    navigate("/dashboard")
                }
            })
    }

    useEffect(() => {
        let id = localStorage.getItem("id")
        if (!id === "null") {
            fetch("http://localhost:3000/logins/" + id)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    navigate("/dashboard")
                    setUser(data)
                })
        }

    }, [])
    console.log("Context", user);
    return (
        <div className='form'>
            <div className="form_block">
                <div className="form_block_logo">
                    <img src={require("../../images/logo.png")} alt="" />
                </div>
                <div className="form_block_sign">
                    <form onChange={handleInputs} onSubmit={submitUser}>
                        <p>Xush kelibsiz</p>
                        <input type="text" name='username' placeholder='Username' />
                        <input type="password" name='password' placeholder='Password' />
                        <a href="#">Forgot Password?</a>
                        <button>Login</button>
                    </form>
                    <span>OR</span>
                    <button>Registration</button>
                </div>
            </div>
        </div>
    )
}

export default Form