import React from 'react';

const Post = (props) => {
    const { titel, content, author } = props;

    const cardStyle = {
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={cardStyle}>
            <h2>{content}</h2>
            <p>{author}</p>
            <p>{titel}</p>
        </div>
    );
};

export default Post;
