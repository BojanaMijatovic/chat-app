import React from 'react';
import Message from "../Message/Message";

const ChatWindow = (props) => {
    const messages = props.message;

    const texts = messages.filter(input => input.userId).map((input, index) =>
        <Message key={index} message={input} text={input.message} />
    )

    return (
        <div className="chat-window__messages-list">
            {texts}
        </div>
    )
}

export default ChatWindow;