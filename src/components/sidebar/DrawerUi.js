import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';         
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpen } from '../../stateManagement/actions/uiAction';

import { drawerWidth } from '../../const/index';
import { ListItemUi } from './ListItemUi';


const useStyles = makeStyles( (theme) => ({
    drawer: {
        width: drawerWidth,
        // width: '100%',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            zIndex: 1000
        }
    },
    drawerOpen: {
        // width: drawerWidth,
        width: 240,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        background: theme.palette.primary.main,
    
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
        [theme.breakpoints.down('sm')]: {
          width: 0,
        },
        background: theme.palette.primary.main,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }
}))


export const DrawerUi = () => {

    const classes = useStyles()
    const theme = useTheme();

    const {open} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const handleDrawerClose = () => {
        dispatch( toggleOpen() )
    }

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose} color="secondary">
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            
            <ListItemUi />
        </Drawer>
    )
}