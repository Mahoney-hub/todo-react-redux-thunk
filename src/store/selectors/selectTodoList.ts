import {RootStoreType} from '../store';
import {TodoType} from '../../types/types';

export const selectTodoList = (store: RootStoreType): TodoType[] => store.todos.todoList;
