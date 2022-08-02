import React from 'react';
import './todo.scss';
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo, importantTodo } from "../../../../BLL/todo/todo.slice";

function Todo({text, id, important, completed}: { text: string, id: number, important: string, completed: string }) {
    const dispatch = useDispatch();
console.log(completed)

    return (
        <div className={`todo-container ${completed && 'completed-hover'}`}>
            <div className={`todo-container__completed-circle ${completed && 'todo-container__completed-circle_empty'}`} onClick={() => dispatch(completeTodo(id))}>
                <i className={`material-icons black-text tiny ${!completed && 'complete-hover hover-opacity'}`} >check</i>
            </div>
            <div className={`todo-container_todo-name ${completed && 'text-decoration'}`}>
                {text}
            </div>
            <i className={`material-icons white-text small  hover-scale ${important&& 'hover-star'}`} onClick={() => dispatch(importantTodo(id))}>star</i>
            <i className={`material-icons  red-text small text-accent-4  hover-scale  ${completed && 'delete-none'}`} onClick={() => dispatch(deleteTodo(id))}>delete</i>
        </div>
    );
}

export default React.memo(Todo);