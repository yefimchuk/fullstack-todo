
import { createSelector } from "reselect";

export const selectErrors = createSelector(
    (state: any) => state,
    (state) => state.registerUser.errors
);
export const selectStatus = createSelector(
    (state: any) => state,
    (state) => state.registerUser.status
);