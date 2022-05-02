import {TodoType} from '../../types/types';
import {addTodo, removeTodo} from '../actions/todoList';
import {v1} from 'uuid';


export const todoID1 = v1()

const InitState = {
    todoList: [
        {id: todoID1, title: 'Title', filter: 'all'}
    ] as TodoType[]
}

type InitStateType = typeof InitState
type ActionsType = ReturnType<typeof addTodo | typeof removeTodo>

export const todoListReducer = (state: InitStateType = InitState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'ADD-TODO':
            return {...state, todoList: [{id: action.id, title: action.title, filter: 'all'}, ...state.todoList]}
        case 'REMOVE-TODO':
            return {...state, todoList: state.todoList.filter(t => t.id !== action.id)}
        default:
            return state
    }
}