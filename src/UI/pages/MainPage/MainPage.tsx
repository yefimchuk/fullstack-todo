import React, { useCallback, useEffect, useState } from 'react';
import './mainpage.scss';
import Todo from "../../components/Todo/Todo";
import AddTodo from "../../components/AddTodo/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { selectComplete, selectIsCompleted, selectIsLoginDelete, selectTodos } from "../../../BLL/todo/todo.selector";
import { fetchTodos } from "../../../BLL/todo/todo.slice";
import { selectUserId } from "../../../BLL/loginUser/loginUser.selector";


function MainPage() {
    const todos = useSelector(selectTodos);
    const completeTodos = useSelector(selectComplete);
    const userId = useSelector(selectUserId);
    const deleteIsLoading = useSelector(selectIsLoginDelete);
    const isCompleted = useSelector(selectIsCompleted);
    const [completedDropdown, setCompletedDropdown] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        try {

            if (userId && !deleteIsLoading && !isCompleted) {
                dispatch(fetchTodos(userId));
            }
        } catch (err) {

        }

    }, [userId, deleteIsLoading, isCompleted]);

    return (
        <div className="main-page__container">
            <div className="main-page">

                <div className="main-page__add-todo">
                    <AddTodo/>
                </div>

                <div className="main-page__todos">
                    {todos && todos.map((item: { text: string, _id: number, completed: string, important: string }, index: number) =>
                        <Todo key={item._id} completed={item.completed} important={item.important} id={item._id}
                              text={item.text}/>
                    )}
                    {completeTodos && <div className="main-page__completed-todos_container">
                        <div className="main-page__completed-todos" onClick={() => setCompletedDropdown(!completedDropdown)}>
                            <div className="material-icons">keyboard_arrow_down</div>
                            <div> Completed {completeTodos.length}</div>
                        </div>

                    </div>}
                    {completedDropdown && completeTodos && completeTodos.map((item: { text: string, _id: number, completed: string, important: string }, index: number) =>
                        <Todo key={item._id} completed={item.completed} important={item.important} id={item._id}
                              text={item.text}/>
                    )}
           


                </div>
            </div>
        </div>
    );
}

export default React.memo(MainPage);