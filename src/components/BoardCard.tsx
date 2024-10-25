import React from "react";
import { Board } from "../store/slices/boardSlice";
import * as styles from "../styles/boardCard.css";

interface BoardCardProps {
  board: Board;
}

const BoardCard: React.FC<BoardCardProps> = ({ board }) => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>{board.title}</h3>
    </div>
  );
};

export default BoardCard;
