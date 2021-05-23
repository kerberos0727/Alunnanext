import React, { useState } from 'react';
import type { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';
import CustomTextField from 'components/CustomTextField';

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: '29px',
    color: '#0A1F44',
    marginTop: 23
  },
  form: {
    marginTop: 30,
  },
  textarea: {
    '&::placeholder': {
      color: '#A6A9C2',
    },
    marginTop: 16,
    width: '100%',
    height: '128px',
    outline: 'none',
    border: '1px solid #EFF0F6',
    borderRadius: 16,
    padding: '12px 24px',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 300,
    lineHeight: '26px',
    background: '#EFF0F6',
  }
}));

const TeacherQuestionTwo: FC = () => {
  const classes = useStyles();

  const [amount, setAmount] = useState('1');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.question}>How much will you charge per student?</Typography>
      <div className={classes.form}></div>
      <CustomTextField
        required
        fullWidth
        autoFocus
        label="Amount*"
        name="amount"
        onChange={handleChange}
        type="text"
        value={amount}
        startElement={(
          <img src="/static/images/dollar.svg" alt="Money" />
        )}
      />
    </div>
  );
};

export default TeacherQuestionTwo;
