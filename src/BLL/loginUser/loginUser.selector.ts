
import { createSelector } from "reselect";

export const selectToken = createSelector(
    (state: any) => state,
    (state) => state.loginUser.token
);
export const selectUserId = createSelector(
    (state: any) => state,
    (state) => state.loginUser.id
);