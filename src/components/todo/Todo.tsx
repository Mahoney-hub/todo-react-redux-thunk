import React from 'react';
import {TaskList} from './TaskList';
import {AddItemForm} from '../add-item-form/AddItemForm';
import {TaskFilter} from './TaskFilter';
import {FilterType, TaskType} from '../../types/types';
import {IconButton} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from 'styled-components';
import {TodoTitle} from './TodoTitle';

export type TodoPropsType = {
    id: string
    title: string
    filter: FilterType
    data: TaskType[]
}

export const Todo = (props:TodoPropsType) => {
    const {id, title, filter, data} = props
    return (
        <div className={'todo-wrapper'}>
            <TodoTitle title={title} id={id}/>
            <AddItemForm id={id}/>
            <TaskList data={data} id={id}/>
            <TaskFilter/>
        </div>
    );
};



