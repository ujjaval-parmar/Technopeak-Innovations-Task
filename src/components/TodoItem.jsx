import React from 'react'
import { deleteTodo, updateAction } from '../redux/todoSlice'
import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch();

    const handleDelete = id => dispatch(deleteTodo(id));

  return (
    <div className='single-todo'>
        <h3>{todo.todo}</h3>
        <p className={todo.status === 'complete' ? 'complete' : 'incomplete'}>{todo.status}</p>
        <div className="btn-container">
        <button className='update' onClick={()=> dispatch(updateAction(todo))}>Update</button>
        <button className='delete' onClick={()=> handleDelete(todo.id)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem