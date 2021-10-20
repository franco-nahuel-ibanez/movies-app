import React, { useState } from 'react'
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { PlayCircleOutlineRounded } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { ModalVideo } from '../common/ModalVideo';

const useStyles = makeStyles({
    themeColor: {
        color: 'white',
    },
})


export const BoxText = ({ title, name, synopsis, votes}) => {
    const {video} = useSelector(state => state.data)

    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => setIsOpenModal(true)
    const closeModal = () => setIsOpenModal(false)

    const btnTrailer = (video) =>{
        if(video !== undefined ){
            const videoKey = video.key;
            const videoPlatform = video.site
            return (
                <>
                    <Button
                        startIcon={<PlayCircleOutlineRounded />}
                        className={ classes.themeColor }
                        onClick = { openModal }
                    >
                        Ver Trailer
                    </Button>
                    <ModalVideo
                        videoKey={videoKey}
                        videoPlatform={videoPlatform}
                        isOpenModal={ isOpenModal }
                        closeModal={ closeModal }
                    />
                </>
            )

        }
    }


    const classes = useStyles()
    
    return (
        <Grid
            item
            xs={6}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                className={ classes.themeColor }
            >
                <Box 
                    display="flex"
                    justifyContent="space-between"
                >
                    <Typography variant='h5' aling="center" display="inline">
                        { title ? title : name }
                    </Typography>
 
                    {btnTrailer(video)}          
                </Box>

                <Box my={2}>
                    <Box component="span" mr={1}>
                        Rating:
                    </Box>
                    <Typography variant="body1" display="inline">
                        {votes}
                    </Typography>
                </Box>
                
                <Typography variant='subtitle1' aling="center" display="block">
                    {synopsis}
                </Typography>

            </Box>
        </Grid>
    )
}
