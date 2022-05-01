import React from 'react';
import {Button, ButtonGroup} from '@mui/material';

export const TaskFilter = () => {
    return (
        <ButtonGroup fullWidth>
            <Button>all</Button>
            <Button>active</Button>
            <Button>completed</Button>
        </ButtonGroup>
    );
};

