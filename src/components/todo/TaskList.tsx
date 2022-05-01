import React from 'react';
import {TodoType} from '../../types/types';
import {TaskItem} from './TaskItem';

type TaskListPropsType = {
    data: TodoType[]
}

export const TaskList = ({data}:TaskListPropsType) => {
    return (
        <ul>
            {data.map(t => <TaskItem key={t.id} task={t}/>)}
        </ul>
    );
};

