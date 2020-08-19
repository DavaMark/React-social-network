import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Bill
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Bro? how are you</div>
                <div className={s.message}>what's app?</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>You must see that!</div>
            </div>
        </div>

    );
}

export default Dialogs;