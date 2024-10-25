import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  content: string;
  description?: string;
}

interface TaskState {
  [key: string]: Task;
}

const initialState: TaskState = {
  "task-1": {
    id: "task-1",
    content: "Set up project structure",
    description: "Organize files and folders",
  },
  "task-2": {
    id: "task-2",
    content: "Create Redux slices",
    description: "Define initial states and actions",
  },
  "task-3": {
    id: "task-3",
    content: "Design the UI",
    description: "Create mockups and style components",
  },
  "task-4": {
    id: "task-4",
    content: "Integrate API",
    description: "Connect backend endpoints",
  },
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ taskId: string; content: string }>
    ) => {
      const { taskId, content } = action.payload;
      state[taskId] = { id: taskId, content };
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      delete state[action.payload.id];
    },
    editTask: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<Task> }>
    ) => {
      const { id, changes } = action.payload;
      if (state[id]) {
        state[id] = { ...state[id], ...changes };
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
