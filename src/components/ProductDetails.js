import React from 'react';

const ProductDetails = ({ product }) => {
    if (!product) return <div>Selecteaza un produs.</div>;

    const cardStyle = {
        border: '1px solid black',
        width: '175px',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={cardStyle}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;
