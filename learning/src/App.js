import logo from './logo.svg';
import './App.css';
import { Test } from './Test';
import { Header } from './Header';
import data from './data.json';
import { useState } from 'react';
import { ToDoList } from './ToDoList';
import { MeTodo } from './meTodo';

function App() {
  const [toDoList, useToDoList] = useState(data)
  const h1 = "aadi"
  return (
    <div className="App">
        {/* <Test/> */}
        {/* <ToDoList toDoList={toDoList}/> */}
        <MeTodo/>
    </div>
  );
}

export default App;
