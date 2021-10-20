import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchMovie, resetSearch } from '../../stateManagement/actions/dataAction';
import { CircularProgress, Grid } from '@material-ui/core';
import { CardResults } from './CardResults';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '80%',
    maxWidth: '1200px',
    height: '90%',
    overflow: "auto"
  },
}));

export const ModalResults = ({ handleCloseModal, openModal, title }) => {
    const classes = useStyles();

    const { searchResults } = useSelector(state => state.data)

    const dispatch = useDispatch()

    useEffect(() => {
        
        if(openModal && title.length > 3){
            dispatch( searchMovie(title) )
        }
    
        return () => {
            dispatch( resetSearch() )
        }
    }, [openModal, title, dispatch])


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={openModal}>
                <div className={classes.paper}>
                    
                    {
                        searchResults === null ? 
                            <CircularProgress />
                        :
                            
                            <>
                                <h3>Resultados</h3>
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                    spacing={3}
                                >       
                                    {
                                        searchResults.map(film => (
                                            <Grid item xs={2} key={film.id}>
                                                <CardResults
                                                    { ...film }
                                                    key={film.id}
                                                    handleCloseModal={ handleCloseModal }
                                                />
                                        
                                            </Grid>
                                        ))
                                    }     
                                </Grid>
                            </>
                    }

                </div>
                </Fade>
            </Modal>
        </div>
    );
}
