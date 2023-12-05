import React from 'react';
import { Button } from 'antd';


const ChildA = ({ onButtonClick }) => {
    return (
        <Button type="primary" onClick={onButtonClick}>
            Apasa aici
        </Button>
    );
};

export default ChildA;
