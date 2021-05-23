import React, { useState } from 'react';
import type { FC } from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import Page from 'components/Page';
import CompleteAccountSetupPage from './CompleteAccountSetupPage';
import { CompleteAccountStep } from 'types/user';
import TeacherQuestionPage from './TeacherQuestionPage';

interface CompleteAccountSetupProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    // backgroundImage: 'url("/static/images/complete_account_setup_bg.png")',
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
  },
  cardContainer: {

  },
  card: {
    boxShadow: '0px 4px 40px rgba(11, 14, 112, 0.2)',
    borderRadius: '15px',
  },
  cardContent: {

  },
  formTitle: {
    fontWeight: 'bold',
    lineHeight: '39px',
    fontSize: '32px',
  }
}));

const CompleteAccountSetup: FC<CompleteAccountSetupProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const [step, setStep] = useState(CompleteAccountStep.Fill_Info);

  return (
    <Page
      className={classes.root}
      title="Complete Account Setup"
    >
      {step === CompleteAccountStep.Fill_Info && (<CompleteAccountSetupPage setStep={setStep} />)}
      {step === CompleteAccountStep.Teacher_Question && (<TeacherQuestionPage setStep={setStep} />)}
    </Page>
  );
}

export default CompleteAccountSetup;