import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {addTask} from '../../store/actions/tasks';

type AddItemFormTypeProps = {
    id: string
}

export const AddItemForm = ({id}:AddItemFormTypeProps) => {
    const [title, setTitle] = useState<string>('')
    const dispatch = useDispatch()

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    const clickHandler = () => {
        if (title.trim().length) {
            dispatch(addTask(id, title))
            setTitle('')
        }
    }

    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') clickHandler()
    }

    return (
        <div className={'add-item-form-wrapper'}>
                <TextField value={title}
                           onChange={changeHandler}
                           onKeyDown={keyPressHandler}
                           variant={'standard'}
                           fullWidth
                />

            <Button variant={'contained'} onClick={clickHandler}>add</Button>
        </div>
    );
};



