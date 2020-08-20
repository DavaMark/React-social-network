import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    );
}


let dialogsData = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Vitaliy"},
    {id: 3, name: "Sergey"},
    {id: 4, name: "Dima"},
    {id: 5, name: "Danil"}
]

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Bro? how are you"},
    {id: 3, message: "what's app?"},
    {id: 4, message: "Yo"},
    {id: 5, message: "You must see that!"}
]


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message text={messagesData[0].message}/>
                <Message text={messagesData[1].message}/>
                <Message text={messagesData[2].message}/>
                <Message text={messagesData[3].message}/>
                <Message text={messagesData[4].message}/>
            </div>
        </div>

    );
}

export default Dialogs;