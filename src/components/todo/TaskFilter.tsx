import React from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {useDispatch} from 'react-redux';
import {changeFilterTodo} from '../../store/actions/todoList';

type TaskFilterPropsType = {
    id: string
}

export const TaskFilter = ({id}: TaskFilterPropsType) => {

    const dispatch = useDispatch()

    return (
        <ButtonGroup fullWidth>
            <Button onClick={() => dispatch(changeFilterTodo(id, 'all'))}>all</Button>
            <Button onClick={() => dispatch(changeFilterTodo(id, 'active'))}>active</Button>
            <Button onClick={() => dispatch(changeFilterTodo(id, 'completed'))}>completed</Button>
        </ButtonGroup>
    );
};

