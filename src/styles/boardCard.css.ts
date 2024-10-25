import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#9A436D",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s",

  ":hover": {
    backgroundColor: "#8e3e65",
  },
});

export const cardTitle = style({
  fontSize: "1.5rem",
  color: "white",
  margin: "0 0 10px",
});

export const cardDescription = style({
  color: "#6c757d",
});
