import React, { useEffect, useRef, useState } from 'react';
import Message, { ChatMessageType } from './Message';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/reduxStore';

const Messages = () => {
   const messages = useSelector((state: AppStateType) => state.chat.messages);
   const messagesAnchorRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
   }, [messages])

    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map((n , i) => <Message messageItem={n} key={i}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    );
};

export default Messages;