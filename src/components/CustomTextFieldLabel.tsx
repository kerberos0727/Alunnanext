import React from 'react';
import type { FC } from 'react';

import {
  makeStyles,
  TextFieldProps,
  FormControl,
  OutlinedInput,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core';
import CustomTextMini from './CustomTextMini';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiInputBase: {
      input: {
        padding: '18px 18px 18px!important',
        '&::placeholder': {
          opacity: 1,
          color: '#A6A9C2',
          fontSize: 16,
          marginLeft: 24,
        },
        background: '#FFF',
        borderRadius: 16,
        '&:focus': {
          background: 'white',
          // border: '2px solid #4B4FE4',
          borderRadius: '16px'
        }
      }
    },
  },
});
const useStyles = makeStyles((theme) => ({
  outLine: {
    borderRadius: 16,
    background: '#fff',
  },
  root: {

  },
}));

type CustomTextProps = TextFieldProps;

const CustomTextField: FC<CustomTextProps> = (props) => {
  const classes = useStyles();

  const { rows, multiline, label, name, onBlur, onChange, value } = props;

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CustomTextMini style={{ color: '#4B4FE4', fontWeight: 'bold', marginBottom: '17px', textTransform: 'uppercase' }}>{label}</CustomTextMini>
      <FormControl fullWidth>
        <OutlinedInput
          rows={rows}
          multiline={multiline}
          id="input"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          classes={{
             root: classes.outLine,
          }}

        />
     </FormControl>
    </div>
   </ThemeProvider>
  );
};

export default CustomTextField;