
import { createSelector } from "reselect";

export const selectRegisrationData = createSelector(
    (state: any) => state,
    (state) => state.registerUser.todosData
);