import { style } from "@vanilla-extract/css";

export const addBoardCard = style({
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#e7f0ff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.3s",

  ":hover": {
    backgroundColor: "#d6e4ff",
  },
});

export const modalContent = style({
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  width: "20em",
  margin: "auto",
  transform: "translateY(-50%)",
  position: "relative",
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
