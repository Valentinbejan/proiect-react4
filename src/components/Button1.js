import React from 'react';
import { Button } from 'antd';

const Button1 = ({ onButtonClick }) => {
    return (
        <Button  type="primary" onClick={onButtonClick}>
            Apasa aici:
        </Button>
    );
};

export default Button1;
