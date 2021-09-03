import React from 'react';

const Message = (props) => {
    return (
        <div className="chat-window__message-wrapper">
            <p className="chat-window__message">{props.text}</p>
        </div>
    )
}

export default Message;