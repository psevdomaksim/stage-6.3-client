import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Board from "../components/Board";
import * as styles from "../styles/boardPage.css";

const BoardPage: React.FC = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const board = useSelector((state: RootState) => state.boards[boardId!]);

  if (!board) {
    return <div className={styles.errorMessage}>Board not found</div>;
  }

  return (
    <div className={styles.boardPageContainer}>
      <Board boardId={boardId!} />
    </div>
  );
};

export default BoardPage;
