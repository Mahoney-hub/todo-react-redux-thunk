import React from 'react';
import {Todo} from '../todo/Todo';
import {Grid} from '@mui/material';
import {useSelector} from 'react-redux';
import {selectTodoList} from '../../store/selectors/selectTodoList';
import {selectTasks} from '../../store/selectors/selectTasks';

export const TodoList = () => {

    const todos = useSelector(selectTodoList)
    const tasks = useSelector(selectTasks)

    return (
        <Grid container spacing={4} justifyContent={'space-around'}>
            {todos.map(t => <Grid item key={t.id}>
                <Todo id={t.id}
                      title={t.title}
                      filter={t.filter}
                      data={tasks[t.id]}
                />
            </Grid>)}
        </Grid>
    );
};

