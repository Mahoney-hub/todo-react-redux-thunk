import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {addTask} from '../../store/actions/tasks';
import styled from 'styled-components';
import {addTaskTC} from '../../store/reducers/tasks-reducer';
import {AppDispatch} from '../../store/store';

type AddItemFormTypeProps = {
    id: string
}

export const AddItemForm = ({id}: AddItemFormTypeProps) => {
    const [title, setTitle] = useState<string>('')
    const dispatch = AppDispatch()

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    const clickHandler = () => {
        if (title.trim().length) {
            dispatch(addTaskTC(id, title))
            setTitle('')
        }
    }

    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') clickHandler()
    }

    return (
        <div className={'add-item-form-wrapper'}>
            <TextFieldStyled value={title}
                             onChange={changeHandler}
                             onKeyDown={keyPressHandler}
                             variant={'outlined'}
                             fullWidth
            />

            <ButtonStyled variant={'contained'} onClick={clickHandler}>Add Todo</ButtonStyled>
        </div>
    );
};

const TextFieldStyled = styled(TextField)`
  && {
    & > div {
      height: 40px;
      border: 1px solid blue;
      border-radius: 5px 0 0 5px;
    }
  }`

const ButtonStyled = styled(Button)`
  && {
    height: 40px;
    border-radius: 0 5px 5px 0;
    padding: 6px 0;
    text-transform: capitalize;
    font-size: 12px;
  }`




