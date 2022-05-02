import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from 'styled-components';
import {IconButton} from '@mui/material';
import {useDispatch} from 'react-redux';
import {removeTodo} from '../../store/actions/todoList';

type TodoTitleTypeProps = {
    title:string
    id: string
}

export const TodoTitle = ({title, id}:TodoTitleTypeProps) => {

    const dispatch = useDispatch()

    return (
        <div className={'title'}>
            <h2>{title}</h2>
            <IconButtonStyled onClick={() => dispatch(removeTodo(id))}>
                <DeleteForeverIcon/>
            </IconButtonStyled>
        </div>
    );
};

const IconButtonStyled = styled(IconButton)`
  && {
    color: whitesmoke;
  }`

