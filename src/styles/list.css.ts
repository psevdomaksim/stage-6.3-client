import { style } from "@vanilla-extract/css";

export const listContainer = style({
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  padding: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
  minWidth: "240px",
  overflowWrap: "break-word",
});

export const listTitle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#333",
});

export const addTaskButton = style({
  cursor: "pointer",
  color: "#007bff",
  textDecoration: "underline",
  fontSize: "1rem",
  transition: "color 0.3s",

  ":hover": {
    color: "#0056b3",
  },
});

export const addTaskInputContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: "10px",
});

export const taskInput = style({
  flex: 1,
  padding: "12px",
  border: "1px solid #ced4da",
  borderRadius: "4px",
  fontSize: "1rem",
  marginBottom: "10px",
  boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
  transition: "border-color 0.3s, box-shadow 0.3s",

  ":focus": {
    borderColor: "#007bff",
    boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
    outline: "none",
  },
});

export const buttonContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const addButton = style({
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  backgroundColor: "#28a745",
  color: "white",
  fontSize: "1rem",
  transition: "background-color 0.3s, transform 0.2s",
  marginRight: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  width: "auto",

  ":hover": {
    backgroundColor: "#218838",
    transform: "scale(1.05)",
  },

  ":active": {
    backgroundColor: "#1e7e34",
  },
});

export const closeButton = style({
  cursor: "pointer",
  color: "#dc3545",
  fontSize: "1.5rem",
  transition: "color 0.3s",
  width: "40px",
  ":hover": {
    color: "#c82333",
  },
});

export const editTitleContainer = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
});

export const titleInput = style({
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
  flexGrow: 1,
  transition: "border-color 0.3s",
  outline: "none",

  ":focus": {
    borderColor: "#007bff",
    boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
  },
});

export const deleteListButton = style({
  width: "40px",
  marginLeft: "10px",
  cursor: "pointer",
  color: "#dc3545",
  fontSize: "20px",
  transition: "color 0.3s",

  ":hover": {
    color: "#c82333",
  },
});
