import React from 'react';

const Answer = ({ answer, isExpanded }) => {
    if (!isExpanded) return null;

    return (
        <div>
            {answer}
        </div>
    );
};

export default Answer;


