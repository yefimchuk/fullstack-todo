import React from 'react';
import './todo.scss';

function Todo({text}: { text: string }) {
    return (
        <div className="todo-container">
            <div className="todo-container__completed-circle">

            </div>
            <div className="todo-container_todo-name">
                {text}
            </div>
            <i className="material-icons white-text ">star</i>
            <i className="material-icons  red-text text-accent-4 ">delete</i>
        </div>
    );
}

export default Todo;