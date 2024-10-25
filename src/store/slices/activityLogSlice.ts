import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActivityLogEntry {
  message: string;
  timestamp: string;
}

interface ActivityState {
  logs: ActivityLogEntry[];
}

const initialState: ActivityState = {
  logs: [],
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    logActivity: (state, action: PayloadAction<string>) => {
      const newLogEntry: ActivityLogEntry = {
        message: action.payload,
        timestamp: new Date().toISOString(), // Add current date and time
      };
      state.logs.push(newLogEntry); // Add the new log entry to the logs
    },
    clearLog: (state) => {
      state.logs = []; // Clear the log
    },
  },
});

export const { logActivity, clearLog } = activitySlice.actions;
export default activitySlice.reducer;
