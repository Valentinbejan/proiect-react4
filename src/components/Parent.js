import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
    const [result, setResult] = useState(false);

    const cardStyle = {
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px',
        
    };


    const handleClick = () => {
        const newResult = !result;
        setResult(newResult);
    };

    return (
        <div style={cardStyle}>
            <ChildA onButtonClick={handleClick} />
            <ChildB result={result ? "pornit" : "oprit"} />
        </div>
    );
};

export default Parent;