import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
const data = {}

const VaccinaForm = () => {
    const [result, setResult] = useState()

    const handleInput = (event) => {
        data[event.target.name] = event.target.value
        setResult({ ...data })
    }
    const send = () => {
        fetch("http://localhost:3000/person", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(res => console.log(res))

        document.querySelectorAll("input[name]").forEach(input => {
            input.value = ""
        })
    }

    return (
        <div>
            <Navbar />
            <div className="form">
                <input type="text" onChange={handleInput} name="firstName" required placeholder='Ismi' />
                <input type="text" onChange={handleInput} name="lastName" required placeholder='Familiyasi' />
                <input type="date" onChange={handleInput} name="birthday" required />
                <input type="text" onChange={handleInput} name="diseaseType" required placeholder='Kasallik turi' />
                <input type="checkbox" onChange={handleInput} name="holati" required placeholder='Holati' />
                <button onClick={send}>Send</button>
            </div>
        </div>
    )
}

export default VaccinaForm