const { nanoid } = require("nanoid");

export const addTask = (text)=>({
    type: 'task/addTask', 
    payLoad: {
        id: nanoid(),
        text, 
        complited: false,
    }
})
export const deleteTask = (taskId)=>({
    type: "task/deleteTask",
    payload: taskId
})

export const changrFilter = (value)=>({
    type: 'filters/changeFilters', 
    payload: value
})

export const toggleComplited = (taskId)=>({
    type: "filters/ToggleCompleted",
    payload: taskId
})