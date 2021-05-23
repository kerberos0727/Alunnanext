import React, { useState } from 'react';
import type { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, IconButton, Theme, Typography } from '@material-ui/core';
import CustomTextField from 'components/CustomTextField';
import CustomSmallButton from 'components/CustomSmallButton';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

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
    '&::placeholder': {
      color: '#A6A9C2',
    }
  },
  section: {
    marginTop: 20,
    // marginBottom: 30,
  },
  sectionText: {
    marginTop: 30,
    color: '#546681',
    letterSpacing: '0.1em',
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 'bold',
  },
}));

const TeacherQuestionFour: FC = () => {
  const classes = useStyles();

  const [qualification, setQualification] = useState('');
  const initPositions = [
    {
      position: '',
      location: '',
      period: '',
    }
  ];
  const initEducations = [
    {
      education: '',
      location: '',
      period: '',
    }
  ];
  const [positions, setPositions] = useState(initPositions);
  const [educations, setEducations] = useState(initEducations);
  const [certificates, setCertificates] = useState(['']);

  const handleChangeQualification = (event) => {
    setQualification(event.target.value);
  };

  const handleChangePosition = (index: number, fieldName: string, e: any) => {
    const newPositions = [...positions];
    newPositions[index][fieldName] = e.target.value;
    setPositions(newPositions);
  };

  const handleChangeEducation = (index: number, fieldName: string, e: any) => {
    const newEducations = [...educations];
    newEducations[index][fieldName] = e.target.value;
    setEducations(newEducations);
  };

  const handleChangeCertificate = (index: number, e: any) => {
    const newCerts = [...certificates];
    newCerts[index] = e.target.value;
    setCertificates(newCerts);
  };

  const addPositions = () => {
    setPositions(positions.concat(initPositions));
  };

  const addEducations = () => {
    setEducations(educations.concat(initEducations));
  };

  const addCertificate = () => {
    const newCerts = [...certificates];
    newCerts.push('');
    setCertificates(newCerts);
  };

  const removeCertificate = (index: number) => {
    const newCerts = [...certificates];
    newCerts.splice(index, 1)
    setCertificates(newCerts);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.question}>What is your general info?</Typography>
      <div className={classes.form}>
        <textarea
          className={classes.textarea}
          onChange={handleChangeQualification}
          value={qualification}
          placeholder="Summary of Qualification"
          autoFocus
        />
        <Typography variant="body1" className={classes.sectionText}>Work Experience*</Typography>
        <Grid container className={classes.section} spacing={1}>
          {positions.map((position, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={12}>
                  <CustomTextField
                    fullWidth
                    label={`Position #${index + 1}`}
                    name="position"
                    onChange={(e) => handleChangePosition(index, 'position', e)}
                    type="text"
                    value={position.position}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label="Location"
                    name="location"
                    onChange={(e) => handleChangePosition(index, 'location', e)}
                    type="text"
                    value={position.location}
                    startElement={(
                      <img src="/static/images/location.svg" alt="Location" />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label="Period"
                    name="period"
                    onChange={(e) => handleChangePosition(index, 'period', e)}
                    type="date"
                    value={position.period}
                    startElement={(
                      <img src="/static/images/calendar.svg" alt="Period" />
                    )}
                  />
                </Grid>
              </React.Fragment>
            );
          })}
          <Grid item xs={12}>
            <CustomSmallButton
              label="Add"
              onClick={addPositions}
              startIcon={<AddIcon />}
            />
          </Grid>
        </Grid>
        <Typography variant="body1" className={classes.sectionText}>Education*</Typography>
        <Grid container className={classes.section} spacing={1}>
          {educations.map((education, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={12}>
                  <CustomTextField
                    fullWidth
                    label={`Education #${index + 1}`}
                    name="education"
                    onChange={(e) => handleChangeEducation(index, 'education', e)}
                    type="text"
                    value={education.education}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label="Location"
                    name="location"
                    onChange={(e) => handleChangeEducation(index, 'location', e)}
                    type="text"
                    value={education.location}
                    startElement={(
                      <img src="/static/images/location.svg" alt="Location" />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextField
                    fullWidth
                    label="Period"
                    name="period"
                    onChange={(e) => handleChangeEducation(index, 'period', e)}
                    type="date"
                    value={education.period}
                    startElement={(
                      <img src="/static/images/calendar.svg" alt="Period" />
                    )}
                  />
                </Grid>
              </React.Fragment>
            );
          })}
          <Grid item xs={12}>
            <CustomSmallButton
              label="Add"
              onClick={addEducations}
              startIcon={<AddIcon />}
            />
          </Grid>
        </Grid>
        <Typography variant="body1" className={classes.sectionText}>Teaching Certificates*</Typography>
        <Grid container className={classes.section} spacing={1}>
          {certificates.map((certificate, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={11}>
                  <CustomTextField
                    fullWidth
                    label={`Certificate #${index + 1}`}
                    name={`${certificate}[${index}]`}
                    onChange={(e) => handleChangeCertificate(index, e)}
                    type="text"
                    value={certificate}
                  />
                </Grid>
                {index > 0 && (
                  <Grid item xs={1}>
                    <IconButton onClick={() => removeCertificate(index)}>
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                )}
              </React.Fragment>
            );
          })}
          <Grid item xs={12}>
            <CustomSmallButton
              label="Add"
              onClick={addCertificate}
              startIcon={<AddIcon />}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TeacherQuestionFour;
