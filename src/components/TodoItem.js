import React from 'react';

const TodoItem = (props) => {
    const { text, completed } = props;

    const cardStyle = {
        border: '1px solid black',
        width: '500px',
         height: "200px",
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={cardStyle} className="todo-item">
        <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
        <p>{completed ? "Completed" : "Incomplete"}</p>
    </div>
    );
};

export default TodoItem;
