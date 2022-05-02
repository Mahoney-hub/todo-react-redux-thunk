import React from 'react';
import {Todo} from './components/todo/Todo';
import {ThemeProvider} from '@mui/material';
import {theme} from './styles/theme';
import {Heading} from './components/header/Heading';
import {TodoList} from './components/todo-list/TodoList';
import {useSelector} from 'react-redux';
import {selectTodoList} from './store/selectors/selectTodoList';
import {selectTasks} from './store/selectors/selectTasks';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Heading/>
                <TodoList/>
            </div>
        </ThemeProvider>
    );
};

export default App;