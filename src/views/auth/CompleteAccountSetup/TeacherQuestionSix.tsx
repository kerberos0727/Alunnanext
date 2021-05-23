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
    marginTop: 23,
  },
  form: {
    marginTop: 30,
  },
  textarea: {
    '&::placeholder': {
      color: '#A6A9C2',
    },
    marginBottom: 12,
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

const TeacherQuestionSix: FC = () => {
  const classes = useStyles();

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.question}>Please provide us your contacts</Typography>
      <div className={classes.form}>
        <CustomTextField
          fullWidth
          autoFocus
          label="Phone*"
          name="phone"
          onChange={handleChangePhone}
          type="text"
          value={phone}
        />
        <CustomTextField
          fullWidth
          autoFocus
          label="Email*"
          name="email"
          onChange={handleChangeEmail}
          type="email"
          value={email}
        />
        <textarea
          className={classes.textarea}
          onChange={handleChangeComment}
          value={comment}
          placeholder="Leave your comment"
        />
      </div>
    </div>
  );
};

export default TeacherQuestionSix;
