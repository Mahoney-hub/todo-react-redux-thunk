export type FilterType = 'all' | 'active' | 'completed'

export type TodoType = {
    id: string
    title: string
    filter: FilterType
}

export type TaskType = {
    id: string
    title: string
    completed: boolean
}

export type TasksType = {
    [key: string]: TaskType[]
}



