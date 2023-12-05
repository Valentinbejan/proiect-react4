import React from 'react';

const UserCard = (props) => {
    const { name, email, avatar } = props;

    const cardStyle = {
        backgroundColor: 'lightblue',
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={cardStyle}>
            <img src={avatar} alt={name} style={{ width: '100%' }} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default UserCard;
