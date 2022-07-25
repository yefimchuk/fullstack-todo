import React, { useState } from 'react';

function AddTodo() {
    let [addTodo, setAddTodo] = useState(true);
    return (
        <div>{
            addTodo ? <div
                           onClick={() => setAddTodo(false)}>
                <i className="material-icons #e8eaf6 white-text ">add</i>
                <p className="white-text ">Add todo</p>
            </div> : <div>
                <input autoFocus={true} placeholder={'type your to do...'} onBlur={() => setAddTodo(true)}/>
            </div>
        }</div>
    );
}

export default AddTodo;