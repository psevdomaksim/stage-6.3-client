// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"; // Import your store
import Home from "./pages/Home";
import BoardPage from "./pages/BoardPage";
import "./App.css";
import Navbar from "./components/Navbar";
import ActivityLog from "./components/ActivityLog";

const App: React.FC = () => {
  const [isActivityLogOpen, setActivityLogOpen] = useState(false);

  const toggleActivityLog = () => {
    setActivityLogOpen(!isActivityLogOpen);
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <button className="toggle-button " onClick={toggleActivityLog}>
          {isActivityLogOpen ? "Close Activity Log" : "Open Activity Log"}
        </button>
        {isActivityLogOpen && <ActivityLog />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/:boardId" element={<BoardPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
