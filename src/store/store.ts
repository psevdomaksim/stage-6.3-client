import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import listReducer from "./slices/listSlice";
import taskReducer from "./slices/taskSlice";
import activityReducer from "./slices/activityLogSlice";

export const store = configureStore({
  reducer: {
    boards: boardReducer,
    lists: listReducer,
    tasks: taskReducer,
    activity: activityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
