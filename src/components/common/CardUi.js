import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  content:{ 
    width: '100%', 
    whiteSpace: 'nowrap' 
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold'
  }

});

export const CardUi = ({ title, poster }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w780/${ poster }`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ width: 200, whiteSpace: 'nowrap' }}>
            <Box
              component="div"
              // my={2}
              textOverflow="ellipsis"
              overflow="hidden"
              className={ classes.title }
              bgcolor="background.paper"
            >
              {title}
            </Box>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}




// image={`https://image.tmdb.org/t/p/w780/${ poster }`}