import React from 'react';
import type { FC } from 'react';

import clsx from 'clsx';
import {
  Box,
  makeStyles,
  Typography,
  Container,
  Card,
  CardContent
} from '@material-ui/core';
import CompleteAccountSetupForm from './CompleteAccountSetupForm';
import Link from 'next/link';

interface CompleteAccountSetupProps {
  className?: string;
  setStep: any;
}

const useStyles = makeStyles(() => ({
  root: {
    // minHeight: '100vh',
    backgroundImage: 'url("/static/images/complete_account_setup_bg.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  cardContainer: {
    paddingBottom: 16,
    paddingTop: 50
  },
  card: {
    boxShadow: '0px 4px 40px rgba(11, 14, 112, 0.2)',
    borderRadius: 16,
    // marginTop: "100px"
  },
  cardContent: {

  },
  formTitle: {
    fontWeight: 'bold',
    lineHeight: '39px',
    fontSize: '32px',
    textAlign: "center"
  },
  loginLink: {
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'bold',
  },
  logo: {

  },
  logoLink: {
    width: '100%',
    textAlign: 'center',
    margin: '20px 0'
    
  },
  loginWrapper: {

  },
  loginText: {
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
  },
}));

const CompleteAccountSetupPage: FC<CompleteAccountSetupProps> = ({ className, setStep, ...rest }) => {
  const classes = useStyles();
  
  return (
    <>
      {/* <CompleteAccountSetupHeader /> */}
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <div className={classes.logoLink}>
              <Link
                // component={RouterLink}
                href="/"
                // variant="body2"
                // color="primary"
                
              >
                <img
                  alt="Logo"
                  className={classes.logo}
                  src="/static/images/logo.svg"
                />
              </Link>
            </div>
            
            <Box
              alignItems="center"
              display="flex"
              justifyContent="center"
              mb={0}
              style={{marginBottom: '20px'}}
            >
              
              <div className="d-flex">
                <Typography
                  color="textPrimary"
                  variant="h2"
                  className={classes.formTitle}
                >
                  Complete <span style={{color: "#4B4FE4"}}>account setup</span>
                </Typography>
                
              </div>
            </Box>
            <div className={clsx("d-flex justify-content-center", classes.loginWrapper)}>
              <Typography className={classes.loginText}>I'm already a member, &nbsp;</Typography>
              <Typography>
                <Link
                  // component={RouterLink}
                  href="/"
                  // variant="body2"
                  // color="primary"
                  // className={classes.loginLink}
                >
                  Log in
                </Link>
              </Typography>
            </div>
            <Box
              flexGrow={1}
              mt={4}
            >
              <CompleteAccountSetupForm setStep={setStep} />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default CompleteAccountSetupPage;