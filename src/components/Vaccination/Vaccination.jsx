
import { MoreHoriz } from '@mui/icons-material';
import Message from '@mui/icons-material/Message';
import React, { useEffect, useState } from 'react'
import { Modal } from '../Modal/Modal';
import "./vaccina.scss"

const Vaccination = () => {
    const [data, setData] = useState(false)
    const [forModal, setForModal] = useState()
    const [personData, setPersonData] = useState()


    const close = () => {
        setForModal(!forModal)
    }
    useEffect(() => {
        fetch("http://localhost:3000/person")
            .then(res => res.json())
            .then(response => {
                setData(response.filter((person) => {

                    if (new Date().getTime() - new Date(person.birthday).getTime() < 94670856000) {
                        return person
                    }

                }))

            })



    }, []);


    function modal(id) {
        fetch(`http://localhost:3000/person/${id}`)
            .then(res => res.json())
            .then(data => setPersonData(data))
        setForModal(!forModal)
    }


    return (
        <div className='vaccina'>
            <p className="title">Emlanish zarur bo'lgan fuqarolar </p>
            <table>
                <thead>
                    <tr>
                        <th>T/R</th>
                        <th>ID</th>
                        <th>Fuqaro Ismi</th>
                        <th>Yoshi</th>
                        <th>Holati</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map((person, index) => (

                            //<p key={index}>{person.birthday}</p>
                            <tr key={index}>
                                <td><p>{index}</p></td>
                                <td><p>{person.id}</p></td>
                                <td><p>{person.firstName} {person.lastName}</p></td>
                                <td><p>{person.birthday}</p></td>
                                <td><p style={person.holati === "true" ? { color: "green" } : { color: "red" }}>{person.holati.toString()}</p></td>
                                <td className='options'>
                                    <div className="btns">
                                        <button className='after'></button><button className='after' onClick={() => modal(person.id)} value={person.id}><MoreHoriz /></button></div>
                                </td>
                            </tr>
                        )) : null


                    }
                </tbody>
            </table>

            {
                forModal ? <Modal {...personData} click={close} /> : null
            }
        </div >
    )
}

export default Vaccination