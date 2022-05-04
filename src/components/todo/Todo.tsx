import React, {useEffect} from 'react';
import {TaskList} from './TaskList';
import {AddItemForm} from '../add-item-form/AddItemForm';
import {TaskFilter} from './TaskFilter';
import {TodoTitle} from './TodoTitle';
import {fetchTasksTC} from '../../store/reducers/tasks-reducer';
import {AppDispatch} from '../../store/store';
import {TaskType} from '../../api/todolist-api';

export type TodoPropsType = {
    id: string
    title: string
    data: TaskType[]
}

export const Todo = (props:TodoPropsType) => {
    const {id, title, data} = props

    const dispatch = AppDispatch()

    useEffect(() => {
        dispatch(fetchTasksTC(id))
    }, [])

    return (
        <div className={'todo-wrapper'}>
            <TodoTitle title={title} id={id}/>
            <AddItemForm id={id}/>
            <TaskList data={data} id={id}/>
            <TaskFilter id={id}/>
        </div>
    );
};



