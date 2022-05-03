export const addTask = (id: string, title: string) => ({
    type: 'ADD-TASK', id, title
}) as const;

export const removeTask = (idTodo: string, idTask: string) => ({
    type: 'REMOVE-TASK', idTodo, idTask
}) as const;

export const changeTaskStatus = (idTodo: string, idTask: string) => ({
    type: 'CHANGE-TASK-STATUS', idTodo, idTask
}) as const;

export const changeTaskTitle = (idTodo: string, idTask: string, title: string) => ({
    type: 'CHANGE-TASK-TITLE', idTodo, idTask, title
}) as const;

