export const addTodo = (title: string) => ({
    type: 'ADD-TODO',
    payload: title
}) as const;