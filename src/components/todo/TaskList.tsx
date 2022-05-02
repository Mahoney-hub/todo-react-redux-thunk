import React from 'react';
import {TaskType} from '../../types/types';
import {TaskItem} from './TaskItem';

type TaskListPropsType = {
    data: TaskType[]
    id: string
}

const bgColors = [
    `linear-gradient(330deg, rgba(17,153,142,1) 0%, rgba(56,239,125,1) 100%)`,
    `linear-gradient(270deg, rgba(241,39,17,1) 0%, rgba(245,175,25,1) 50%)`,
    `linear-gradient(180deg, rgba(127,0,255,1) 0%, rgba(225,0,255,1) 100%)`,
    `linear-gradient(96deg, rgba(30,150,0,1) 0%, rgba(255,242,0,1) 50%, rgba(255,0,0,1) 100%)`,
    `linear-gradient(90deg, rgba(220,40,30,1) 0%, rgba(240,0,0,1) 100%)`,
]

export const TaskList = ({data, id}: TaskListPropsType) => {
    let count = 0

    const getColor = () => {
        console.log(count)
        count++
        if (count > bgColors.length) {
            count = 0
            return bgColors[0]
        } else {
            return bgColors[count]
        }
    }

    return (
        <ul className={'task-list'}>
            {data.map(t => <TaskItem key={t.id} task={t} id={id} bgColor={{background: getColor()}}/>)}
        </ul>
    );
};

