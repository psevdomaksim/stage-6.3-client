import { style } from "@vanilla-extract/css";

export const boardContainer = style({
  display: "flex",
  gap: "16px",
  padding: "16px",
  backgroundColor: "#f4f5f7",
  overflowWrap: "break-word",
  wordBreak: "break-word",
  overflowX: "auto",
});

export const addListContainer = style({
  backgroundColor: "#ffffff",
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
  width: "280px",
});

export const addListInput = style({
  padding: "8px",
  marginBottom: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
});

export const addListButton = style({
  width: "100%",
  padding: "10px",
  backgroundColor: "#0079bf",
  color: "#ffffff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#005bb5",
  },
});

export const boardTitle = style({
  cursor: "pointer",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
  textAlign: "center",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const boardEditIcon = style({
  marginRight: "25px",
});

export const modalContent = style({
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  width: "20em",
  margin: "auto",
});

export const modalOverlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export const input = style({
  width: "95%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "4px",
  border: "1px solid #ced4da",
});

export const modalFooter = style({
  display: "flex",
  justifyContent: "space-between",
});

export const saveButton = style({
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});

export const closeButton = style({
  backgroundColor: "#6c757d",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});

export const deleteBoardSpan = style({
  cursor: "pointer",
  color: "#dc3545",
  marginLeft: "10px",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "14px",
});

export const deleteBoardButton = style({
  marginLeft: "5px",
});
