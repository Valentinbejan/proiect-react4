import React from 'react';

const ProdactItem = (props) => {
    const { name, price, avatar } = props;

    const cardStyle = {
        backgroundColor: 'pink',
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={cardStyle}>
            <img src={avatar} alt={name} style={{ width: '100%' }} />
            <h2>{name}</h2>
            <p>pret: {price}</p>
        </div>
    );
};

export default ProdactItem;
