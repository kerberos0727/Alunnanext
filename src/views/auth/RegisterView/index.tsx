import React from 'react';
import type { FC } from 'react';
import {
  Box,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core';
import type { Theme } from 'theme';
import Page from 'components/Page';
import JWTRegister from './JWTRegister';
import classNames from "classnames";
interface JWTIndexProps {
  openRegister?: any;
  openLogin?: any;
  viewDeviceType?: number;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
  },
  formTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    lineHeight: '39px',
  },
  banner: {
    height: 'calc(100vh - 80px)'
  },
  cardContent: {
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
    alignItems: 'center',
  },
  formContainer: {

  },
  formFooter: {
    width: '75%',
  },
  noPadding: {
    padding: "60px 0"
  }
}));

const RegisterView: FC<JWTIndexProps> = ({viewDeviceType, openLogin}) => {
  const classes = useStyles();

  const clickedLogin = () => {
    openLogin();
  };
  
  const cardContent = classNames({
    [classes.cardContent]: true,
    [classes.noPadding]: viewDeviceType===2,
    
  });
  if(viewDeviceType < 2)
  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Grid container spacing={0}>
        <Grid item md={6} xs={6}>
          <img src="/static/images/register.png" alt="alunna" className={classes.banner} />
        </Grid>
        <Grid item md={6} xs={6}>
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
                        Create
                      </Typography>
                      &nbsp;
                      <Typography
                        color="primary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        Account
                      </Typography>
                    </div>
                  </Box>
                  <Box
                    flexGrow={0}
                    mt={0}
                  >
                    <JWTRegister onClickedLoginProps={clickedLogin} />
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
      title="Register"
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
                        Create
                      </Typography>
                      &nbsp;
                      <Typography
                        color="primary"
                        gutterBottom
                        variant="h2"
                        className={classes.formTitle}
                      >
                        Account
                      </Typography>
                    </div>
                  </Box>
                  <Box
                    flexGrow={0}
                    mt={0}
                  >
                    <JWTRegister onClickedLoginProps={clickedLogin} viewDeviceType={viewDeviceType} />
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

export default RegisterView;
