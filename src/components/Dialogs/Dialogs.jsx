import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



/*let dialogsData = [
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
]*/




const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messagesElements = props.messagesData.map ( message => <Message text={message.message}/> )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );
}

export default Dialogs;