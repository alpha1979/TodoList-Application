import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';

function TodoList({todos= [{text : 'do something'}]}){

    return(
        <div className="list-wrapper">
        <h1>Todo List</h1>
        <NewTodoForm />
            {todos.map((todo)=> <TodoListItem todo={todo} />)}
        </div>
    )
}



export default TodoList;