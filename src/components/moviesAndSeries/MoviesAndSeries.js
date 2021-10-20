import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMoviesAndSeries } from '../../stateManagement/actions/dataAction';
import { GridContainer } from '../common/GridContainer';
import { PaginationUi } from '../common/PaginationUi';
import { Title } from '../common/Title';

export const MoviesAndSeries = () => {

    const { page } = useSelector(state => state.data)

    const location = useLocation();
    
    const [ , film ] = location.pathname.split('/');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getMoviesAndSeries( film, page ) )
    }, [page, film, dispatch])
    
    return (
        <div style={{ backgroundColor: '#cfe8fc', minHeight: '100vh', padding: "24px"}}>
            <Title />
            <GridContainer />
            <PaginationUi />
        </div>
    )
}
