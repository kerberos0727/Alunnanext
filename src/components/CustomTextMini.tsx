import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Inter',
    fontSize: '14px',
    lineHeight: '17px'
  }
}));

const CustomTextMini = (props: { children: any; style?: any }) => {
  const { children, style } = props;
  const classes = useStyles();
  return style ? (
    <p className={classes.root} style={{ ...style }}>
      {children}
    </p>
  ) : (
    <p className={classes.root}>{children}</p>
  );
};
export default CustomTextMini;
