import {TasksType, TaskType, TodoType} from '../../types/types';
import {addTask, changeTaskStatus, changeTaskTitle, removeTask} from '../actions/tasks';
import {v1} from 'uuid';
import {todoID1} from './todolist-reducer';
import {addTodo, removeTodo} from '../actions/todoList';

const initState = {
    [todoID1]: [
        {id:v1(), title: 'Task Title', completed: false},
        {id:v1(), title: 'Task Title', completed: false},
        {id:v1(), title: 'Task Title', completed: false},
        {id:v1(), title: 'Task Title', completed: false},
        {id:v1(), title: 'Task Title', completed: false},
        {id:v1(), title: 'Task Title', completed: false},
    ]
} as TasksType

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof addTask |
    typeof removeTask |
    typeof changeTaskStatus |
    typeof addTodo |
    typeof removeTodo |
    typeof changeTaskTitle>;

export const tasksReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'ADD-TASK':
            return {
                ...state,
                [action.id]: [
                    {id: v1(), title: action.title, completed: false},
                    ...state[action.id]]
            }
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.idTodo]: state[action.idTodo].filter(t => t.id !== action.idTask)
            }
        case 'CHANGE-TASK-STATUS':
            return {
                ...state,
                [action.idTodo]: state[action.idTodo]
                    .map(t => t.id !== action.idTask ? t : {...t, completed: !t.completed})
            }
        case 'ADD-TODO':
            return {
                ...state,
                [action.id]: []
            }
        case 'REMOVE-TODO':
            const copyState = {...state};
            delete copyState[action.id];
            return copyState;
        case 'CHANGE-TASK-TITLE':
            return {
                ...state,
                [action.idTodo]: state[action.idTodo]
                    .map(t => t.id !== action.idTask ? t : {...t, title: action.title})
            }
        default:
            return state
    }
}