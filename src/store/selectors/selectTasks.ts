import {RootStoreType} from '../store';
import {TasksType} from '../../types/types';

export const selectTasks = (store: RootStoreType): TasksType => store.tasks;
