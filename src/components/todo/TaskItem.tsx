import React from 'react';
import {Checkbox, IconButton} from '@mui/material';
import {TaskType} from '../../types/types';
import {useDispatch} from 'react-redux';
import {changeTaskStatus, removeTask} from '../../store/actions/tasks';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styled from 'styled-components';

type TaskItemPropsType = {
    task: TaskType
    id: string
    bgColor: any
}

export const TaskItem = ({task, id, bgColor}: TaskItemPropsType) => {

    const dispatch = useDispatch()

    return (
        <li className={'task-item'} style={bgColor}>
            <CheckboxStyled checked={task.completed}
                            size={'small'}
                            onClick={() => dispatch(changeTaskStatus(id, task.id))}
            />
            {task.title}
            <IconButtonStyled onClick={() => dispatch(removeTask(id, task.id))}>
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
    color: white !important;
  }`




