import React, { useState } from 'react';

const InputMessage = (props) => {
    // const [message, setMessage] = useState('');
    //
    // const handleChange = (e) => {
    //     setMessage(e.target.value)
    // }


    const input = document.getElementById('input-message__field') ? document.getElementById('input-message__field').value : '' ;
    return (

        <form className="chat-window__input-wrapper" onSubmit={props.handleSubmit}>
            <label htmlFor="input-message__field" />
            <input
                value={props.message}
                type="text"
                placeholder="Type your message"
                id="input-message__field"
                onChange={props.handleChange}
            />
        </form>
    );
}

export default InputMessage;