import React from 'react';
import type { FC } from 'react';
import clsx, { ClassValue } from 'clsx';

import {
  Button,
  makeStyles,
  Theme,
  ButtonProps,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '13px 12.5px',
    borderRadius: '50px',
    border: '1px solid #546681',
    color: '#546681',
    width: '200px',
    fontWeight: 600,
    textTransform: 'unset',
    '&:hover': {
      background: '#373BCE',
      color: "#ffffff"
    },
    '&:active': {
      background: '#3034B8',
    }
  },
}));

type CustomOutlineButtonProps = ButtonProps & { label: string; customClass?: ClassValue; };

const CustomOutlineButton: FC<CustomOutlineButtonProps> = (props) => {
  const classes = useStyles();

  const { onClick, label, disabled, type, size, customClass, startIcon } = props;

  return (
    <Button
      className={clsx(classes.root, customClass)}
      color="primary"
      onClick={onClick}
      disabled={disabled}
      size={size ? size : 'large'}
      type={type}
      variant="outlined"
      startIcon={startIcon}
    >
      {label}
    </Button>
  );
};

export default CustomOutlineButton;