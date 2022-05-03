import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {TextField} from '@mui/material';
import styled from 'styled-components';

type EditableSpanPropsType = {
    title: string
    onChange: (newTitle: string) => void
}

export const EditableSpan = ({title, onChange}: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setTitle] = useState<string>(title)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        if (newTitle.trim().length) {
            setEditMode(false)
            onChange(newTitle)
        }
    }
    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            deactivateEditMode()
        }
    }

    return editMode
        ? <TextFieldStyled variant={'standard'}
                           value={newTitle}
                           onChange={changeHandler}
                           onBlur={deactivateEditMode}
                           onKeyDown={keyDownHandler}
                           autoFocus
                           placeholder={'Add Todo...'}
        />
        : <span onDoubleClick={activateEditMode}>{title}</span>
};

const TextFieldStyled = styled(TextField)`
  && {
    & > div {
      color: white;
    }
  }`

