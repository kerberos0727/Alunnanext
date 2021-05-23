import React from 'react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import type { Theme } from 'theme';
import CustomMainButton from 'components/CustomMainButton';
import classNames from "classnames";

interface HeroProps {
  className?: string;
  openRegister?: any;
  viewDeviceType?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "transparent",
    paddingTop: 90,
    height: 'calc(100vh - 190px)',

  },
  technologyIcon: {
    height: 40,
    margin: 1
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
    fontSize: 17,
    lineHeight: '28px',
    fontWeight: 600,
    color: '#0A1F44'
  },
  customCTAButton: {
    width: 170,
    height: 45,
    borderRadius: 50,
  },
  seeOurClassBtn: {
    marginLeft: 20,
    color: '#546681',
    background: '#fff',
    textTransform: 'unset'
  },
  itemsWithMargin: {
    marginTop: 20,
    marginBottom: 28,
    display: 'flex',
    flexWrap: 'wrap'
  },
  primaryFormTitle: {
    color: "#4B4FE4"
  },
  mobileHero: {
    backgroundImage: `url('/static/home/hero_mobile.png')`,
    backgroundSize: "contain",
    backgroundPosition: 'right top',
    backgroundRepeat: "no-repeat",
    paddingTop: "92vw"
  },
  w50: {
    width: "50%"
  },
  w100: {
    width: "100%"
  },
  margin20: {
    marginBottom: 20
  },
  tabletHero: {
    width: "45vw"
  },
  tabletHeroHeight: {
    height: "unset",
    paddingBottom: 50
  }
}));

const Hero: FC<HeroProps> = ({ viewDeviceType, openRegister, className, ...rest }) => {
  const classes = useStyles();
  const history = useRouter();

  const openSignup = () => {
    openRegister();
  };
  const cta = classNames({
    [classes.cta]: true,
    [classes.tabletHero]: viewDeviceType === 1,
  });
  const root = classNames({
    [classes.root]: true,
    [classes.tabletHeroHeight]: viewDeviceType === 1,
  });
  if (viewDeviceType < 2)
    return (
      <div
        className={clsx(root, className)}
        {...rest}
      >
        <Container maxWidth="lg">
          <div className={cta}>
            <Typography
              variant="h2"
              color="textPrimary"
              className={classes.title}
            >
              Live classes,<br /><span className={classes.primaryFormTitle}>taught online.</span>
            </Typography>

            <Box mt={2}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.description}
              >
                Real engineering with real learning. Get the accessibility of online classes with the environment of a live, in-person lab with peers.
            </Typography>
            </Box>
            {/* need to make margin-top: 20px */}
            <Box mt={2} display="flex" className={classes.itemsWithMargin}>
              <div className={clsx("d-flex align-item-centers", classes.inlineTextWithIconWrapper)}>
                <img alt="no transcripts" src="/static/home/no_transcript.svg" />
                <Typography variant="body2" className={classes.inlineTextWithIcon}>No transcripts</Typography>
              </div>
              <div className={clsx("d-flex align-item-centers", classes.inlineTextWithIconWrapper)}>
                <img alt="no transcripts" src="/static/home/no_cloud.svg" />
                <Typography variant="body2" className={classes.inlineTextWithIcon}>No admissions</Typography>
              </div>
              <div className="d-flex align-item-centers">
                <img alt="no transcripts" src="/static/home/no_isolation.svg" />
                <Typography variant="body2" className={classes.inlineTextWithIcon}>No isolation</Typography>
              </div>
            </Box>
            {/* need to make margin-top: 28px */}
            <Box mt={3}>
              <CustomMainButton label="Get started" customClass={classes.customCTAButton} onClick={() => openSignup()} />
              <Button onClick={() => history.push('/classesView')} variant="outlined" className={clsx(classes.customCTAButton, classes.seeOurClassBtn)}>See our classes</Button>
            </Box>
          </div>
        </Container>
      </div>
    );
  else
    return (
      <div
        className={clsx(className, classes.mobileHero)}
        {...rest}
      >
        <Container>
          <div>
            <Typography
              variant="h2"
              color="textPrimary"
              className={classes.title}
            >
              Live classes,<br /><span className={classes.primaryFormTitle}>taught online.</span>
            </Typography>

            <Box mt={2}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.description}
              >
                Real engineering with real learning. Get the accessibility of online classes with the environment of a live, in-person lab with peers.
            </Typography>
            </Box>
            {/* need to make margin-top: 20px */}
            <Box mt={2} className={classes.itemsWithMargin}>
              <div className={clsx("d-flex align-item-centers float-left", classes.w50, classes.margin20)}>
                <img alt="no transcripts" src="/static/home/no_transcript.svg" />
                <Typography variant="body2" className={classes.inlineTextWithIcon}>No transcripts</Typography>
              </div>
              <div className={clsx("d-flex align-item-centers float-left", classes.w50, classes.margin20)}>
                <img alt="no transcripts" src="/static/home/no_cloud.svg" />
                <Typography variant="body2" className={classes.inlineTextWithIcon}>No admissions</Typography>
              </div>
              <div className={clsx("d-flex align-item-centers", classes.w100, classes.margin20)}>
                <img alt="no transcripts" src="/static/home/no_isolation.svg" />
                <Typography variant="body2" className={classes.inlineTextWithIcon}>No isolation</Typography>
              </div>
            </Box>
            {/* need to make margin-top: 28px */}
            <Box mt={3}>
              <CustomMainButton label="Get started" customClass={clsx(classes.customCTAButton, classes.w100, classes.margin20)} onClick={() => openSignup()} />
              <Button onClick={() => history.push('/classesView')} variant="outlined" className={clsx(classes.customCTAButton, classes.w100)}>See our classes</Button>
            </Box>
          </div>
        </Container>
      </div>
    );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
