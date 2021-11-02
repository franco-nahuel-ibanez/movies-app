import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles( (theme) => ({
  root: {
    maxWidth: 345,
    height: '100%',
    backgroundColor: theme.palette.primary.dark
  },
  link: {
    textDecoration: 'none'
  },

  title:{
    fontWeight: 'bold',
  }
}));

export const CardUi = ({ title, poster, name, id, type }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link 
        to={`/detail/${type}/${id}`}
        className={ classes.link }  
      >
        <CardMedia
          component="img"
          alt="movie"
          // height="100%"
          className={classes.media}
          image={`https://image.tmdb.org/t/p/original${ poster }`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="subtitle1" noWrap={true} color="secondary" className={ classes.title }  >
            { title ? title : name }
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
