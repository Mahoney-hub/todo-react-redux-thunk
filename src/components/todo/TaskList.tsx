import React from 'react';
import {TaskType, TodoType} from '../../types/types';
import {TaskItem} from './TaskItem';

type TaskListPropsType = {
    data: TaskType[]
}

// const bgColors = [
//     `linear-gradient(90deg, rgba(41,128,185,1) 0%, rgba(109,213,250,1) 50%, rgba(255,255,255,1) 100%)`,
//     `linear-gradient(270deg, rgba(241,39,17,1) 0%, rgba(245,175,25,1) 50%)`,
//     `linear-gradient(180deg, rgba(127,0,255,1) 0%, rgba(225,0,255,1) 100%)`,
//     `linear-gradient(90deg, rgba(220,40,30,1) 0%, rgba(240,0,0,1) 100%)`
// ]

export const TaskList = ({data}: TaskListPropsType) => {

    return (
        <ul className={'task-list'}>
            {data.map(t => <TaskItem key={t.id} task={t}/>)}
        </ul>
    );
};

