import { style } from "@vanilla-extract/css";

export const taskContainer = style({
  padding: "12px",
  marginBottom: "8px",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  color: "#333",
  overflowWrap: "break-word",
  wordBreak: "break-word",

});

export const deleteTaskButton = style({
  border: "none",
  cursor: "pointer",
  fontSize: "20px",
  color: "#dc3545",
  transition: "color 0.3s",

  ":hover": {
    color: "#c82333", 
  },
});

export const editTaskButton = style({
  backgroundColor: "transparent",
  fontSize: "20px",
  border: "none",
  cursor: "pointer",
  color: "#0079bf",
  ":hover": {
    color: "#005bb5",
  },
});

export const modalOverlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000, 
});

export const modalContent = style({
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "20px",
  width: "400px", 
  maxWidth: "90%", 
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  position: "relative", 
  overflowWrap: "break-word",
  wordBreak: "break-word",
});
export const input = style({
  width: "95%",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ced4da",
  boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
  marginBottom: "15px",
  fontSize: "16px", 
  transition: "border-color 0.3s, box-shadow 0.3s",

  ":focus": {
    borderColor: "#80bdff",
    boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)", 
    outline: "none", 
  },

  ":hover": {
    borderColor: "#80bdff",
  },
});

export const textarea = style({
  width: "95%",
  minHeight: "100px",
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ced4da",
  boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
  resize: "none", 
  marginBottom: "15px",
  fontSize: "16px", 
  transition: "border-color 0.3s, box-shadow 0.3s",

  ":focus": {
    borderColor: "#80bdff",
    boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)", 
    outline: "none", 
  },

  ":hover": {
    borderColor: "#80bdff",
  },
});

export const modalFooter = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "10px",
});

export const saveButton = style({
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: "10px", 
  transition: "background-color 0.3s",

  ":hover": {
    backgroundColor: "#218838",
  },
});

export const closeButton = style({
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s",

  ":hover": {
    backgroundColor: "#c82333",
  },
});
