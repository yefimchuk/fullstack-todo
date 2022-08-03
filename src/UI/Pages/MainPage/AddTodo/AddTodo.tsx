import React, { useState } from 'react';
import './addtodo.scss';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../../../../BLL/todo/todo.slice";
import { selectUserId } from "../../../../BLL/loginUser/loginUser.selector";

function    AddTodo() {
    const [addTodo, setAddTodo] = useState(true);
    const dispatch = useDispatch()
    const userId = useSelector(selectUserId);
    const formik = useFormik({
        initialValues: {
            text: '',
        },
        onSubmit: values => {
        },
    });
    return (

        <div className="add-todo_container">

                {
                addTodo ? <div className="add-todo_container_disabled"
                               onClick={() => setAddTodo(false)}>
                    <i className="material-icons indigo-text text-lighten-3  add-todo_container__icon">add</i>
                    <p className="indigo-text text-lighten-3  add-todo_container__text">Add todo</p>
                </div> : <div className="add-todo_container_enable">
                    <input   id="text"
                             name="text" onChange={formik.handleChange}
                           value={formik.values.text} className="add-todo_container__input" autoFocus={true}
                           placeholder={'Type your to do...'}
                           onKeyDown={(e) => {
                               if (e.key === 'Enter') {
                                   const text = formik.values.text
                                   dispatch(addTodos({text, userId}))
                                   return formik.values.text = ''
                               }
                           }}
                           onBlur={() => setAddTodo(true)}/>
                </div>
            }
        </div>
    );
}

export default AddTodo;