import React from 'react'

import { AppRouter } from '../../routes/AppRouter';
import { makeStyles } from '@material-ui/core/styles';
import { DrawerUi } from '../sidebar/DrawerUi';

import { drawerWidth } from '../../const/index';


const useStyles = makeStyles( (theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        position: 'relative',
        top: '64px',
        width: `calc( 100% - ${drawerWidth}px )`
    }
}))

export const Main = () => {
    
    const classes = useStyles()
    
    return (
        // <Router>
        <>
            <DrawerUi />
            <div className={ classes.content }>
                <AppRouter />

            </div>
        </>
        // </Router>
    )
}
