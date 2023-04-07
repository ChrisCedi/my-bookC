import React from "react";
import { Drawer as MaterialDrawer } from "@material-ui/core";
import { useStyles } from "./DrawerStyles";

export const Drawer = ({ show, children }) => {
  const classes = useStyles();
  const drawerClasses = { root: classes.root, paper: classes.container };

  return (
    <MaterialDrawer anchor="right" open={show} classes={drawerClasses}>
      {children}
    </MaterialDrawer>
  );
};
