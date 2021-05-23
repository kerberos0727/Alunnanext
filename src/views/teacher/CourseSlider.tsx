import React from 'react';
import CourseCard from '../home/HomeView/Courses/CourseCard';
import {
  makeStyles,
  Container,
  Typography,
} from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import classNames from "classnames";
// import autoPlay from 'react-swipeable-views-utils/lib/autoPlay';
// import SwipeableViews from 'react-swipeable-views';

interface OwnProps {}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
  root: {

  },
  container: {
    width: '100%',
    height: 1408,
  },
  media: {
    width: 600,
    zIndex: 0
  },
  mediaWrapper: {
    position: 'absolute',
    top: -24,
    left: -86,
    zIndex: 0,
    width: 600
  },
  title: {
    fontWeight: 700,
    fontSize: 46,
    lineHeight: '58px',
    marginBottom: 40
  },
  noHeight: {
    height: "unset"
  }
}));
interface OwnProps {
  viewDeviceType?: number;
}

// const sliderStyles = {
//   sliderRoot: {
//     position: 'absolute',
//     width: '100vw',
//     left: 0,
//     minWidth: 900,
//     marginTop: 48,
//     paddingBottom: 120,
//   },
//   slideContainer: {
//     width: 'max-content',
//     marginRight: 42,
//     boxShadow: '0px 4px 25px rgba(11, 14, 112, 0.15)',
//     border: '1px solid rgba(11, 14, 112, 0.15)',
//     borderRadius: 15,
//   },
//   slide: {
//     padding: 15
//   }
// };

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CourseSlide: React.FC<OwnProps> = ({viewDeviceType}) => {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };

  const [countPerPage, setCountPerPage] = React.useState(null);
  const [showArrow, setShowArrow] = React.useState(true);

  React.useEffect(() => {
    if (viewDeviceType === 0) { setCountPerPage(3); setShowArrow(true);}
    else if(viewDeviceType === 1) { setCountPerPage(2); setShowArrow(true);}
    else if(viewDeviceType === 2)  { setCountPerPage(1); setShowArrow(false);}
  }, [viewDeviceType]);

  const container = classNames({
    [classes.container]: true,
    [classes.noHeight]: viewDeviceType===2,
  });
  return (
    <div className={classes.root}>
      <div className={classes.mediaWrapper}>
        <img alt="test" className={classes.media} src="/static/teacher_cloud.png" />
      </div>
      <Container className={container}>
        <div className="d-flex align-items-center">
          <Typography className={classes.title} variant="h2" color="textPrimary">
            My classes:&nbsp;
          </Typography>
          {/* <Typography className={classes.title} variant="h2" color="primary">
            you:
          </Typography> */}
        </div>
        <div className="position-relative">
        <Carousel itemsToShow={countPerPage} isRTL={false} outerSpacing={20} showArrows={showArrow}>
          {[].map((step, index) => (
            <CourseCard key={step.name + String(index)} {...step} />
          ))}
        </Carousel>
          {/* <AutoPlaySwipeableViews
            style={sliderStyles.sliderRoot}
            slideStyle={sliderStyles.slideContainer}
            autoplay={false}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
          </AutoPlaySwipeableViews> */}
        </div>
      </Container>
    </div>
  );
};

export default CourseSlide;
