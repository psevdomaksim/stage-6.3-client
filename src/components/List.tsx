import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Droppable } from "@hello-pangea/dnd";
import Task from "./Task";
import * as styles from "../styles/list.css";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import {
  addTaskToList,
  deleteList,
  editListTitle,
} from "../store/slices/listSlice";
import { removeListFromBoard } from "../store/slices/boardSlice";
import { addTask } from "../store/slices/taskSlice";
import { logActivity } from "../store/slices/activityLogSlice";

interface ListProps {
  listId: string;
  boardId: string;
}

const List: React.FC<ListProps> = ({ listId, boardId }) => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.lists[listId]);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false); // State to track editing mode
  const [newTitle, setNewTitle] = useState(list.title); // State for the new title

  const handleDeleteList = () => {
    dispatch(logActivity(`Delete ${list.id} from ${boardId}.`));
    dispatch(deleteList({ listId }));
    dispatch(removeListFromBoard({ boardId, listId })); // Remove list from board's listOrder
  };

  const handleAddTask = () => {
    if (newTaskContent.trim()) {
      const newTaskId = `task-${Date.now()}`;
      dispatch(logActivity(`Add new task ${newTaskId} to the ${list.id}.`));
      dispatch(addTask({ taskId: newTaskId, content: newTaskContent }));
      dispatch(addTaskToList({ listId, taskId: newTaskId }));
      setNewTaskContent("");
    }
  };

  const handleTitleEdit = () => {
    if (newTitle.trim()) {
      dispatch(
        logActivity(
          `Changed ${list.id} title from "${list.title}" to "${newTitle}".`
        )
      ); // Log activity
      dispatch(editListTitle({ listId, title: newTitle })); // Dispatch the action to update the title

      setIsEditingTitle(false); // Close the editing mode
    }
  };

  return (
    <Droppable droppableId={listId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={styles.listContainer}
        >
          <div className={styles.listTitle}>
            {isEditingTitle ? (
              <div className={styles.editTitleContainer}>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className={styles.titleInput}
                  onBlur={handleTitleEdit}
                />
              </div>
            ) : (
              <span onClick={() => setIsEditingTitle(true)}>{list.title}</span>
            )}
            <IoClose
              className={styles.deleteListButton}
              onClick={handleDeleteList}
            />
          </div>
          <div>
            {list.tasks.map((taskId, index) => (
              <Task
                key={taskId}
                taskId={taskId}
                listId={listId}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>

          {!isAddingTask ? (
            <div
              className={styles.addTaskButton}
              onClick={() => setIsAddingTask(true)}
            >
              + Add New Task
            </div>
          ) : (
            <div className={styles.addTaskInputContainer}>
              <input
                type="text"
                value={newTaskContent}
                onChange={(e) => setNewTaskContent(e.target.value)}
                placeholder="Task content"
                className={styles.taskInput}
              />

              <div className={styles.buttonContainer}>
                <button onClick={handleAddTask} className={styles.addButton}>
                  Add Task
                </button>
                <IoClose
                  onClick={() => setIsAddingTask(false)}
                  className={styles.closeButton}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default List;
