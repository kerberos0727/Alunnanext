import React from 'react';
import type { FC } from 'react';

import {
  FilledInput,
  makeStyles,
  Theme,
  FormControl,
  InputLabel,
  FilledInputProps,
  FormHelperText
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    position: 'relative',
    marginBottom: 12
  },
  root: {
    borderRadius: 16,
    marginBottom: 12,
    '&.MuiFilledInput-root.Mui-error': {
      '& input': {
        '&:invalid': {
          border: '2px solid #DB5C5C',
          background: '#FFF2F7',
        },
        '&:valid': {
          background: '#ECF8F3!important',
          border: '2px solid #38CB89!important'
        },
        '& ::calendar-picker-indicator': {
          display: 'none'
        }
      },
    }
  },
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  label: {
    color: '#A6A9C2',
  },
  labelRoot: {
    paddingLeft: 16,
    '&.Mui-focused': {
      fontWeight: 'bold',
      color: '#546681'
    }
  },
  labelRootWithStartElement: {
    paddingLeft: 52,
    '&.Mui-focused': {
      fontWeight: 'bold',
      color: '#546681'
    }
  },
  helperText: {
    marginBottom: 10,
    marginLeft: 0,
  },
  endElement: {
    position: 'absolute',
    top: 19,
    right: 20,
  },
  startElement: {
    position: 'absolute',
    top: 19,
    left: 22,
    zIndex: 9,
  },
  paddingWithStartElement: {
    paddingLeft: 52,
    paddingRight: 32,
    paddingBottom: 12,
  },
  paddingNormal: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 12,
  },
}));

type CustomTextProps = FilledInputProps & {
  label: string;
  helperText?: string;
  endElement?: any;
  onClickEndElement?: any;
  startElement?: any;
};

const CustomTextField: FC<CustomTextProps> = (props) => {
  const classes = useStyles();

  const {
    error,
    label,
    helperText,
    name,
    onBlur,
    onChange,
    type,
    value,
    fullWidth,
    endElement,
    startElement,
  } = props;
  const { ...customProps }: CustomTextProps = props;

  return (
    <div className={classes.formControl}>
      <FormControl variant="filled" fullWidth error={error}>
        {startElement && <span className={classes.startElement}>{startElement}</span>}
        <InputLabel
          htmlFor="component-filled"
          className={classes.label}
          classes={{
            root: startElement ? classes.labelRootWithStartElement : classes.labelRoot
          }}
        >
          {label}
        </InputLabel>
        <FilledInput
          error={error}
          name={name}
          fullWidth={fullWidth}
          value={value}
          onChange={onChange}
          type={type}
          onBlur={onBlur}
          classes={{
            root: classes.root,
            underline: classes.underline,
            input: startElement ? classes.paddingWithStartElement : classes.paddingNormal
          }}
          {...customProps}
        />
        {endElement && (
          <span className={classes.endElement}>{endElement}</span>
        )}
        {helperText && (
          <FormHelperText className={classes.helperText}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </div>
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

export default CustomTextField;