import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    fontFamily: 'Inter',
    lineHeight: '1.5rem',
    fontWeight: 'bold',
    fontSize: '32px'
  }
}));

const TextFooterBold = (props: { text: string }) => {
  const { text } = props;
  const classes = useStyles();
  return <p className={classes.root}>{text}</p>;
};
export default TextFooterBold;
