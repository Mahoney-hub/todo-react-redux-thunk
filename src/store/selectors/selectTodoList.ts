import {RootStoreType} from '../store';
import {InitStateTypeTodoList} from '../reducers/todolist-reducer';

export const selectTodoList = (store: RootStoreType): InitStateTypeTodoList[] => store.todos;
