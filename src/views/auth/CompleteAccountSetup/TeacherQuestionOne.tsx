import React, { useState } from 'react';
import type { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { FormControlLabel, RadioGroup, Theme, Typography } from '@material-ui/core';
import CustomRadio from 'components/CustomRadio';

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

const TeacherQuestionOne: FC = () => {
  const classes = useStyles();

  const [topic, setTopic] = useState('1');
  const [otherDesc, setOtherDesc] = useState('');

  const handleChangeRadio = (event) => {
    setTopic(event.target.value);
  };

  const handleChangeOtherDesc = (event) => {
    setOtherDesc(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.question}>What topic is your course?</Typography>
      <RadioGroup
        defaultValue="1"
        aria-label="topic"
        name="topic"
        className={classes.form}
        value={topic}
        onChange={handleChangeRadio}
      >
        <FormControlLabel value="1" control={<CustomRadio />} label="Nec integer" />
        <FormControlLabel value="2" control={<CustomRadio />} label="Vitae id" />
        <FormControlLabel value="3" control={<CustomRadio />} label="Leo convallis" />
        <FormControlLabel value="4" control={<CustomRadio />} label="Amet quam" />
        <FormControlLabel value="other" control={<CustomRadio />} label="Other" />
      </RadioGroup>
      {topic === 'other' && (
        <textarea
          className={classes.textarea}
          onChange={handleChangeOtherDesc}
          value={otherDesc}
          placeholder="Describe"
        />
      )}
    </div>
  );
};

export default TeacherQuestionOne;
