import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addBoard } from "../store/slices/boardSlice";
import * as styles from "../styles/addBoardCard.css";
import { logActivity } from "../store/slices/activityLogSlice";

Modal.setAppElement("#root");

const AddBoardCard: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBoardTitle(""); // Clear input on close
  };

  const handleSave = () => {
    if (boardTitle.trim()) {
      const newBoardId = `board-${Date.now()}`; // Unique ID for the new board
      dispatch(logActivity(`Add new board ${newBoardId}`));
      dispatch(addBoard({ id: newBoardId, title: boardTitle }));
      handleCloseModal();
    }
  };

  return (
    <>
      <div className={styles.addBoardCard} onClick={handleOpenModal}>
        + Add New Board
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Add New Board"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        closeTimeoutMS={200}
      >
        <h2>Add New Board</h2>
        <input
          type="text"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          className={styles.input}
          placeholder="Enter board title"
        />
        <div className={styles.modalFooter}>
          <button onClick={handleSave} className={styles.saveButton}>
            Save
          </button>
          <button onClick={handleCloseModal} className={styles.closeButton}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddBoardCard;
