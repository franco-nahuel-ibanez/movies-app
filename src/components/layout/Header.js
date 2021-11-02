import { makeStyles } from '@material-ui/core';
import React from 'react';
import { NavbarUi } from '../header/NavbarUi';

const useStyles = makeStyles({
  root: {
    height: 64,
    display: 'flex',
    alignItems: 'center'
  }

})


export const Header = () => {
    const classes = useStyles()

    return (
        <header className={ classes.root }>
          <NavbarUi />  
        </header>
    )
}
