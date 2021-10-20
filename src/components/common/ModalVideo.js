import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export const ModalVideo = ({ videoKey, videoPlatform, isOpenModal, closeModal}) =>  {
    const classes = useStyles();

    const [url, setUrl] = useState(null)

    useEffect(() => {
        switch (videoPlatform) {
            case 'YouTube':
                setUrl(`https://www.youtube.com/watch?v=${videoKey}`)
                break;
            
            case 'Vimeo':
                setUrl(`https://vimeo.com/${videoKey}`)
                break;
                
            default:
                break;
        }

    }, [videoKey, videoPlatform])

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpenModal}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpenModal}>
            <div>
                <ReactPlayer url={url} controls />
            </div>
        </Fade>
      </Modal>
  );
}
