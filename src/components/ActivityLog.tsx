import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import * as styles from "../styles/activityLog.css";

const ActivityLog: React.FC = () => {
  const activityLogs = useSelector((state: RootState) => state.activity.logs);

  return (
    <div className={styles.activityLogContainer}>
      <h3>User Activity Log</h3>
      <ul className={styles.activityList}>
        {activityLogs
          .slice(0)
          .reverse()
          .map((log, index) => (
            <li key={index} className={styles.activityItem}>
              <span className={styles.activityText}>{log.message}</span>
              <span className={styles.activityDate}>
                {new Date(log.timestamp).toLocaleString()}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
