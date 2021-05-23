import React from 'react';
import type { FC } from 'react';
import {
  Box,
  makeStyles,
  Typography,
  Container,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepConnector
} from '@material-ui/core';
import clsx from 'clsx';
import TeacherQuestionHeader from './TeacherQuestionHeader';
import CustomMainButton from 'components/CustomMainButton';
import CustomOutlineButton from 'components/CustomOutlineButton';
import TeacherQuestionOne from './TeacherQuestionOne';
import TeacherQuestionTwo from './TechQuestionTwo';
import TeacherQuestionThree from './TeacherQuestionThree';
import TeacherQuestionFour from './TeacherQuestionFour';
import TeacherQuestionFive from './TeacherQuestionFive';
import TeacherQuestionSix from './TeacherQuestionSix';
import { Redirect } from 'react-router';

interface TeacherQuestionPageProps {
  className?: string;
  setStep: any;
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    paddingBottom: 60,
    paddingTop: 40,
  },
  card: {
    boxShadow: '0px 4px 40px rgba(11, 14, 112, 0.2)',
    borderRadius: '15px',
  },
  cardContent: {
    marginLeft: 32,
    marginRight: 32,
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    lineHeight: '16px',
    marginLeft: 2,
  },
  connector: {
    '& .MuiStepConnector-line': {
      border: '2px dashed #D6D8E7',
    }
  },
  stepper: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    '& .MuiStep-horizontal': {
      paddingLeft: 2,
      paddingRight: 2,
    }
  },
  stepLabel: {
    '& .MuiStepLabel-iconContainer': {
      paddingRight: 0,
    }
  },
  btnWrapper: {
    marginTop: 45,
  },
  customBtn: {
    width: 160,
    height: 45,
    fontSize: 16,
    lineHeight: '19px',
  }
}));

const useStepIconStyles = makeStyles(() => ({
  root: {
    background: 'red',
    '& .MuiStep-horizontal': {
      paddingLeft: 5,
      paddingRight: 0,
    }
  },
  active: {
    background: '#fff',
    padding: '8px 23px',
    border: '2px solid #4B4FE4',
    color: '#4B4FE4',
    borderRadius: 12,
  },
  inactive: {
    background: '#EFF0F7',
    padding: '8px 23px',
    borderRadius: 12,
  },
}));

const questions = [0, 1, 2, 3, 4, 5];

const StepIcon: FC<{ icon: number, completed: boolean, active: boolean }> = ({ icon, completed, active }) => {
  const classes = useStepIconStyles();

  return (
    <span className={clsx(classes.root, active ? classes.active : classes.inactive)}>{icon}</span>
  );
};

const TeacherQuestionPage: FC<TeacherQuestionPageProps> = ({ className, setStep, ...rest }) => {
  const classes = useStyles();
  const [activeQuestion, setActiveQuestion] = React.useState(0);

  const handleNext = () => {
    setActiveQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleBack = () => {
    setActiveQuestion((prevQuestion) => prevQuestion - 1);
  };

  if (activeQuestion >= questions.length) {
    return (
      <Redirect to="/thankyou?action=registration" />
    );
  }

  return (
    <>
      <TeacherQuestionHeader />
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="flex-start"
              mb={0}
              mt={5}
            >
              <Typography
                color="primary"
                variant="body2"
                className={classes.formTitle}
              >
                Let us know a few details
              </Typography>
            </Box>
            <Box
              flexGrow={1}
              mt={2}
            >
              <Stepper
                activeStep={activeQuestion}
                connector={
                  <StepConnector
                    classes={{
                      // completed: { borderColor: "red" },
                      root: classes.connector
                    }}
                  />
                }
                className={classes.stepper}
              >
                {questions.map((question) => (
                  <Step key={question}>
                    <StepLabel
                      className={classes.stepLabel}
                      StepIconComponent={StepIcon}
                    >
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeQuestion === 0 && (<TeacherQuestionOne />)}
                {activeQuestion === 1 && (<TeacherQuestionTwo />)}
                {activeQuestion === 2 && (<TeacherQuestionThree />)}
                {activeQuestion === 3 && (<TeacherQuestionFour />)}
                {activeQuestion === 4 && (<TeacherQuestionFive />)}
                {activeQuestion === 5 && (<TeacherQuestionSix />)}
              </div>
              <div className={clsx("d-flex justify-content-between", classes.btnWrapper)}>
                <CustomOutlineButton
                  onClick={handleBack}
                  label="Back"
                  type="button"
                  customClass={classes.customBtn}
                />
                <CustomMainButton
                  onClick={handleNext}
                  label="Continue"
                  type="button"
                  customClass={classes.customBtn}
                />
              </div>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default TeacherQuestionPage;