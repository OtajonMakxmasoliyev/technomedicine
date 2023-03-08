import { ExitToApp, ExitToAppOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from "../Context"
import "./navbar.scss"

const Navbar = () => {
    const navigate = useNavigate()
    const [user, setUser] = useContext(Context)

    const exit = () => {
        localStorage.setItem("id", "null")

        navigate("/")
    }


    return (
        <div className='navbar'>
            {/*<Button variant='contained' color='primary' >Default</Button>*/}
            <div className="links">
                <div className="logo">
                    <img src={require("../../images/logo.png")} alt="" />
                </div>
                <ul>
                    <li><Link to={"/users"}>Users</Link></li>
                    <li><Link to={"/patients"}>Patients</Link></li>
                    <li><Link to={"/notice"}>Notice</Link></li>
                    {
                        user ? user.specialist === "Xamshira" ? <li><Link to={"/vaccinaform"}>Vaccina</Link></li> : null : null
                    }
                </ul>
            </div>
            <div className="doctor">
                {user && <p className='name'>{`${user["firstName"]}  ${user["lastName"]}`}</p>}
                {user && <p className='specia'>{user["specialist"]}</p>}
                {user && <img className='userimage' src={require("../../images/clients/" + user.image)} />}
                {user && <button onClick={exit}><ExitToAppOutlined /></button>}
            </div>
        </div>
    )
}

export default Navbar