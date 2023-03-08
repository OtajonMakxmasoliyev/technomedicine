import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import VaccinaForm from '../../components/Vaccination/vaccinaForm'
import Vaccination from '../../components/Vaccination/Vaccination'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Vaccination />
        </div>
    )
}

export default Dashboard