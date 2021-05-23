import React from 'react'
import type { FC } from 'react';
import { Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',

    marginTop: 120,
    display: 'flex',
    // marginBottom: 240,
    marginBottom: 60,
  },
  textWrapper: {
    marginTop: 15,
  },
  title: {
    fontSize: 14,
    lineHeight: '17px',
    color: '#4B4FE4',
    fontWeight: 700,

  },
  largeTitle: {
    fontWeight: 'bold',
    fontSize: 46,
    lineHeight: '58px',
  },
  quoteWrapper: {
    position: 'relative',
    marginTop: 45,
    maxWidth: 561,
    display: 'flex',
    paddingLeft: "20px",
    borderLeft: "2px solid #4B4FE4"
  },
  quoteIcon: {
    position: 'absolute',
    top: -36,
  },
  quoteText: {
    fontSize: 17,
    lineHeight: '28px',
    fontWeight: 400,
    color: '#546681',
    marginBottom: 0
  },
  verticalLine: {
    marginRight: 20
  },
  leftLine: {
    width: '6px',
    height: '7px',
    position: 'absolute',
    left: '-4px',
    top: '-2px'
  },
  promiseImg: {
    // position: 'absolute',
    // left: 0,
    // top: -80,
  },
  oneSecond: {
    // maxWidth: '50vw'
    maxWidth: '50%'
  },
  margin50VW: {
    // marginLeft: '50%'
    marginLeft: "6%"
  },
  primaryFormTitle: {
    color: "#4B4FE4"
  },
  w100: {
    width: "100%"
  },
  maxWidthUnset: {
    maxWidth: "unset"
  },
  top0: {
    top: 0
  },
  paddingTop50: {
    paddingTop: "50px"
  },
}));

interface OwnProps {
  viewDeviceType?: number;
}

const Promise: FC<OwnProps> = ({viewDeviceType}) => {
  const classes = useStyles();

  if(viewDeviceType < 2)
  return (
    <div className="position-relative">
      <Container className={classes.root}>
        <img alt="curriculum" src="/static/home/promise.png" className={classes.promiseImg + ' ' + classes.oneSecond} />
        <Grid container className={classes.oneSecond + ' ' + classes.margin50VW}>
          <Grid item xs={12} md={12}>
            <div>
              <Typography className={classes.title}>OUR PROMISE</Typography>
            </div>
            <div className={classes.textWrapper}>
              <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>
                Tired of wishing that&nbsp;
                <span className={classes.primaryFormTitle}>you had peers?</span>
              </Typography>
            </div>
            <div className={classes.quoteWrapper}>
              {/* <img alt="learn more" src="/static/home/vertical_line.svg" className={classes.verticalLine} /> */}
              <div>
                <p className={classes.quoteText}>
                  It's tough to learn a technical concept, regardless of background. We experienced the same frustration from lack of accessibility to classes and the isolation from self-paced online programs.
                </p>
                <br />
                <p className={classes.quoteText}>
                  That's why we are providing you with the real practice here, all with the benefits of a real-world class.
                </p>
              </div>
              <img src="/static/home/ellipse.png" className={classes.leftLine} alt="img"></img>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    );
  else
  return (
    <div className="position-relative">
      <Container>
        <img alt="curriculum" src="/static/home/promise.png" className={clsx(classes.promiseImg, classes.w100, classes.paddingTop50, classes.top0, "position-relative")} />
        <Grid container className={classes.w100}>
          <Grid item xs={12} md={12}>
            <div>
              <Typography className={classes.title}>OUR PROMISE</Typography>
            </div>
            <div className={classes.textWrapper}>
              <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>
                To give you technical tools&nbsp;
                <span className={classes.primaryFormTitle}>to succeed in engineering</span>
              </Typography>
            </div>
            <div className={clsx(classes.quoteWrapper, classes.maxWidthUnset)}>
              {/* <img alt="learn more" src="/static/home/vertical_line.svg" className={classes.verticalLine} /> */}
              <div>
                <p className={classes.quoteText}>
                  It's tough to learn a technical concept, regardless of background. We experienced the same frustration from lack of accessibility to classes and the isolation from self-paced online programs.
                </p>
                <br />
                <p className={classes.quoteText}>
                  That's why we are providing you with the real practice here.
                </p>
              </div>
              <img src="/static/home/ellipse.png" className={classes.leftLine} alt="img"></img>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Promise;