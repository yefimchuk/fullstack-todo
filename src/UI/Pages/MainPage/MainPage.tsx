import React, { useCallback, useEffect, useState } from 'react';
import './mainpage.scss';
import Todo from "./Todo/Todo";
import AddTodo from "./AddTodo/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoginDelete, selectTodos } from "../../../BLL/todo/todo.selector";
import { fetchTodos } from "../../../BLL/todo/todo.slice";
import { selectUserId } from "../../../BLL/loginUser/loginUser.selector";


function MainPage() {
    const todos = useSelector(selectTodos);
    const userId = useSelector(selectUserId);
    const deleteIsLoading = useSelector(selectIsLoginDelete);
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            if (userId || !deleteIsLoading) {
                dispatch(fetchTodos(userId));
            }
        } catch (err) {
            console.log(err);
        }

    }, [userId, deleteIsLoading]);

    return (
        <div className='main-page__container'>
        <div className="main-page">

            <div className="main-page__add-todo">
                <AddTodo/>
            </div>

            <div className="main-page__todos">
                {todos && todos.map((item: { text: string, _id: number, completed: string, important: string }, index: number) =>
                    <Todo key={index} completed={item.completed} important={item.important} id={item._id}
                          text={item.text}/>
                )}


            </div>
        </div>
        </div>
    );
}

export default MainPage;