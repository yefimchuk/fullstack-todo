
import { createSelector } from "reselect";

export const selectTodos = createSelector(
    (state: any) => state,
    (state) => state.todo.todos
);
export const selectComplete = createSelector(
    (state: any) => state,
    (state) => state.todo.completedTodos
);
export const selectIsLoginDelete = createSelector(
    (state: any) => state,
    (state) => state.todo.deleteIsLoading
);
export const selectIsCompleted = createSelector(
    (state: any) => state,
    (state) => state.todo.isCompleted
);