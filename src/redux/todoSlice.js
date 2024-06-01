import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoArr: JSON.parse(localStorage.getItem('todos')) || [],
    updateTask: '',
    filter: 'all',
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers:{

        createTodo: (state, action)=>{
            localStorage.clear();
            state.todoArr.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todoArr));
        },


        updateAction: (state, action)=>{
            state.updateTask = action.payload;
        },

        clearUpdateAction: (state)=>{
            state.updateTask = null;
        },

        updateTodo: (state, action)=>{
            // console.log("payload: ",action.payload)
            const todo = state.todoArr.find(item=> item.id === action.payload.id);

            if(!todo){
                // console.log('Todo Not FOund!')
                return;
            }

            if(action.payload.todo){
                todo.todo = action.payload.todo;
            }

            if(action.payload.status){
                todo.status = action.payload.status;
            }

          
            localStorage.clear();


            localStorage.setItem('todos', JSON.stringify(state.todoArr));

            state.updateTask = null;
        },

        deleteTodo: (state, action)=>{
            
            // console.log(action)

            state.todoArr = state.todoArr.filter(item=> {
                // console.log(action.payload, item.id);
                return item.id !== action.payload;
            })

            // console.log(state.todoArr)

            localStorage.clear();


            localStorage.setItem('todos', JSON.stringify(state.todoArr));

        },

        setFilter: (state, action)=>{
            state.filter = action.payload;
        },

        clearFilter: (state)=>{
            state.filter = '';
        }

    }

});


export const { createTodo, updateTodo, deleteTodo, updateAction, clearUpdateAction ,setFilter, clearFilter } = todoSlice.actions;

export default todoSlice.reducer;