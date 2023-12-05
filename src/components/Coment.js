import React from 'react';

const Comment = ({ text, author, timestamp }) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('ro-RO') + ' ' + date.toLocaleTimeString('ro-RO');
    }



    const cardStyle = {
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px',
        
    };

    return (
        <div cardStyle className="comment" style={cardStyle}> 
            <h3>{author}</h3>
            <p>{text}</p>
            <small>{formatDate(timestamp)}</small>
        </div>
    );
};

export default Comment;
