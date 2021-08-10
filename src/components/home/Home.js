import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import { CarouselUi } from './CarouselUi';
import { GridContainer } from '../common/GridContainer';

export const Home = () => {
  return (
    <>
      <CssBaseline />
          <Container style={{ backgroundColor: '#cfe8fc', minHeight: '100vh'}}>
        <h1> Movies and tv shows </h1>
        <Divider />

        <CarouselUi />

        <Divider />

        <GridContainer />


      </Container>
    </>
  );
}
