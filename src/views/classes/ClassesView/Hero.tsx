import React from 'react';
import type { FC } from 'react';
// import clsx from 'clsx';
import {
  Box,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'theme';
import classNames from "classnames";

interface HeroProps {
  className?: string;
  viewDeviceType?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
      backgroundColor: '#fff',
      paddingTop: 90,
      height: '100vh'
  },
  technologyIcon: {
      height: 40,
      margin: 10
  },
  image: {
  },
  shape: {
      position: 'absolute',
      top: 0,
      left: 0,
      '& > img': {
      maxWidth: '90%',
      height: 'auto'
      }
  },
  cta: {
      width: 483,
  },
  subTitle: {
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '17px',
      textTransform: 'uppercase',
      // color: #4B4FE4;
      margin: '15px 0px'
  },
  title: {
      fontWeight: 700,
      fontSize: 55,
      lineHeight: '70px',
  },
  description: {
      color: '#546681',
      fontSize: 17,
      lineHeight: '28px',
  },
  inlineTextWithIconWrapper: {
      marginRight: 16,
  },
  inlineTextWithIcon: {
      marginLeft: 12,
      fontSize: 24,
      lineHeight: '29px',
      fontWeight: 600,
  },
  customCTAButton: {
      width: 170,
      height: 45,
      borderRadius: 50,
  },
  seeOurClassBtn: {
      marginLeft: 20,
      color: '#546681',
      background: '#fff'
  },
  heroImage: {
    width: "100%"
  },
  mobileClass: {
    height: "unset",
    marginBottom: 50,
    paddingTop: 0
  },
  disable100vh: {
    height: "unset",
    marginBottom: 100,
  }
}));

const Hero: FC<HeroProps> = ({ viewDeviceType, className, ...rest }) => {
  const classes = useStyles();
  const cta = classNames({
    [classes.cta]: viewDeviceType!==2
  });
  const rootClass = classNames({
    [classes.root]: true,
    [classes.mobileClass]: viewDeviceType === 2,
    [classes.disable100vh]: viewDeviceType > 0,
  });
  return (
    <div
      className={rootClass}
      {...rest}
    >
      {viewDeviceType === 2 ? (
        <img className={ classes.heroImage } src="/static/classes/hero.png" alt="hero img" />
      )
        : (<></>)
      }
      <Container maxWidth="lg">
        <div className={cta}>
          <Typography
              className={classes.subTitle}
              color="primary"
          >
              Classes
          </Typography>
          <Typography
              variant="h2"
              color="textPrimary"
              className={classes.title}
          >
              Reduce the feedback loops in learning
          </Typography>
          <Typography
              variant="h2"
              color="primary"
              className={classes.title}
          >
              technology
          </Typography>
          <Box mt={2}>
            {/* <Typography
                variant="body1"
                color="textSecondary"
                className={classes.description}
                gutterBottom={true}
            >
                Learning is simply a process of downloading information and applying it.
            </Typography> */}
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.description}
              component="p"
            >
              We focus on the necessities of certain subjects to give you the core,
              and allow the projects and lessons to expand the the
              adjacent topics that accelerate your ability.
            </Typography>
          </Box>
          {/* <Box mt={2} display="flex">
            <div className={clsx("d-flex align-items-center", classes.inlineTextWithIconWrapper)}>
                <img src="/static/classes/focus.svg" alt="focus" />
                <Typography variant="body2" className={classes.inlineTextWithIcon} color="primary">
                    Focused on amplification
                </Typography>
            </div>
          </Box> */}
          <Box mt={2}>
            <Typography
                variant="body1"
                color="textSecondary"
                className={classes.description}
                component="p"
            >
              Working with others grants you new insights-we aim
              to make your classmates part of your long-term network.
            </Typography>
          </Box>
        </div>
      </Container>
    </div>
  );
};


export default Hero;