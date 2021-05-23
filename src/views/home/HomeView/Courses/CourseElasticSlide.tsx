import React from 'react';
import CourseCard from './CourseCard';
import {
  makeStyles,
  Container,
  Typography,
} from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import * as CourseSelectors from 'selectors/course.selector';
import { useSelector } from 'react-redux';
import { IStoreState } from 'reducers/root.reducer';
import { const_courses } from '../../../../components/Constant';

interface OwnProps {
  viewDeviceType?: number;
}

type Props = OwnProps;

const selectCourses = CourseSelectors.createCoursesSelector();

const CourseSlide = ({ viewDeviceType }) => {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const [countPerPage, setCountPerPage] = React.useState(null);
  const [showArrow, setShowArrow] = React.useState(true);

  const courses = const_courses;

  React.useEffect(() => {
    if (viewDeviceType === 0) { setCountPerPage(3); setShowArrow(true); }
    else if (viewDeviceType === 1) { setCountPerPage(2); setShowArrow(true); }
    else if (viewDeviceType === 2) { setCountPerPage(1); setShowArrow(false); }
  }, [viewDeviceType]);

  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };

  return (
    <Container className={classes.root} style={{ position: 'relative' }}>
      <div className={classes.mediaWrapper}>
        <img alt="test" className={classes.media} src="/static/cloud.png" />
      </div>
      <div style={{ zIndex: 100, position: 'relative' }}>
        <Typography className={classes.blackTitle} variant="h1">
          What do you want
        </Typography>
        <Typography className={classes.blueTitle} variant="h1">
          to learn?
        </Typography>
      </div>
      <div style={{ zIndex: 100, position: 'relative' }}>
        <Typography className={classes.subtitle}>
          View the available live courses:
        </Typography>
      </div>
      <Carousel itemsToShow={countPerPage} isRTL={false} outerSpacing={20} showArrows={showArrow}>
        {courses.map((courseData, index) => (
          <CourseCard
            key={index}
            id={courseData.id.toString()}
            imgSrc={courseData.cardImageUrl}
            title={courseData.name}
            description={courseData.description}
            availablePlaces={10}
            learningWeeks={4}
            startDate={courseData.startDate}
          />
        ))}
      </Carousel>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 900
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: 40,
    backgroundColor: '#fff'
  },
  blackTitle: {
    fontSize: 38,
    fontWeight: 'bold'
  },
  blueTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#4B4FE4'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B4FE4',
    textTransform: 'uppercase',
    marginBottom: 40,
    marginTop: 28
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
  }
}));

export default CourseSlide;
