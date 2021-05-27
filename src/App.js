import React, { useState } from 'react';
import './App.css';
import Form from './components/Forms/Form';
import List from './components/List/List';

function App() {

  const [items, setNewItems] = useState([]);

  const addNewItem = (data) => {
    setNewItems(oldArray => {
      return [...oldArray, data];
    });
  };

  return (
    <React.Fragment>
      <Form onAddNewItem={addNewItem}/>
      <List items={items}/>
    </React.Fragment>
  );  

};

export default App;
