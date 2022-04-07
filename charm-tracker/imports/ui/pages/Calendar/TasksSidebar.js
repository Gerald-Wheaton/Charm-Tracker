import React from "react"
import GenerateTasksFromEvent from "../../../api/taskHandling/TaskHandler.js"
import { taskCollection } from "../../../api/tasks"
import { eventCollection } from "../../../api/events"

const TasksSidebar = props => {
  //TODOs: call below function based on events with due dates corelating to today
  //GenerateTasksFromEvent()
  const task = taskCollection.find({}).fetch()
  console.log(task)
  return <></> //<>{`Hello ${task[0]}`}</>
}

export default TasksSidebar
