import {FilterType} from '../../types/types';
import {TodolistType} from '../../api/todolist-api';

export const addTodo = (id: string, title: string) => ({
    type: 'ADD-TODO', id, title
}) as const;

export const removeTodo = (id: string) => ({
    type: 'REMOVE-TODO', id
}) as const;

export const changeFilterTodo = (id: string, value: FilterType) => ({
    type: 'CHANGE-FILTER-TODO', id, value
}) as const;

export const setTodoList = (todoList: TodolistType[]) => ({
    type: 'SET-TODO-LIST', todoList
}) as const;