import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Board {
  id: string;
  title: string;
  listOrder: string[]; // Stores the order of lists on the board
}

interface BoardState {
  [key: string]: Board;
}

const initialState: BoardState = {
  "board-1": {
    id: "board-1",
    title: "Project A",
    listOrder: ["list-1", "list-2"],
  },
  "board-2": {
    id: "board-2",
    title: "Project B",
    listOrder: ["list-3"],
  },
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const { id, title } = action.payload;
      state[id] = { id, title, listOrder: [] };
    },

    deleteBoard: (state, action: PayloadAction<{ boardId: string }>) => {
      delete state[action.payload.boardId];
    },

    addListToBoard: (
      state,
      action: PayloadAction<{ boardId: string; listId: string }>
    ) => {
      const board = state[action.payload.boardId];
      if (board) {
        board.listOrder.push(action.payload.listId);
      }
    },
    editBoardTitle: (
      state,
      action: PayloadAction<{ boardId: string; title: string }>
    ) => {
      const { boardId, title } = action.payload;
      state[boardId].title = title;
    },

    removeListFromBoard: (
      state,
      action: PayloadAction<{ boardId: string; listId: string }>
    ) => {
      const { boardId, listId } = action.payload;
      state[boardId].listOrder = state[boardId].listOrder.filter(
        (id) => id !== listId
      );
    },
  },
});

export const {
  addBoard,
  deleteBoard,
  addListToBoard,
  removeListFromBoard,
  editBoardTitle,
} = boardSlice.actions;
export default boardSlice.reducer;
