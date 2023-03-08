import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import Form from "./components/Form/form";
import "./index.css";
import { Context } from './components/Context';
import Dashboard from './Pages/Dashboard/Dashboard';
import VaccinaForm from './components/Vaccination/vaccinaForm';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Form />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/vaccinaform",
        element: <VaccinaForm />,
    },
]);


function All() {
    const [user, setUser] = useState()
    useEffect(() => {
        const id = localStorage.getItem("id")
        if (id) {
            fetch(`http://localhost:3000/logins/${id}`)
                .then((res) => res.json())
                .then(data => {
                    setUser(data)
                })

        }
    }, [])
    return (
        <React.StrictMode>
            <Context.Provider value={[user, setUser]}>
                <RouterProvider router={router} />
            </Context.Provider>
        </React.StrictMode>


    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<All />);
