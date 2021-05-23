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
  linkedAccountBtn: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '19px',
    color: '#4B4FE4',
    marginRight: 24,
  }
}));

const TeacherQuestionFive: FC = () => {
  const classes = useStyles();

  const [slack, setSlack] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [showEndElmSlack, setShowEndElmSlack] = useState(false);
  const [showEndElmFacebook, setShowEndElmFacebook] = useState(false);
  const [showEndElmLinkedIn, setShowEndElmLinkedIn] = useState(false);

  const handleSlack = (event) => {
    setSlack(event.target.value);
  };

  const handleFacebook = (event) => {
    setFacebook(event.target.value);
  };

  const handleLinkedIn = (event) => {
    setLinkedIn(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.question}>What is your general info?</Typography>
      <div className={classes.form}>
        <CustomTextField
          fullWidth
          label="Slack"
          name="slack"
          onChange={handleSlack}
          onFocus={() => setShowEndElmSlack(true)}
          onBlur={() => setShowEndElmSlack(false)}
          type="text"
          value={slack}
          startElement={(
            <img src="/static/images/slack.svg" alt="Slack" />
          )}
          endElement={showEndElmSlack && (
            <span className="d-flex align-items-center">
              <span className={classes.linkedAccountBtn} onClick={() => console.log('linked slack')}>
                Submit
              </span>
              <img src="/static/images/close.svg" alt="Remove" onClick={() => setSlack('')}/>
            </span>
          )}
        />
        <CustomTextField
          fullWidth
          label="Facebook"
          name="facebook"
          onChange={handleFacebook}
          type="text"
          value={facebook}
          onFocus={() => setShowEndElmFacebook(true)}
          onBlur={() => setShowEndElmFacebook(false)}
          startElement={(
            <img src="/static/images/facebook.svg" alt="Facebook" />
          )}
          endElement={showEndElmFacebook && (
            <span className="d-flex align-items-center">
              <span className={classes.linkedAccountBtn} onClick={() => console.log('linked facebook')}>
                Submit
              </span>
              <img src="/static/images/close.svg" alt="Remove" onClick={() => setFacebook('')}/>
            </span>
          )}
        />
        <CustomTextField
          fullWidth
          label="Linkedin"
          name="linkedIn"
          onChange={handleLinkedIn}
          type="text"
          value={linkedIn}
          startElement={(
            <img src="/static/images/linkedIn_light.svg" alt="LinkedIn" />
          )}
          onFocus={() => setShowEndElmLinkedIn(true)}
          onBlur={() => setShowEndElmLinkedIn(false)}
          endElement={showEndElmLinkedIn && (
            <span className="d-flex align-items-center">
              <span className={classes.linkedAccountBtn} onClick={() => console.log('linked linkedIn')}>
                Submit
              </span>
              <img src="/static/images/close.svg" alt="Remove" onClick={() => setLinkedIn('')}/>
            </span>
          )}
        />
      </div>
    </div>
  );
};

export default TeacherQuestionFive;
