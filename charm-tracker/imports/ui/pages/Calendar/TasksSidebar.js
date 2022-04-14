import React, { useState } from "react"
import { taskCollection } from "../../../api/tasks"
import { eventCollection } from "../../../api/events"
import BounceLoader from "react-spinners/BounceLoader"
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
                <Task
                  task={tsk.task}
                  completed={tsk.completed}
                  taskId={tsk._id}
                />
              ))
            )}
          </div>
        ) : (
          <div className="loader">
            <BounceLoader color={"#B8D9C6"} />
          </div>
        )}
      </div>
    </>
  )
}

function closeNav() {
  document.getElementById("tasksbar").style.width = "0"
  document.getElementById("container").style.display = "block"
  document.getElementById("hamburger").style.display = "block"
}

export default TasksSidebar
