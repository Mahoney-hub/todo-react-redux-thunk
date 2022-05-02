export const addTodo = (id: string, title: string) => ({
    type: 'ADD-TODO', id, title
}) as const;

export const removeTodo = (id: string) => ({
    type: 'REMOVE-TODO', id
}) as const;