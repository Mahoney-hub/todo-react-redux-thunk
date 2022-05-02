import {TodoType} from '../../types/types';


const InitState = {
    todoList: [] as TodoType[]
}

type InitStateType = typeof InitState
type ActionsType = ReturnType<any>

export const todoListReducer = (state: InitStateType = InitState, action: ActionsType): InitStateType => {
    switch (action.type) {
        default:
            return state
    }
}