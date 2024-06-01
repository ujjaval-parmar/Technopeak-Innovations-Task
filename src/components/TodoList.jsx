import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {

    const { todoArr, filter } = useSelector(state => state.todo);

    const [filteredArr, setFilteredArr] = useState(todoArr);

    // console.log("filter: ", filter);

    useEffect(() => {
        if (filter !== 'all') {
            setFilteredArr(todoArr.filter(todo => todo.status === filter));
            return;
        }
        setFilteredArr(todoArr);

    }, [todoArr, filter]);

     if(todoArr.length===0){
        return <h2>Plese Add Task.</h2>
    }

    return (
        <div className='todo-container'>
            {filteredArr.length > 0 && filteredArr.map(todo => {
                return <TodoItem todo={todo} key={todo.id} />
            })}
        </div>
    )
}

export default TodoList
