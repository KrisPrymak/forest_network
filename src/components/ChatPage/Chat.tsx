import React, { useEffect } from 'react';
import Messages from './Messages';
import AddMessageForm from './AddMessageForm';
import { startMessagesListining, stopMessagesListining } from '../../Redux/chatReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/reduxStore';



const Chat = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        //@ts-ignore
        dispatch(startMessagesListining())
        return () => {
            //@ts-ignore
            dispatch(stopMessagesListining())
        }
    }, [])

    return (
        <div style={{ padding: '20px' }}>
            {status === 'error' && <div>Please refresh the page</div>}
            <Messages />
            <AddMessageForm  />
        </div>
    );
};

export default Chat;