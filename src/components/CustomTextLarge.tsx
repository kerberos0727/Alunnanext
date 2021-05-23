import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Inter',
    fontSize: '46px',
    lineHeight: '58px',
    fontWeight: 'bold',
    color: '#0A1F44'
  }
}));

const CustomTextLarge = (props: { children: any; style?: any; className?: string }) => {
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
export default CustomTextLarge;
