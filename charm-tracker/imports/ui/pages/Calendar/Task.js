import React from "react"
import Divider from "@mui/material/Divider"
import MenuList from "@mui/material/MenuList"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { taskCollection } from "../../../api/tasks"

const Task = (props) => {
  const { task, completed, taskId } = props

  const taskCompleted = (taskId) => {
    taskCollection.update({ _id: taskId }, { $set: { completed: true } })
  }

  const taskUndone = (taskId) => {
    taskCollection.update({ _id: taskId }, { $set: { completed: false } })
  }

  return (
    <ul>
      <li>
        {completed ? (
          <label className="check">
            <input
              type="checkbox"
              defaultChecked
              className="checked"
              onChange={() => taskUndone(taskId)}
            />
            <div className="checkbox"></div>
          </label>
        ) : (
          <label className="check">
            <input type="checkbox" onChange={() => taskCompleted(taskId)} />
            <div className="checkbox"></div>
          </label>
        )}
        {completed ? <p className="task completed">{task}</p> : <p className="task">{task}</p>}
      </li>
      <hr />
    </ul>
  )
}

export default Task
