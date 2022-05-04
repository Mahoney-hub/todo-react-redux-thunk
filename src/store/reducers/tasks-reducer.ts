import {TasksType} from '../../types/types';
import {TasksStateType, TaskType} from '../../api/todolist-api';
import {addTask, changeTaskStatus, changeTaskTitle, getTasksAC, removeTask} from '../actions/tasks';
import {v1} from 'uuid';
import {addTodo, removeTodo, setTodoList} from '../actions/todoList';
import {todolistsAPI} from '../../api/todolist-api';
import {Dispatch} from 'redux';

const initState = {} as TasksStateType

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof addTask
    | typeof removeTask
    | typeof changeTaskStatus
    | typeof addTodo
    | typeof removeTodo
    | typeof changeTaskTitle
    | typeof setTodoList
    | typeof getTasksAC>;

export const tasksReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'SET-TODO-LIST': {
            const stateCopy = {...state}
            action.todoList.forEach((t) => (stateCopy[t.id] = []))
            return stateCopy
        }
        case 'GET-TASKS': {
                const stateCopy = {...state}
                stateCopy[action.id] = action.tasks
                return stateCopy
        }
        case 'ADD-TASK': {
            const stateCopy = {...state}
            const tasks = stateCopy[action.task.todoListId];
            const newTasks = [action.task, ...tasks];
            stateCopy[action.task.todoListId] = newTasks;
            return stateCopy;
            }
        case 'REMOVE-TASK':
            return {
                // ...state,
                // [action.idTodo]: state[action.idTodo].filter(t => t.id !== action.idTask)
            }
        case 'CHANGE-TASK-STATUS':
            return {
                // ...state,
                // [action.idTodo]: state[action.idTodo]
                //     .map(t => t.id !== action.idTask ? t : {...t, completed: !t.completed})
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

// Thunk

export const fetchTasksTC = (todolistID: string) => {
    return (dispatch: Dispatch) => {
        todolistsAPI.getTasks(todolistID)
            .then((res) => {
                dispatch(getTasksAC(todolistID, res.data.items))
            })
    }
}
export const addTaskTC = (todoId: string, title: string) => (dispatch: Dispatch) => {
    todolistsAPI.createTask(todoId, title)
        .then((res) => {
            dispatch(addTask(res.data.data.item))
        })
}