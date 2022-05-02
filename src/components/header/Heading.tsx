import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {TextField} from '@mui/material';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/actions/todoList';
import {v1} from 'uuid';

export const Heading = () => {
    const [title, setTitle] = useState<string>('')

    const dispatch = useDispatch()
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && title.trim().length) {
            dispatch(addTodo(v1(), title))
            setTitle('')
        }
    }

    return (
        <div className={'header'}>
            <TextFieldStyled variant={'outlined'}
                             size={'small'}
                             value={title}
                             onChange={changeHandler}
                             onKeyDown={keyDownHandler}
            />
        </div>
    );
};

const TextFieldStyled = styled(TextField)`
  && {
    width: 360px;
    background-color: white;

    & > div {
      margin: 0;
      border-radius: 0;
      font-family: cursive;
      font-style: italic;
    }
  }
`

