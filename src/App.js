import logo from './logo.svg';
import './App.css';

import { Button } from 'antd';
import React, { useState } from 'react';


import UserCard from './components/UserCard';
import ProdactItem from './components/ProductItem';
import Post from './components/Post';
import Comment from './components/Coment';
import TodoItem from './components/TodoItem';
import Parent from './components/Parent';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Parent2 from './components/Parent2';
import Form from './components/Form';
import UserList from './components/UserList';
import TemperatureConverter from './components/TemperatureConverter';


import Accordion from './components/Accordion';

import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  const [completed, setCompleted] = useState(true);

  const handleToggle = () => {
      setCompleted(!completed);
  };


  const [users, setUsers] = useState([]);

    const handleFormSubmit = (user) => {
        setUsers([...users, user]);
    };




    const questions = [
      {
          question: 'intrebare1',
          answer: 'raspuns1',
      },
      {
          question: 'intrebare2',
          answer: 'raspuns2.',
      },
      {
        question: 'intrebare3',
        answer: 'raspuns3.',
    },
    {
      question: 'intrebare4',
      answer: 'raspuns4.',
  },
     
  ];

  // const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
      { name: 'Produs 1', description: 'Produs1' },
      { name: 'Produs 2', description: 'Produs2' },
      { name: 'Produs 3', description: 'Produs3' },
      { name: 'Produs 4', description: 'Produs4' },
     
  ];

  // const handleProductSelect = (product) => {
  //     setSelectedProduct(product);
  // };

  return (
    <div className="App">
      <Button>Click me</Button>
      <UserCard 
                name="Catalin" 
                email="Catalin@gmail.com" 
                avatar="data:image/jpeg;base64,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"
                />

    <ProdactItem 
      name="Produs 1"
      price="100"
      avatar="data:image/jpeg;base64,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"
    />

    
    <Post
      titel="Titlu 1"
      content="Content 1"
      author="Autor 1"
    
    />

<div >
<Comment
                text="Acesta este un comentariu foarte util."
                author="Autor Comentariu"
                timestamp={new Date().getTime()}
            />

</div>
   
   
<div>
<TodoItem
                text="Fa ceva"
                completed={completed}
                onToggle={handleToggle}
            />
            <Button style={{ width: '250px' , height: "100px", background: "lightblue", position: 'absolute',top: '970px',left: '136px'}} onClick={handleToggle}>
                {completed ? "Incomplet" : "Complet"}
            </Button>
        </div>

<Parent/>
<Counter/>
<Timer/>
<Parent2/>
 <Form />

            <Accordion questions={questions} />

            

            <ProductList products={products} />

            

           

    </div>
  );
}

export default App;
