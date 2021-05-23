import React from 'react'
import type { FC } from 'react';
import { Card, CardContent, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundColor: "transparent",

    marginTop: 120,
    display: 'flex',
    marginBottom: 240,
    position: 'relative',
  },
  textWrapper: {
    marginTop: 15,
  },
  titleWrapper: {
    paddingTop: 30,
  },
  title: {
    fontSize: 14,
    lineHeight: '17px',
    color: '#4B4FE4',
    fontWeight: 700,

  },
  card: {
    width: '100%',
    background: 'linear-gradient(0deg, #EDEDFF, #EDEDFF), linear-gradient(180deg, #3B5AAF 6.22%, #292167 100%), #FFFFFF',
    border: '1px solid #D6D8E7',
    boxShadow: '0px 0px 20px rgba(11, 14, 112, 0.15), 0px 0px 40px rgba(140, 143, 255, 0.1)',
  },
  largeTitle: {
    fontWeight: 'bold',
    fontSize: 46,
    lineHeight: '58px',
  },
  leaveEmailWrapper: {
    position: 'relative',
    marginTop: 15,
  },
  leaveEmailImg: {
    // position: 'absolute',
    // left: 0,
    // top: -80,
  },
  input: {
    width: 600,
    height: 45,
    borderRadius: 50,
    background: '#fff',
    border: '1px solid #D6D8E7',
    outline: 'none',
    color: '#546681',
    padding: '10px 25px',
    fontSize: 16,
    lineHeight: '26px',
    '&::placeholder': {
      color: '#A6A9C2'
    },
    '&:hover': {
      border: '2px solid #4B4FE4',
    },
    '&:focus': {
      border: '2px solid #4B4FE4',
    }
  },
  hitMeUp: {
    height: 45,
    width: 160,
    position: 'absolute',
    background: '#4B4FE4',
    color: '#fff',
    padding: '13px 12.5px',
    outline: 'none',
    borderRadius: '50px',
    borderColor: 'unset',
    border: 'none',
    fontSize: 16,
    lineHeight: '19px',
    fontWeight: 600,
    right: 0,
    cursor: 'pointer',
    boxShadow: '0px 4px 25px rgba(72, 77, 255, 0.4)',
  },
  primaryFormTitle: {
    color: "#4B4FE4"
  },
  marginTop350: {
    marginTop: 350
  },
  imageTop: {
    width: 380,
    position: "absolute",
    left: "calc(50% - 190px)",
    top: -150
  },
  paddingTop200: {
    paddingTop: 200
  },
  w100: {
    width: "100%"
  },
  hitMeUpMobile: {
    width: "100%",
    marginTop: 30,
    position: "relative"
  },
  paddingBottom100: {
    paddingBottom: 100
  }
}));
interface OwnProps {
  viewDeviceType?: number;
}

const LeaveEmail: FC<OwnProps> = ({viewDeviceType}) => {
  const classes = useStyles();

  if(viewDeviceType < 2)
  return (
    <div className="position-relative">
      <Container className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <img alt="leave email" src="/static/home/leave_email.png" className={classes.leaveEmailImg} />
              </Grid>
              <Grid item xs={12} md={7} className="d-flex align-items-center">
                <div>
                  <div className={classes.textWrapper}>
                    <div className="d-flex">
                      <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>Interested in</Typography>&nbsp;&nbsp;
                      <Typography variant="h2" color="primary" className={classes.largeTitle}>teaching?</Typography>
                    </div>
                  </div>
                  <div className={classes.titleWrapper}>
                    <Typography className={classes.title}>Leave your email and we'll reach out to you</Typography>
                  </div>
                  <div className={classes.leaveEmailWrapper}>
                    <input type="text" className={classes.input} placeholder="Enter your email" />
                    <button className={classes.hitMeUp}>Hit me up!</button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
    );
  else
  return (
    <div className="position-relative">
      <Container className={clsx(classes.root, classes.marginTop350) }>
        <Card className={clsx(classes.card, classes.paddingTop200, classes.paddingBottom100)}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <img alt="leave email" src="/static/home/leave_email.png" className={clsx(classes.leaveEmailImg, classes.imageTop)} />
              </Grid>
              <Grid item xs={12} md={7} className="align-items-center">
                <div>
                  <div className={classes.textWrapper}>
                    <div>
                      <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>Want to <span className={classes.primaryFormTitle}>teach?</span></Typography>
                    </div>
                  </div>
                  <div className={classes.titleWrapper}>
                    <Typography className={classes.title}>Leave your email and we'll reach out to you</Typography>
                  </div>
                  <div className={classes.leaveEmailWrapper}>
                    <input type="text" className={clsx(classes.input, classes.w100)} placeholder="Enter your email" />
                    <button className={clsx(classes.hitMeUp, classes.hitMeUpMobile)}>Hit me up!</button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
    );
};

export default LeaveEmail;