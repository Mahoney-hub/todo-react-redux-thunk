export const addTask = (title: string) => ({
    type: 'ADD-TASK',
    payload: title
}) as const;

export const removeTask = (id: string) => ({
    type: 'REMOVE-TASK',
    payload: id
}) as const;

export const changeTaskStatus = (id: string) => ({
    type: 'CHANGE-TASK-STATUS',
    payload: id
}) as const;

