import React, { useState } from 'react';
import Answer from './Answer';
import { Button } from 'antd';

const Accordion = ({ questions }) => {
    const [expandedQuestion, setExpandedQuestion] = useState('');

    const handleQuestionClick = (question) => {
        setExpandedQuestion(prevQuestion => 
            prevQuestion === question ? '' : question
        );
    };


    const cardStyle = {
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div  style={cardStyle} >
            {questions.map((qna, index) => (
                <div key={index}>
                    <Button onClick={() => handleQuestionClick(qna.question)}>
                        {qna.question}
                    </Button>
                    <Answer 
                        answer={qna.answer} 
                        isExpanded={expandedQuestion === qna.question} 
                    />
                </div>
            ))}
        </div>
    );
};

export default Accordion;
