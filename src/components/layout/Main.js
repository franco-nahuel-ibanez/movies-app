import React from 'react'

import { AppRouter } from '../../routes/AppRouter';
import { makeStyles} from '@material-ui/core/styles';
import { DrawerUi } from '../sidebar/DrawerUi';
import { drawerWidth } from '../../const/index';
import { Box } from '@material-ui/core'



// ########
import Container from '@material-ui/core/Container';

const useStyles = makeStyles( (theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        position: 'relative',
        top: '64px',
        width: `calc( 100% - ${drawerWidth}px )`,
        backgroundColor: `${theme.palette.primary.dark}`
    },

    boxStyles: {
        [theme.breakpoints.down('sm')] : { padding: theme.spacing(2) },
        [theme.breakpoints.up('sm')] : { padding: theme.spacing(5) }
    }
}))

export const Main = () => {
    
    const classes = useStyles()
    return (
        // <Router>
        <>
            <DrawerUi />
            <Container className={ classes.content } style={{ minHeight: '100vh'}}>
                <Box 
                    className={classes.boxStyles}
                    bgcolor="primary.main"
                    color="secondary.main"
                    minHeight="100vh"
                    // p={5}
                >
                    <AppRouter />  

                </Box>
                
            
            </Container>
        </>
        // </Router>
    )
}
