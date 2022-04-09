import React from "react"
import { taskCollection } from "../../../api/tasks"
import { eventCollection } from "../../../api/events"

const TasksSidebar = props => {
  //TODOs: call below function based on events with due dates corelating to today
  //const today = useToday()
  const today = new Date().toLocaleDateString()
  const task = taskCollection
    .find({
      dueDate: today,
    })
    .fetch()

  if (task.length !== 0) {
    console.log(task)
  }
  //{`Due today: ${task[0].task}`}
  return <></> //<>{`Hello ${task[0]}`}</>
}

export default TasksSidebar
