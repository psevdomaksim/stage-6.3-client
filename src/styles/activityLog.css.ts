import { style } from "@vanilla-extract/css";

export const activityLogContainer = style({
  width: "300px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  padding: "16px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  right: "0",
  top: "60px",
  height: "calc(100% - 60px)",
  zIndex: 1000,
  overflowY: "auto",
});

export const activityList = style({
  listStyleType: "none",
  padding: "0",
  margin: "0",
});

export const activityItem = style({
  padding: "10px",
  borderBottom: "1px solid #ddd",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ":last-child": {
    borderBottom: "none",
  },
});

export const activityText = style({
  fontSize: "14px",
  color: "#333",
});

export const activityDate = style({
  fontSize: "12px",
  color: "#888",
});
