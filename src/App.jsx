import React from 'react'
import { useSelector } from 'react-redux'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterOptions from './components/FilterOptions';

const App = () => {



  return (
    <div className="container">
      <div className="todo-header">
        <h1>ToDo List</h1>
        <div className="img-container">
          <img src="200w.gif" alt="" />
        </div>

      </div>

      <TodoInput />

      <FilterOptions />

      <TodoList />

    </div>
  )
}

export default App