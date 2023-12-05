import React, { useState } from 'react';
import Button1 from './Button1';
import Message from './Message';

const Parent2 = () => {
    const [message, setMessage] = useState(false);

    const handleClick = () => {
        setMessage(!message);
    };

    const cardStyle = {
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px',
        
    };


    return (
        <div style={cardStyle}>
            <Button1 onButtonClick={handleClick} />
            <Message message={message ? "mesajul e schimbat" : "mesajul."} />
        </div>
    );
};

export default Parent2;