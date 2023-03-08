import { Close, CloseFullscreen, ExitToApp } from '@mui/icons-material'
import React from 'react'
import "./modal.scss"

const Modal = (props) => {
    const { id, firstName, lastName, birthday } = props

    return (
        <div className='modal'>
            <button className='after' onClick={props.click}><Close /></button>

            <div className="modal_block">
                <p>{id}</p>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{birthday}</p>
            </div>
        </div>
    )
}



const ModalAdd = () => {
    return (
        <div>
            <input type="text" name='firstName' />
            <input type="text" name='lastName' />
            <input type="date" name='birthday' />
            
        </div>
    )
}

export { Modal }