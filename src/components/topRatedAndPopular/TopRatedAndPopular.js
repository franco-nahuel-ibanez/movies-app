import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getTopRatedAndPopular } from '../../stateManagement/actions/dataAction';
import { GridContainer } from '../common/GridContainer';
import { PaginationUi } from '../common/PaginationUi';
import { Title } from '../common/Title';

export const TopRatedAndPopular = () => {

    const location = useLocation()

    const [ , film, search ] = location.pathname.split('/')

    const {page} = useSelector(state => state.data)

    const dispatch = useDispatch()

    useEffect(() => {
    
        dispatch( getTopRatedAndPopular( film, search, page ) )
    
    }, [ film, search, page, dispatch ])

    console.log(film, search)
    return (
        <>
            <Title />

            <GridContainer />

            <PaginationUi />
            
        </>
    )
}
