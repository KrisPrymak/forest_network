import React from 'react';

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

type MessageProps = {
    messageItem: ChatMessageType
}

const Message: React.FC<MessageProps> = ({messageItem}) => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={messageItem.photo ? messageItem.photo : 'https://ionicframework.com/docs/img/demos/avatar.svg'} width={30} alt='avatar' />
                    <div>
                        <b>{messageItem.userName}</b>
                        <p>{messageItem.userId}</p>
                    </div>
            </div>
            {messageItem.message}
            <hr />
            <br/>
        </div>
    );
};

export default Message;