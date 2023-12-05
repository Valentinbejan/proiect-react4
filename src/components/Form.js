import React, { useState } from 'react';
import UserList from './UserList';
import { Input } from 'antd';
import { Button } from 'antd';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (name.trim() === '' || email.trim() === '') {
          return;
        }
      
        const newUser = { name, email };
      
        setUsers((prevUsers) => [...prevUsers, newUser]);
      
        // clear the input fields
        setName('');
        setEmail('');
      };



    const cardStyle = {
        
        backgroundColor: 'lightgreen',
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={cardStyle}>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="primary" htmlType="submit">
        Submit
      </Button>
            </form>
            <UserList users={users} />
        </div>
    );
};

export default Form;
