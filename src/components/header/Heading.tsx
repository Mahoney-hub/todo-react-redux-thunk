import React from 'react';
import {TextField} from '@mui/material';
import styled from 'styled-components';

export const Heading = () => {
    return (
        <div className={'header'}>
            <TextFieldStyled variant={'outlined'}
                       size={'small'}
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

