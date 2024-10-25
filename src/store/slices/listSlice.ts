import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface List {
  id: string;
  title: string;
  tasks: string[];
}

interface ListsState {
  [key: string]: List;
}

const initialState: ListsState = {
  "list-1": { id: "list-1", title: "To Do", tasks: ["task-1", "task-2"] },
  "list-2": { id: "list-2", title: "In Progress", tasks: ["task-3"] },
  "list-3": { id: "list-3", title: "Done", tasks: [] },
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    moveTaskToList: (
      state,
      action: PayloadAction<{
        sourceListId: string;
        destListId: string;
        taskId: string;
        destIndex: number;
      }>
    ) => {
      const { sourceListId, destListId, taskId, destIndex } = action.payload;
      state[sourceListId].tasks = state[sourceListId].tasks.filter(
        (id) => id !== taskId
      );
      state[destListId].tasks.splice(destIndex, 0, taskId);
    },

    reorderTasksInList: (
      state,
      action: PayloadAction<{
        listId: string;
        sourceIndex: number;
        destIndex: number;
      }>
    ) => {
      const { listId, sourceIndex, destIndex } = action.payload;
      const [movedTask] = state[listId].tasks.splice(sourceIndex, 1);
      state[listId].tasks.splice(destIndex, 0, movedTask);
    },
    deleteList: (state, action: PayloadAction<{ listId: string }>) => {
      const { listId } = action.payload;
      delete state[listId];
    },
    addList: (
      state,
      action: PayloadAction<{ listId: string; title: string }>
    ) => {
      const { listId, title } = action.payload;
      state[listId] = { id: listId, title, tasks: [] };
    },
    editListTitle: (
      state,
      action: PayloadAction<{ listId: string; title: string }>
    ) => {
      const { listId, title } = action.payload;
      if (state[listId]) {
        state[listId].title = title; // Update the title in the state
      }
    },
    addTaskToList: (
      state,
      action: PayloadAction<{ listId: string; taskId: string }>
    ) => {
      state[action.payload.listId].tasks.push(action.payload.taskId);
    },
    deleteTaskFromList: (
      state,
      action: PayloadAction<{ listId: string; taskId: string }>
    ) => {
      const { listId, taskId } = action.payload;
      state[listId].tasks = state[listId].tasks.filter((id) => id !== taskId);
    },
  },
});

export const {
  moveTaskToList,
  reorderTasksInList,
  deleteList,
  addList,
  addTaskToList,
  deleteTaskFromList,
  editListTitle,
} = listsSlice.actions;
export default listsSlice.reducer;
