import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {tasksReducer} from './reducers/tasks-reducer';
import {todoListReducer} from './reducers/todolist-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { useDispatch } from 'react-redux';


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todos: todoListReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния
export type RootStoreType = ReturnType<typeof rootReducer>
export const AppDispatch = () => useDispatch<ThunkDispatch< RootStoreType,void,AnyAction>>()
//@ts-ignore
window.store = store;