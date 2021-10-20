import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";

import { drawerWidth, iconsSidebar, sidebarItem } from '../../const/index'
import { CustomLink } from "./CustomLink";


const UseStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  iconStyle: {
    paddingRight: theme.spacing(2) * 4,
  }
}));


export const ListItemUi = () => {

  const classes = UseStyles();

  const [state, setState] = useState({})

  const handleClick = (e) => {
    setState({ [e]: !state[e] })
  }

  return (
    <div>
      {sidebarItem.map((list, i) => {
        return (
          <List
            className={classes.root}
            key={list.id}
            color="secondary"
          >
            {list.route.map((item) => {
              return (
                <div key={item.id}>
                  {item.subitems != null ? (
                    <div key={item.id}>
                      <ListItem
                        button
                        key={item.id}
                        onClick={() => { handleClick(item.link) }}
                        color="secondary"
                      >
                        <Icon className={ classes.iconStyle } color="secondary">{ iconsSidebar[i] }</Icon>
                        <ListItemText
                          primary={item.link}
                          color="secondary"
                        />
                        {state[item.link] ? (
                          <ExpandLess color="secondary"/>
                        ) : (
                          <ExpandMore color="secondary"/>
                        )}
                      </ListItem>
                      <Collapse
                        key={list.route.id}
                        component="li"
                        in={state[item.link]}
                        timeout="auto"
                        unmountOnExit
                        color="secondary"
                      >
                        {/* subitems */}
                        <List disablePadding color="secondary">
                          {item.subitems.map(
                            sitem => {
                              return (
                                <CustomLink
                                  primary={sitem.link}
                                  to={sitem.path}
                                  id={sitem.id}
                                  key={sitem.id}
                                  color="secondary"
                                />
                              );
                            }
                          )}
                        </List>
                      </Collapse>{" "}
                    </div>
                  ) : (
                    <CustomLink
                      primary={item.link}
                      to={item.path}
                      icon={ iconsSidebar[i] }
                      id={item.id}
                      color="secondary"
                    />
                  )}
                </div>
              );
            })}
          </List>
        );
      })}
    </div>
  );
}

