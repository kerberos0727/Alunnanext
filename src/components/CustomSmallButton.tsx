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
    width: '90px',
    height: '32px',
    fontWeight: 600,
    textTransform: 'unset',
    fontSize: '16px',
    '&:hover': {
      background: '#373BCE',
    },
    '&:active': {
      background: '#3034B8',
    }
  },
}));

type CustomSmallButtonProps = ButtonProps & { label: string; customClass?: ClassValue; };

const CustomSmallButton: FC<CustomSmallButtonProps> = (props) => {
  const classes = useStyles();

  const { onClick, label, disabled, type, customClass, startIcon } = props;

  return (
    <Button
      className={clsx(classes.root, customClass)}
      color="primary"
      onClick={onClick}
      disabled={disabled}
      type={type}
      variant="contained"
      startIcon={startIcon}
    >
      {label}
    </Button>
  );
};

export default CustomSmallButton;