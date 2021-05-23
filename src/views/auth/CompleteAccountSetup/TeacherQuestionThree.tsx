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
}));

const TeacherQuestionThree: FC = () => {
  const classes = useStyles();

  const [isOnlyTeacher, setIsOnlyTeacher] = useState('y');

  const handleChangeRadio = (event) => {
    setIsOnlyTeacher(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.question}>Are you the only teacher?</Typography>
      <RadioGroup
        defaultValue="1"
        aria-label="topic"
        name="topic"
        className={classes.form}
        value={isOnlyTeacher}
        onChange={handleChangeRadio}
      >
        <FormControlLabel value="y" control={<CustomRadio />} label="Yes" />
        <FormControlLabel value="n" control={<CustomRadio />} label="No" />
      </RadioGroup>
    </div>
  );
};

export default TeacherQuestionThree;
