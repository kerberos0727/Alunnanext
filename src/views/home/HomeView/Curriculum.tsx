import React from 'react'
import type { FC } from 'react';
import { Container, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',

    marginTop: 120,
    display: 'flex',
    // maxWidth: '561px'
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
  },
  quoteIcon: {
    position: 'absolute',
    top: -36,

  },
  quoteText: {
    fontSize: 17,
    lineHeight: '28px',
    fontWeight: 400,
    color: '#546681'
  },
  horizontalLine: {
    marginTop: 28
  },
  curriculumImg: {
    // position: 'absolute',
    // right: 0,
    // top: -80,
  },
  oneSecond: {
    // maxWidth: '50vw'
    maxWidth: '50%'
  },
  paddingTop50: {
    paddingTop: "50px"
  },
  w100: {
    width: "100%"
  },
  maxWidthUnset: {
    maxWidth: "unset"
  },
  primaryFormTitle: {
    color: "#4B4FE4"
  },
  top0: {
    top: 0
  }
}));

interface OwnProps {
  viewDeviceType?: number;
}
const Curriculum: FC<OwnProps> = ({viewDeviceType}) => {
  const classes = useStyles();

  if(viewDeviceType < 2)
  return (
    <div className="position-relative">
      <Container className={classes.root}>
        <div className={classes.oneSecond}>
          <div>
            <Typography className={classes.title}>OUR CURRICULUM</Typography>
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>
              Take live classes that <br/><span className={classes.primaryFormTitle}>you only have access to</span><br/> in a university
            </Typography>
          </div>
          <div className={classes.quoteWrapper}>
            {/* <img alt="learn more" src="/static/home/quote.svg" className={classes.quoteIcon} /> */}
            <p className={classes.quoteText}>
              Stop worrying about how much time it's going to take to learn a new, technical concept.
            </p>
            <br />
            <p className={classes.quoteText}>
              We work with industry experts to create curriculums and projects that you will build and can discuss with future employers.
            </p>
          </div>
          <img alt="learn more" src="/static/home/horizontal_line.svg" className={classes.horizontalLine} />
        </div>
        <img alt="curriculum" src="/static/home/curriculum.png" className={classes.curriculumImg + ' ' + classes.oneSecond } />
      </Container>
    </div>
    );
  else
  return (
    <div className={clsx("position-relative", classes.paddingTop50, classes.w100)} >
      <img alt="curriculum" src="/static/home/curriculum.png" className={clsx(classes.curriculumImg, "position-relative", classes.w100, classes.top0) } />
      <Container className={classes.root}>
        <div className={classes.w100}>
          <div>
            <Typography className={classes.title}>OUR CURRICULUM</Typography>
          </div>
          <div className={classes.textWrapper}>
            <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>
              Take live classes that <span className={classes.primaryFormTitle}>you only have access to</span> in a university
            </Typography>
          </div>
          <div className={clsx(classes.quoteWrapper, classes.maxWidthUnset)}>
            <p className={classes.quoteText}>
              Stop worrying about how much time it's going to take to learn a new, technical concept.
            </p>
            <br />
            <p className={classes.quoteText}>
              We work with industry experts to create curriculums and projects that you will build and can discuss with future employers.
            </p>
          </div>
          <img alt="learn more" src="/static/home/horizontal_line.svg" className={clsx(classes.horizontalLine, classes.w100)} />
        </div>
        
      </Container>
    </div>
  );
};

export default Curriculum;