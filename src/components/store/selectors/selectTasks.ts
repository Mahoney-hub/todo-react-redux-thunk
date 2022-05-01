import {RootStoreType} from '../store';
import {TodoType} from '../../../types/types';

export const selectTasks = (store: RootStoreType): TodoType[] => store.tasks.todo;
