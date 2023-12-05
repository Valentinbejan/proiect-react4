import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import { Button } from 'antd';
 
const ProductList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleProductClick = (product) => {
        if (buttonClicked) {
            setSelectedProduct(null);
            setButtonClicked(false);
        } else {
            setSelectedProduct(product);
            setButtonClicked(true);
        }
    };

    const cardStyle = {
        backgroundColor: 'yellow',
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={cardStyle}>
            <div>
                {products.map((product, index) => (
                    <Button style={{ width: '175px' , height: "50px" , background: "lightblue", marginBottom: "10px"}} key={index} onClick={() => handleProductClick(product)}>
                        {product.name}
                    </Button>
                ))}
            </div>
            <ProductDetails product={selectedProduct} />
        </div>
    );
};

export default ProductList;
