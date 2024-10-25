import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Draggable } from "@hello-pangea/dnd";
import * as styles from "../styles/task.css";
import Modal from "react-modal"; // Import react-modal
import { editTask, deleteTask } from "../store/slices/taskSlice"; // Import deleteTask
import { MdDeleteOutline } from "react-icons/md";
import { deleteTaskFromList } from "../store/slices/listSlice";
import { logActivity } from "../store/slices/activityLogSlice";

interface TaskProps {
  taskId: string;
  index: number;
  listId: string;
}

Modal.setAppElement("#root");
const Task: React.FC<TaskProps> = ({ taskId, index, listId }) => {
  const dispatch = useDispatch();
  const task = useSelector((state: RootState) => state.tasks[taskId]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newContent, setNewContent] = useState(task.content);
  const [newDescription, setNewDescription] = useState(task.description || "");

  const handleModalOpen = () => {
    setModalOpen(true);
    setNewContent(task.content);
    setNewDescription(task.description || "");
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    dispatch(
      logActivity(
        `Edit task ${taskId}:  content: ${newContent}, description: ${newDescription}`
      )
    );
    dispatch(
      editTask({
        id: taskId,
        changes: { content: newContent, description: newDescription },
      })
    );
    handleModalClose();
  };

  const handleDelete = () => {
    dispatch(logActivity(`Delete task ${taskId} from ${listId}`));
    dispatch(deleteTask({ id: taskId })); // Dispatch delete action
    dispatch(deleteTaskFromList({ listId, taskId }));
  };

  return (
    <>
      <Draggable draggableId={taskId} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={styles.taskContainer}
            onClick={handleModalOpen} // Open modal on task click
          >
            {task.content}
            <MdDeleteOutline
              className={styles.deleteTaskButton}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(); // Call delete function
              }}
            />
          </div>
        )}
      </Draggable>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Edit Task"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h2>Edit Task</h2>
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className={styles.input}
          placeholder="Enter task content"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className={styles.textarea}
          placeholder="Enter task description"
        />
        <div className={styles.modalFooter}>
          <button onClick={handleSave} className={styles.saveButton}>
            Save
          </button>
          <button onClick={handleModalClose} className={styles.closeButton}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Task;
