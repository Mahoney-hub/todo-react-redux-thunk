import {TodoType} from '../../types/types';
import {addTodo, changeFilterTodo, removeTodo} from '../actions/todoList';
import {v1} from 'uuid';


export const todoID1 = v1()

const InitState = {
    todoList: [
        {id: todoID1, title: 'Title', filter: 'all'}
    ] as TodoType[]
}

type InitStateType = typeof InitState
type ActionsType = ReturnType<typeof addTodo | typeof removeTodo | typeof changeFilterTodo>

export const todoListReducer = (state: InitStateType = InitState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'ADD-TODO':
            return {...state, todoList: [{id: action.id, title: action.title, filter: 'all'}, ...state.todoList]}
        case 'REMOVE-TODO':
            return {...state, todoList: state.todoList.filter(t => t.id !== action.id)}
        case 'CHANGE-FILTER-TODO':
            return {...state, todoList: state.todoList
                    .map(t => t.id !== action.id ? t : {...t, filter: action.value})}
        default:
            return state
    }
}