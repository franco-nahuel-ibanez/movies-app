import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMoviesAndSeries } from '../../stateManagement/actions/dataAction';
import { GridContainer } from '../common/GridContainer';
import { LoadingUi } from '../common/LoadingUi';
import { PaginationUi } from '../common/PaginationUi';
import { Title } from '../common/Title';



export const MoviesAndSeries = () => {

    const { page, loading } = useSelector(state => state.data)

    const location = useLocation();    
    const [ , film ] = location.pathname.split('/');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getMoviesAndSeries( film, page ) )
    }, [page, film, dispatch])

    return (

        <div>
            
            {
                loading ? 
                    <LoadingUi /> 
                :
                    <>
                        <Title film={film} search=""/>
                        <GridContainer />
                    </>
            }

            <PaginationUi />
        </div>
    )
}
