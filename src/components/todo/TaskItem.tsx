import React from 'react';
import {Button, Checkbox} from '@mui/material';
import {TodoType} from '../../types/types';
import {useDispatch} from 'react-redux';
import {changeTaskStatus, removeTask} from '../store/actions/tasks';

type TaskItemPropsType = {
    task: TodoType
}

export const TaskItem = ({task}: TaskItemPropsType) => {

    const dispatch = useDispatch()

    return (
        <li>
            <Checkbox checked={task.completed} onClick={() => dispatch(changeTaskStatus(task.id))}/>
            {task.title}
            <Button onClick={() => dispatch(removeTask(task.id))}>X</Button>
        </li>
    );
};

