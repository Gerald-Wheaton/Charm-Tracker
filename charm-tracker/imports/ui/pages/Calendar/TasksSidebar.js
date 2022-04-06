import React from "react"
import GenerateTasksFromEvent from "../../../api/taskHandling/TaskHandler.js"

const TasksSidebar = props => {
  const eventWanted = "FZADqzACH2Qgoc2Ns"

  return <>{GenerateTasksFromEvent(eventWanted)}</>
}

export default TasksSidebar
