import React from 'react';
import {Checkbox, IconButton} from '@mui/material';
import {TaskType} from '../../types/types';
import {useDispatch} from 'react-redux';
import {changeTaskStatus, changeTaskTitle, removeTask} from '../../store/actions/tasks';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styled from 'styled-components';
import {EditableSpan} from '../editable-span/EditableSpan';

type TaskItemPropsType = {
    task: TaskType
    id: string
    bgColor: any
}

export const TaskItem = ({task, id, bgColor}: TaskItemPropsType) => {

    const dispatch = useDispatch()
    const changeHandler = (title: string) => {
        dispatch(changeTaskTitle(id, task.id, title))
    }

    return (
        <li className={'task-item'} style={bgColor}>
            <CheckboxStyled checked={task.completed}
                            size={'small'}
                            onClick={() => dispatch(changeTaskStatus(id, task.id))}
            />
            <EditableSpan title={task.title} onChange={changeHandler}/>
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




