import React from 'react';
import {CircularProgress, Box} from '@material-ui/core'


export const LoadingUi = () => {

    return (
        <Box
            height="400px"
            // width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress  size={60} color="secondary" />           
        </Box>
    )
}
