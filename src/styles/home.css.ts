import { style } from "@vanilla-extract/css";

export const homeContainer = style({
  padding: "20px",
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
});

export const title = style({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#343a40",
  textAlign: "center",
  marginBottom: "30px",
});

export const boardList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "20px",
});

export const boardLink = style({
  textDecoration: "none",
  transition: "transform 0.3s, box-shadow 0.3s",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",

  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
});
