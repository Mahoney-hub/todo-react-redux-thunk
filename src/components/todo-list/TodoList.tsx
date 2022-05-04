import React, {useEffect} from 'react';
import {Todo} from '../todo/Todo';
import {Grid} from '@mui/material';
import {useSelector} from 'react-redux';
import {selectTodoList} from '../../store/selectors/selectTodoList';
import {selectTasks} from '../../store/selectors/selectTasks';
import {fetchTodosTC} from '../../store/reducers/todolist-reducer';
import {AppDispatch} from '../../store/store';

export const TodoList = () => {

    const todos = useSelector(selectTodoList)
    const tasks = useSelector(selectTasks)
    const dispatch = AppDispatch()

    useEffect(() => {
        dispatch(fetchTodosTC())
    }, [])

    // const getFilteredTasks = (todo: any) => {
    //     switch (todo.filter) {
    //         case 'active':
    //             return tasks[todo.id].filter(t => !t.completed)
    //         case 'completed':
    //             return tasks[todo.id].filter(t => t.completed)
    //         default:
    //             return tasks[todo.id]
    //     }
    // }

    return (
        <Grid container spacing={4} justifyContent={'center'}>
            {todos.map(t => <Grid item key={t.id}>
                <Todo id={t.id}
                      title={t.title}
                      data={tasks[t.id]}
                />
            </Grid>)}
        </Grid>
    );
};

