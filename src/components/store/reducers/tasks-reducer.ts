import {TodoType} from '../../../types/types';
import {addTask, changeTaskStatus, removeTask} from '../actions/tasks';
import {v1} from 'uuid';

const initState = {
    todo: [] as TodoType[],
};

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof addTask | typeof removeTask | typeof changeTaskStatus>;

export const tasksReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'ADD-TASK':
            return {...state, todo: [{id: v1(), title: action.payload, completed: false}, ...state.todo]}
        case 'REMOVE-TASK':
            return {...state, todo: state.todo.filter(t => t.id !== action.payload)}
        case 'CHANGE-TASK-STATUS':
            return {
                ...state,
                todo: state.todo.map(t => t.id !== action.payload ? t : {...t, completed: !t.completed})
            }
        default:
            return state
    }
}