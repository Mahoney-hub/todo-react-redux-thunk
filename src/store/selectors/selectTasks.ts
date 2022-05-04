import {RootStoreType} from '../store';
import {TasksStateType} from '../../api/todolist-api';

export const selectTasks = (store: RootStoreType): TasksStateType => store.tasks;
