import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import List from "./List";
import * as styles from "../styles/board.css";
import {
  addList,
  moveTaskToList,
  reorderTasksInList,
} from "../store/slices/listSlice";
import {
  addListToBoard,
  editBoardTitle,
  deleteBoard,
} from "../store/slices/boardSlice";
import Modal from "react-modal";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { logActivity } from "../store/slices/activityLogSlice";

interface BoardProps {
  boardId: string;
}

const Board: React.FC<BoardProps> = ({ boardId }) => {
  const dispatch = useDispatch();
  const board = useSelector((state: RootState) => state.boards[boardId]);
  const [newListTitle, setNewListTitle] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false); // State for controlling modal
  const [newBoardTitle, setNewBoardTitle] = useState(board.title); // New title state

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      dispatch(
        reorderTasksInList({
          listId: source.droppableId,
          sourceIndex: source.index,
          destIndex: destination.index,
        })
      );
    } else {
      dispatch(
        moveTaskToList({
          sourceListId: source.droppableId,
          destListId: destination.droppableId,
          taskId: draggableId,
          destIndex: destination.index,
        })
      );
    }
  };

  const handleAddList = () => {
    if (newListTitle) {
      const newListId = `list-${Date.now()}`;
      dispatch(addListToBoard({ boardId, listId: newListId }));
      dispatch(addList({ listId: newListId, title: newListTitle }));
      dispatch(
        logActivity(`Added list "${newListTitle}" to board "${board.title}".`)
      ); // Log activity
      setNewListTitle("");
    }
  };

  const handleRemoveBoard = () => {
    dispatch(deleteBoard({ boardId })); // Dispatch the remove action
    dispatch(logActivity(`Removed board "${board.title}".`)); // Log activity
  };

  const handleOpenEditModal = () => {
    setIsEditingTitle(true);
    setNewBoardTitle(board.title); // Initialize with current title
  };

  const handleCloseEditModal = () => {
    setIsEditingTitle(false);
  };

  const handleSaveTitle = () => {
    if (newBoardTitle.trim()) {
      dispatch(editBoardTitle({ boardId, title: newBoardTitle })); // Dispatch the edit action
      handleCloseEditModal();
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h2 onClick={handleOpenEditModal} className={styles.boardTitle}>
        {board.title}
        <MdOutlineEdit className={styles.boardEditIcon} />
        <span className={styles.deleteBoardSpan} onClick={handleRemoveBoard}>
          Remove board
          <MdDeleteOutline className={styles.deleteBoardButton} />
        </span>
      </h2>

      <div className={styles.boardContainer}>
        {board.listOrder.map((listId) => (
          <List key={listId} listId={listId} boardId={boardId} />
        ))}

        <div className={styles.addListContainer}>
          <input
            className={styles.addListInput}
            type="text"
            placeholder="New list title"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
          />
          <button className={styles.addListButton} onClick={handleAddList}>
            + Add List
          </button>
        </div>
      </div>
      <Modal
        isOpen={isEditingTitle}
        onRequestClose={handleCloseEditModal}
        contentLabel="Edit Board Title"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h2>Edit Board Title</h2>
        <input
          type="text"
          value={newBoardTitle}
          onChange={(e) => setNewBoardTitle(e.target.value)}
          className={styles.input}
          placeholder="Enter new board title"
        />
        <div className={styles.modalFooter}>
          <button onClick={handleSaveTitle} className={styles.saveButton}>
            Save
          </button>
          <button onClick={handleCloseEditModal} className={styles.closeButton}>
            Close
          </button>
        </div>
      </Modal>
    </DragDropContext>
  );
};

export default Board;
