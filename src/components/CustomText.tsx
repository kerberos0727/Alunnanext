import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Inter',
    lineHeight: '28px',
    fontWeight: 'normal',
    fontSize: '17px',
    margin: 'auto 0'
  },
}));

const CustomText = (props: {
  children: any;
  fontSize?: string | number;
  lineHeight?: string | number;
  fontWeight?: 'bold' | 'bolder' | 'normal' | 'lighter' | '600';
  color?: string;
  styles?: any;
  className?: string;
}) => {
  const { children, fontSize, lineHeight, fontWeight, color, styles, className } = props;
  const classes = useStyles();
  return (
    <p
      className={clsx(
        classes.root, 
        'root-font', 
        className
      )}
      style={{
        fontSize,
        fontWeight,
        color,
        lineHeight,
        ...styles
      }}
    >
      {children}
    </p>
  );
};
export default CustomText;
