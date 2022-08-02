
import { createSelector } from "reselect";

export const selectTodos = createSelector(
    (state: any) => state,
    (state) => state.todo.todos
);
export const selectIsLoginDelete = createSelector(
    (state: any) => state,
    (state) => state.todo.deleteIsLoading
);