import React, { useState } from "react"
import { taskCollection } from "../../../api/tasks"
import { eventCollection } from "../../../api/events"
import SyncLoader from "react-spinners/SyncLoader"
import Task from "./Task"
import Paper from "@mui/material/Paper"

const TasksSidebar = (props) => {
  const today = new Date().toLocaleDateString()
  const task = taskCollection
    .find({
      dueDate: today,
    })
    .fetch()

  return (
    <>
      <div id="tasksbar" className="sidebar">
        <a href="#" className="closebtn phoneOnly" onClick={() => closeNav()}>
          &times;
        </a>
        {task.length !== 0 ? (
          <div>
            {React.Children.toArray(
              task.map((tsk, index) => (
                <Task task={tsk.task} completed={tsk.completed} taskId={tsk._id} />
              ))
            )}
          </div>
        ) : (
          <SyncLoader color={"#36D7B7"} />
        )}
      </div>
    </>
  )
}

function closeNav() {
  document.getElementById("tasksbar").style.width = "0";
  document.getElementById("container").style.display = "block";
}

export default TasksSidebar
