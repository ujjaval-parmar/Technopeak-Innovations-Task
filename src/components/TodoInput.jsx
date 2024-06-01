import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearUpdateAction, createTodo, updateTodo } from '../redux/todoSlice';

const TodoInput = () => {

    const { todoArr, updateTask } = useSelector(state => state.todo);

    const dispatch = useDispatch();

    // console.log(updateTask);


    const [todoInputValue, setTodoInputValue] = useState('');
    const [todoStatusValue, setTodoStatusValue] = useState('incomplete');
    const [error, setError] = useState('');

    useEffect(() => {
        if (updateTask) {
            setTodoInputValue(updateTask.todo);
            setTodoStatusValue(updateTask.status);
        }
    }, [updateTask])


    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        if (!todoInputValue || todoInputValue.trim() === '') {
            setError('Plese enter Task!');
            return;
        }

        const taskExist = todoArr.find(todo => todo.todo === todoInputValue);

        if (taskExist && !updateTask) {
            setError('Task already Exists!')
            return;
        }

        const id = updateTask?.id || String(Math.floor(Math.random() * (1000 - 1 + 1) + 1))

        const task = { todo: todoInputValue, status: todoStatusValue, id };

        if (updateTask) {
            dispatch(updateTodo(task));
        } else {
            dispatch(createTodo(task));
        }


        setTodoInputValue('');
        setTodoStatusValue('');
        dispatch(clearUpdateAction());

    }

    // console.log(todoInputValue, todoStatusValue);
    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type="text" name="todo" id="todo" className='todo-input' placeholder='Add Task' onChange={(e) => setTodoInputValue(e.target.value)} value={todoInputValue} />
                <select name="status" id="status" onChange={(e) => setTodoStatusValue(e.target.value)} className='todo-select' defaultValue={todoStatusValue}>
                    <option value="incomplete">incomplete</option>
                    <option value="complete">complete</option>
                </select>
                <div className="submit-container">
                    <input type="submit" value={updateTask ? 'Update Task' : 'Add Task'} />
                </div>
            </form>
            {error && <p className='error'>{error}</p>}
        </>
    )
}

export default TodoInput