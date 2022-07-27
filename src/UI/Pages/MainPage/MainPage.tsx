import React, { useCallback, useEffect } from 'react';
import './mainpage.scss';
import Todo from "./Todo/Todo";
import AddTodo from "./AddTodo/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../../../BLL/todo/todo.selector";
import { fetchTodos } from "../../../BLL/todo/todo.slice";
import { selectUserId } from "../../../BLL/loginUser/loginUser.selector";

function MainPage() {
    const todos = useSelector(selectTodos);
    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();
    useEffect( () => {
        try {
            if (userId){
                dispatch(fetchTodos(userId));
            }
        } catch (err) {
            console.log(err);
        }

    }, [userId]);

    return (
        <div className="main-page">
            <AddTodo/>
            {todos && todos.map((item: { text: string }, index: number) => <Todo key={index} text={item.text}/>
            )}
        </div>
    );
}

export default MainPage;