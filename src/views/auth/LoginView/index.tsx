import React from 'react';
import {
  Box,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core';
import type { Theme } from 'theme';
import Page from 'components/Page';
import JWTLoginForm from './JWTLoginForm';
import classNames from "classnames";

interface ComponentProps {
  openRegister?: () => void;
  openLogin?: () => void;
  viewDeviceType?: number;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
  },
  container: {
    display: 'flex'
  },
  banner: {
    height: 'calc(100vh - 80px)'
  },
  bannerChip: {
    marginRight: 20
  },
  methodIcon: {
    height: 30,
    marginLeft: 20,
    marginRight: 20
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  },
  formContainer: {

  },
  formTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '39px',
  },
  formFooter: {
    width: '75%',
  },
  noPadding: {
    padding: "60px 0"
  }
}));

const LoginView = (props: ComponentProps) => {
  const classes = useStyles();
  const cardContent = classNames({
    [classes.cardContent]: true,
    [classes.noPadding]: props.viewDeviceType===2,
    
  });
  if(props.viewDeviceType < 2)
  return (
    <Page
      className={classes.root}
      title="Alunna"
    >
      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <img src="/static/images/astronaut.png" alt="alunna" className={classes.banner} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container justify="center" alignItems="center" className="d-flex h-100">
            <Grid item xs={12}>
              <div className={classes.formContainer}>
                <div className={classes.cardContent}>
                  <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                    mb={4}
                  >
                    <div className="d-flex">
                      <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        Welcome
                      </Typography>
                      &nbsp;
                      <Typography
                        color="primary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        back
                      </Typography>
                    </div>
                  </Box>
                  <Box
                    mt={0}
                    className="d-flex justify-content-center flex-column"
                  >
                    <JWTLoginForm 
                      openLogin={props.openLogin}
                      openRegister={props.openRegister}
                    />
                  </Box>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
    );
  else
  return (
    <Page
      className={classes.root}
      title="Alunna"
    >
      <Grid container spacing={0}>
        
        <Grid item md={12} xs={12}>
          <Grid container justify="center" alignItems="center" className="d-flex h-100">
            <Grid item xs={12}>
              <div className={classes.formContainer}>
                <div className={cardContent}>
                  <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                    mb={4}
                  >
                    <div className="d-flex">
                      <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        Welcome
                      </Typography>
                      &nbsp;
                      <Typography
                        color="primary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        Back
                      </Typography>
                    </div>
                  </Box>
                  <Box
                    mt={0}
                    className="d-flex justify-content-center flex-column"
                  >
                    <JWTLoginForm 
                      openLogin={props.openLogin}
                      openRegister={props.openRegister}
                      viewDeviceType={props.viewDeviceType}
                    />
                  </Box>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

export default LoginView;
