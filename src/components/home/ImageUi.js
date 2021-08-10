import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
    spacingImg: {
        margin: 7
    },
    image: {
        width: '100%'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

export const ImageUi = ({ background, title }) => {
  const classes = useStyles();

  return (
    <div className={ classes.spacingImg }>
    <img src={`https://image.tmdb.org/t/p/w780/${ background }`} alt={title} className={ classes.image } />
    
    <ImageListItemBar
        title={ title}
        subtitle={<span>by: {title}</span>}
        className={ classes.spacingImg }
        actionIcon={
        <IconButton aria-label={`info about ${title}`} className={classes.icon}>
            <InfoIcon />
        </IconButton>
        }
    />
    </div>
  );
}
