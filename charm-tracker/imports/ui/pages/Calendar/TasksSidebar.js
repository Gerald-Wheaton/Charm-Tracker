import React from "react"
import GenerateTasksFromEvent from "../../../api/taskHandling/TaskHandler.js"
import { taskCollection } from "../../../api/tasks"
import { eventCollection } from "../../../api/events"
//import { haveData, dueToday } from "./taskFunctions.js"

const haveData = data => {
  return data.length !== 0 ? true : false
}

const TasksSidebar = props => {
  //TODOs: call below function based on events with due dates corelating to today
  //GenerateTasksFromEvent()
  const task = taskCollection
    .find({
      /*dueDate: today's Date*/
    })
    .fetch()

  if (haveData(task)) {
    console.log(task)
  }
  //{`Due today: ${task[0].task}`}
  return <></> //<>{`Hello ${task[0]}`}</>
}

export default TasksSidebar
