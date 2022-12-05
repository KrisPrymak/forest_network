import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Kesha
                </div>
                <div className={s.dialog}>
                    Lalka
                </div>
                <div className={s.dialog}>
                    Musya
                </div>
                <div className={s.dialog}>
                    Kiska
                </div>
                <div className={s.dialog}>
                    Gosha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    hello, how are you
                </div>
                <div className={s.message}>
                   Yo yo yo
                </div>
                <div className={s.message}>
                    lalalal lolo
                </div>
            </div>
        </div>
    );
};

export default Dialogs;