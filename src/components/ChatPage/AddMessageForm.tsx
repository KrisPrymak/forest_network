import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../Redux/chatReducer';
import { AppStateType } from '../../Redux/reduxStore';
import { useSelector } from 'react-redux';

const AddMessageForm = () => {

    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const status = useSelector((state: AppStateType) => state.chat.status)

    const onHandleSend = () => {
        if (!message) return;
        //@ts-ignore
        dispatch(sendMessage(message))
        setMessage('')
    
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => {setMessage(e.currentTarget.value)}} value={message}></textarea>
            </div>
            <div>
                <button disabled={status !== 'ready'} onClick={onHandleSend}>Send</button>
            </div>
        </div>
    );
};

export default AddMessageForm;