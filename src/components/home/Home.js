import React, { useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
import {Divider} from '@material-ui/core';
// import { Box, Divider, Typography } from '@material-ui/core';
import { CarouselUi } from './CarouselUi';
import { GridContainer } from '../common/GridContainer';
import { useDispatch } from 'react-redux';
import { getDataOfHome, setLoadingOnTrue } from '../../stateManagement/actions/dataAction';
import { Title } from '../common/Title';
import { useSelector } from 'react-redux';
import { LoadingUi } from '../common/LoadingUi';

export const Home = () => {

  const { loading } = useSelector(state => state.data)

  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(getDataOfHome())
    return () => {
      dispatch(setLoadingOnTrue())
    }

  }, [dispatch])

 
  return (
    <div >
      <CssBaseline />
      <Title/>

      {
        loading ? 
          <LoadingUi />
        : 
          <>
            <CarouselUi />
            <Divider />
            <GridContainer />   
          </>
      }
    </div>
      // <Container style={{ backgroundColor: '#cfe8fc', minHeight: '100vh'}}>
      //   <Box py={5}>
      //     <Typography 
      //       variant="h3"
      //       color="secondary"
      //       align="center"
      //     >
      //       Peliculas y Series
      //     </Typography>
      //   </Box>
      //   <Divider />

      //   <CarouselUi />
      //   <Divider />
      //   <GridContainer />
      // </Container>
  );
}
