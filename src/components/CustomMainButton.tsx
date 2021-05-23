import React from 'react';
import clsx, { ClassValue } from 'clsx';

import { Button, makeStyles, Theme, ButtonProps } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root1: {
    padding: '13px 12.5px',
    borderRadius: '50px',
    // width: '75%',
    width: '200px',
    // width: '487px',
    boxShadow: '0px 4px 25px rgba(72, 77, 255, 0.4)',
    fontWeight: 600,
    textTransform: 'initial',
    '&:hover': {
      background: '#373BCE'
    },
    '&:active': {
      background: '#3034B8'
    }
  }
}));

type CustomButtonProps = ButtonProps & {
  label: string;
  customClass?: ClassValue;
};

const CustomMainButton: React.FC<CustomButtonProps> = props => {
  const classes = useStyles();

  const { onClick, label, disabled, type, size, customClass } = props;

  return (
    <Button
      className={clsx(classes.root1, customClass)}
      color="secondary"
      onClick={onClick}
      disabled={disabled}
      size={size ? size : 'large'}
      type={type}
      variant="contained"
      {...props}
    >
      {label}
    </Button>
    // <FilledInput
    //   error={error}
    //   label={label}
    //   name={name}
    //   onBlur={onBlur}
    //   onChange={onChange}
    //   type={type}
    //   value={value}

    //   InputProps={{ disableUnderline: true }}
    //   {...customProps}
    // />
  );
};

export default CustomMainButton;
