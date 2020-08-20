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


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name="Andrey" id="1"/>
                <Dialog name="Vitaliy" id="2"/>
                <Dialog name="Sergey" id="3"/>
                <Dialog name="Dima" id="4"/>
                <Dialog name="Danil" id="5"/>
            </div>
            <div className={s.messages}>
                <Message text="Hi"/>
                <Message text="Bro? how are you"/>
                <Message text="what's app?"/>
                <Message text="Yo"/>
                <Message text="You must see that!"/>
            </div>
        </div>

    );
}
{/*<div className={s.message}></div>*/
}
{/*<div className={s.message}></div>*/
}
{/*<div className={s.message}></div>*/
}
{/*<div className={s.message}></div>*/
}
{/*<div className={s.message}></div>*/
}
export default Dialogs;