import React from 'react';
import {Button, Checkbox, IconButton} from '@mui/material';
import {TaskType, TodoType} from '../../types/types';
import {useDispatch} from 'react-redux';
import {changeTaskStatus, removeTask} from '../../store/actions/tasks';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styled from 'styled-components';

type TaskItemPropsType = {
    task: TaskType
}

export const TaskItem = ({task}: TaskItemPropsType) => {

    const dispatch = useDispatch()

    return (
        <li className={'task-item'}>
            <CheckboxStyled checked={task.completed}
                            size={'small'}
                            onClick={() => dispatch(changeTaskStatus(task.id))}
            />
            {task.title}
            <IconButtonStyled onClick={() => dispatch(removeTask(task.id))}>
                <HighlightOffIcon/>
            </IconButtonStyled>
        </li>
    );
};

const IconButtonStyled = styled(IconButton)`
  && {
    color: white;
  }`

const CheckboxStyled = styled(Checkbox)`
  && {
    color: white;
  }`




