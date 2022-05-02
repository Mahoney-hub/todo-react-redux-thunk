import {RootStoreType} from '../store';
import {TaskType} from '../../types/types';

export const selectTasks = (store: RootStoreType): TaskType[] => store.tasks.todo;
