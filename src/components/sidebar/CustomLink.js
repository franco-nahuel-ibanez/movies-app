import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';

const UseStyles = makeStyles((theme) => ({
  iconStyle: {
    paddingRight: theme.spacing(2) * 4,
  }
}));

export const CustomLink = ({ primary, icon, to, id }) => {

  const classes = UseStyles()

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem
        button 
        key={id} 
        component={CustomLink}
        >
        <Icon className={ classes.iconStyle }>{icon}</Icon>
            <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}