import React from 'react';
import {TaskList} from './TaskList';
import {AddItemForm} from '../add-item-form/AddItemForm';
import {TaskFilter} from './TaskFilter';
import {useSelector} from 'react-redux';
import {selectTasks} from '../../store/selectors/selectTasks';

export const Todo = () => {

    const tasks = useSelector(selectTasks)

    return (
        <div className={'todo-wrapper'}>
            <h2>Title Todo</h2>
            <AddItemForm/>
            <TaskList data={tasks}/>
            <TaskFilter/>
        </div>
    );
};

