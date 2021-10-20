import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { handlePagination, setPage } from '../../stateManagement/actions/dataAction';
import { Box } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export const PaginationUi = () => {

    const dispatch = useDispatch()

    const {page} = useSelector(state => state.data)

    useEffect(() => {
        return () => {
            dispatch( setPage(1) )
        }
    }, [dispatch]) 

    const classes = useStyles();
    const handleChange = (event, value) => {
        dispatch( handlePagination(value) )
    };

    return (
        <Box width={1} display="flex" justifyContent="center" my="2rem">    
            <div className={classes.root}>
                <Pagination count={500} page={page} onChange={handleChange} />
            </div>
        </Box>
    );  
}
