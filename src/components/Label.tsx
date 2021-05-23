import React from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core';
import type { Theme } from 'theme'; 

interface LabelProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  children?: ReactNode;
  style?: {};
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Roboto',
    alignItems: 'center',
    borderRadius: 2,
    display: 'inline-flex',
    flexGrow: 0,
    whiteSpace: 'nowrap',
    cursor: 'default',
    flexShrink: 0,
    fontSize: 12,
    fontWeight: "normal",
    height: 20,
    justifyContent: 'center',
    letterSpacing: 0.5,
    minWidth: 20,
    padding: 5,
    // textTransform: 'uppercase',
    textTransform: 'none'
  },
  primary: {
    color: "#000",
    backgroundColor: '#fff'
  },
  secondary: {
    color: '#000',
    backgroundColor: '#fff'
  },
  error: {
    color: '#000',
    backgroundColor: '#fff'
  },
  success: {
    color: '#000',
    backgroundColor: '#fff'
  },
  warning: {
    color: '#000',
    backgroundColor: '#fff'
  }
}));

const Label: FC<LabelProps> = ({
  className = '',
  color = 'secondary',
  children,
  style,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <span
      className={
        clsx(classes.root, {
          [classes[color]]: color
        }, className)
      }
      {...rest}
    >
      {children}
    </span>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'success'])
};

export default Label;
