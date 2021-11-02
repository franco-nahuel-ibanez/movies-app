import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    spacingImg: {
        margin: 7
    },
    image: {
        width: '100%',
        minHeight: '133px'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
        maxHeight: '30%'
    },
});

export const ImageUi = ({ background, name, type, id }) => {
  const classes = useStyles();



  return (
    <div className={ classes.spacingImg }>
    <img src={`https://image.tmdb.org/t/p/w780/${ background }`} alt={name} className={ classes.image } />
    
    <Link to={`/detail/${type}/${id}`}>
        <ImageListItemBar
            title={ name }
            subtitle={<span>Serie</span>}
            className={ classes.spacingImg }
            actionIcon={
            <IconButton aria-label={`info about ${name}`} className={classes.icon}>
                <InfoIcon />
            </IconButton>
            }
        />
    </Link>
    
    </div>
  );
}