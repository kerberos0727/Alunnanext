import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import CustomText from './CustomText';

const useStyles = makeStyles((theme: Theme) => ({
  iconText: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto 0',
  },
  imgIconText: {
    height: '16px',
    margin: 'auto 0',
    marginRight: '14px'
  }
}));
const IconWithText = (props: {
  CIcon: any;
  text: string;
  style?: any;
  className?: string;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.iconText}>
      <img className={classes.imgIconText} src={props.CIcon} alt="icon" />
      <CustomText
        styles={props.style && { ...props.style }}
        className={props.className}
      >
        {props.text}
      </CustomText>
    </div>
  );
};
export default IconWithText;
