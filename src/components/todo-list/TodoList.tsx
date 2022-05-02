import React from 'react';
import {useSelector} from 'react-redux';
import {selectTodoList} from '../../store/selectors/selectTodoList';
import {Todo} from '../todo/Todo';

export const TodoList = () => {

    const todos = useSelector(selectTodoList)

    return (
        <div>
            {todos.map(item => <Todo key={item.id} />)}
        </div>
    );
};

