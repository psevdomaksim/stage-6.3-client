import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import * as styles from "../styles/home.css";
import BoardCard from "../components/BoardCard";
import AddBoardCard from "../components/AddBoardCard";

const Home: React.FC = () => {
  const boards = useSelector((state: RootState) => state.boards);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Boards</h1>
      <div className={styles.boardList}>
        <AddBoardCard />
        {Object.values(boards).map((board) => (
          <Link
            to={`/board/${board.id}`}
            className={styles.boardLink}
            key={board.id}
          >
            <BoardCard board={board} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
