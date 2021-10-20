import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%'
  },
  content:{ 
    width: '100%', 
    whiteSpace: 'nowrap' 
  },

  link: {
    textDecoration: 'none'
  },

  title:{
    fontWeight: 'bold',
    color: '#000'
  }
});

export const CardResults = ({ title, poster, name, id, type, handleCloseModal }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={ () => handleCloseModal() }>
      <CardActionArea>
      <Link 
        to={`/detail/${type}/${id}`}
        className={ classes.link }  
      >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          // height="100%"
          className={classes.media}
          image={`https://image.tmdb.org/t/p/original${ poster }`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="subtitle1" noWrap={true} className={ classes.title }  >
            { title ? title : name }
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
