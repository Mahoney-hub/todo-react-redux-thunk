import React, {useState} from 'react';
import {Button, ButtonGroup, Checkbox, TextField} from '@mui/material';
import {TodoType} from '../../types/types';
import {v1} from 'uuid';

const data = [
    {id: v1(), title: 'HTML', completed: false},
    {id: v1(), title: 'CSS', completed: false},
    {id: v1(), title: 'JS', completed: false},
]

export const Todo = () => {
    const [todo, setTodo] = useState<TodoType[]>(data)
    return (
        <div>
            <div>
                <TextField/>
                <Button>add</Button>
            </div>
            <ul>
                {data.map(t => <li key={t.id}>
                    <Checkbox checked={t.completed}/>
                    {t.title}
                    <Button>X</Button>
                </li>)}
            </ul>
            <ButtonGroup fullWidth>
                <Button>all</Button>
                <Button>active</Button>
                <Button>completed</Button>
            </ButtonGroup>
        </div>
    );
};

