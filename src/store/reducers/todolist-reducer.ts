import {FilterType, TodoType} from '../../types/types';
import {addTodo, changeFilterTodo, removeTodo, setTodoList} from '../actions/todoList';
import {Dispatch} from 'redux';
import {RootStoreType} from '../store';
import {todolistsAPI} from '../../api/todolist-api';

const InitState: InitStateTypeTodoList[] = []

export type InitStateTypeTodoList = TodoType & {
    filter: FilterType
}

type ActionsType = ReturnType<typeof addTodo
    | typeof removeTodo
    | typeof changeFilterTodo
    | typeof setTodoList>

export const todoListReducer = (state: InitStateTypeTodoList[] = InitState, action: ActionsType): InitStateTypeTodoList[] => {
    switch (action.type) {
        case 'SET-TODO-LIST':
            return action.todoList.map(t => ({...t, filter: 'all'}))
        case 'ADD-TODO':
            // return {...state, todoList: [{id: action.id, title: action.title, filter: 'all'}, ...state.todoList]}
            return state
        case 'REMOVE-TODO':
        // return {...state, todoList: state.todoList.filter(t => t.id !== action.id)}
        // case 'CHANGE-FILTER-TODO':
        //     return {
        //         ...state, todoList: state.todoList
        //             .map(t => t.id !== action.id ? t : {...t, filter: action.value})
        //
        //     }
        default:
            return state
    }
}

// Thunk

export const fetchTodosTC = () => {
    return (dispatch: Dispatch) => {
        todolistsAPI.getTodolists()
            .then((response) => {
                dispatch(setTodoList(response.data))
            })
    }
}

// export const fetchTodosThunk = (dispatch: Dispatch, getState: () => RootStoreType): void => {
//     todolistsAPI.getTodolists()
//         .then((response) => {
//             dispatch(setTodoList(response.data))
//         })
// }