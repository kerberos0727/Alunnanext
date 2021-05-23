import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'theme';
import autoPlay from 'react-swipeable-views-utils/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';

interface FeaturesProps {
  className?: string;
  viewDeviceType?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: '#fff',
    color: '#000'
  },
  marginRight30: {
    "& div": {
      marginRight: 30
    }
  },
  padding80: {
    padding: "80px 0"
  },
  description: {
    marginBottom: 10
  },
  paddingBottom0: {
    paddingBottom: 0
  }
}));

const sliderStyles = {
  sliderRoot: {
    // position: 'absolute',
    width: '100vw',
    left: 0,
    // minWidth: 900,
    marginTop: 60,
    marginLeft: 30,
    paddingBottom: 120,
  },
  slideContainer: {
    width: 'max-content',
    marginRight: 42,
    // boxShadow: '0px 4px 25px rgba(11, 14, 112, 0.15)',
    // border: '1px solid rgba(11, 14, 112, 0.15)',
    // borderRadius: 15,
  },
  slide: {
    // padding: 15
  }
};
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Features: FC<FeaturesProps> = ({ viewDeviceType, className, ...rest }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if(viewDeviceType < 2)
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.description}
        >
          With students and teachers from:
        </Typography>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img alt="01" src="/static/home/01.svg" />
          </div>
          <div>
            <img alt="02" src="/static/home/02.svg" />
          </div>
          <div>
            <img alt="03" src="/static/home/03.svg" />
          </div>
          <div>
            <img alt="04" src="/static/home/04.svg" />
          </div>
          <div>
            <img alt="05" src="/static/home/05.svg" />
          </div>
          <div>
            <img alt="06" src="/static/home/06.svg" />
          </div>
        </div>
      </Container>
    </div>
    );
  else
  return (
    <div
      className={clsx(classes.root, className, classes.paddingBottom0)}
      {...rest}
    >
      <Container maxWidth="lg">
        <div className={clsx("d-flex justify-content-between align-items-center", classes.marginRight30)}>
          <AutoPlaySwipeableViews
            style={sliderStyles.sliderRoot}
            slideStyle={sliderStyles.slideContainer}
            autoplay={false}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            <div>
              <img alt="01" src="/static/home/01.svg" />
            </div>
            <div>
              <img alt="02" src="/static/home/02.svg" />
            </div>
            <div>
              <img alt="03" src="/static/home/03.svg" />
            </div>
            <div>
              <img alt="04" src="/static/home/04.svg" />
            </div>
            <div>
              <img alt="05" src="/static/home/05.svg" />
            </div>
            <div>
              <img alt="06" src="/static/home/06.svg" />
            </div>
          </AutoPlaySwipeableViews>
          
        </div>
      </Container>
    </div>
  );
};

Features.propTypes = {
  className: PropTypes.string
};

export default Features;
