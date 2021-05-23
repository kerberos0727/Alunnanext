import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    fontFamily: 'Inter',
    lineHeight: '28px',
    fontSize: '17px'
  }
}));

const TextFooterNormal = (props: { text: string, styleCustom?: string }) => {
  const { text, styleCustom } = props;
  const classes = useStyles();
  return (
    <p
      className={classes.root}
      style={
        styleCustom && { marginTop: styleCustom, marginBottom: styleCustom }
      }
    >
      {text}
    </p>
  );
};
export default TextFooterNormal;
