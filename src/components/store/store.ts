import {combineReducers, createStore} from 'redux';
import {tasksReducer} from './reducers/tasks-reducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
})

export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type RootStoreType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store;