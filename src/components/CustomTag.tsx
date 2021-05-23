import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
  pRoot: {
    fontFamily: 'Inter',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#546681',
    fontWeight: 'bold',
    // margin: '8px 12px 8px 12px',
    margin: '5px 8px 5px 8px',
  },
  root: {
    background: '#EEF0FF',
    borderRadius: '10px',
    display: 'flex',
    width: 'max-content',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const CustomTag = (props: { children: any; styles?: any }) => {
  const { children, styles } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.pRoot} style={{ ...styles }}>
        {children}
      </p>
    </div>
  );
};
export default CustomTag;
