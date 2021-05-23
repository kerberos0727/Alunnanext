import React from 'react';
import { useSelector } from 'react-redux';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';

import * as CourseSelectors from 'selectors/course.selector';

import ClassCard from './ClassCard';
import { IStoreState } from 'reducers/root.reducer';
import Carousel from 'react-elastic-carousel'
import { const_courses } from '../../../components/Constant';

const useStyles = makeStyles(() => ({
  root: {
  },
  titleContainer: {
    margin: '15px 0px'
  },
  title: {
    fontSize: 46,
    fontWeight: 600,
    lineHeight: '58px',
  },
  subTitlte: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '17px',
    letterSpacing: '0.1em',
    marginBottom: 46
  },
  loadMore: {
    margin: '40px 0px'
  },
  customCTAButton: {
    width: 170,
    height: 45,
    borderRadius: 50,
  },
  seeOurProcessBtn: {
    color: '#546681',
    background: '#fff',
    textTransform: 'unset'
  },
  w98margin1: {
    width: "98%",
    margin: "0 1%",
  }
}));

// const ClassesData = [
//   {
//       imgSrc: '/static/classes/data-structure.png',
//       startDate: new Date(),
//       title: 'Data Structures & Algorithms',
//       description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
//       learningWeeks: 3,
//       availablePlaces: 10,
//   },
//   {
//       imgSrc: '/static/classes/data-structure.png',
//       startDate: new Date(),
//       title: 'Data Structures & Algorithms',
//       description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
//       learningWeeks: 3,
//       availablePlaces: 10,
//   },
//   {
//       imgSrc: '/static/classes/data-structure.png',
//       startDate: new Date(),
//       title: 'Data Structures & Algorithms',
//       description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
//       learningWeeks: 3,
//       availablePlaces: 10,
//   },
//   {
//       imgSrc: '/static/classes/data-structure.png',
//       startDate: new Date(),
//       title: 'Data Structures & Algorithms',
//       description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
//       learningWeeks: 3,
//       availablePlaces: 10,
//   },
//   {
//       imgSrc: '/static/classes/data-structure.png',
//       startDate: new Date(),
//       title: 'Data Structures & Algorithms',
//       description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
//       learningWeeks: 3,
//       availablePlaces: 10,
//   },
//   {
//       imgSrc: '/static/classes/data-structure.png',
//       startDate: new Date(),
//       title: 'Data Structures & Algorithms',
//       description: 'Learn data structures and algorithms in Python to prepare for interviews and deep-level engineering. Supplement your bootcamp experience with computer-science fundamentals.',
//       learningWeeks: 3,
//       availablePlaces: 10,
//   },
// ];

const selectCourses = CourseSelectors.createCoursesSelector();

const ClassesList = (props) => {
  const classes = useStyles();
  const courses = const_courses;

  if (props.viewDeviceType < 2)
    return (
      <Container className={classes.root}>
        <div>
          <Grid container={true} alignItems="flex-start" justify="space-between" spacing={8}>
            {courses.map((courseData, i) => (
              <Grid item={true} md={4} sm={12}>
                <ClassCard
                  key={i}
                  id={courseData.id.toString()}
                  imgSrc={courseData.cardImageUrl}
                  title={courseData.name}
                  description={courseData.description}
                  availablePlaces={10}
                  learningWeeks={3}
                  startDate={courseData.startDate}
                // id={courseData.id}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        {/* <Box className={classes.loadMore} display="flex" justifyContent="center">
        <Button variant="outlined" className={clsx(classes.customCTAButton, classes.seeOurProcessBtn)}>
          Load more
        </Button>
      </Box> */}
      </Container>
    );
  else
    return (
      <Container className={classes.root}>
        <div>
          <Carousel itemsToShow={1} isRTL={false} outerSpacing={20} showArrows={false}>
            {courses.map((courseData, i) => (
              <Grid item={true} md={4} sm={12} className={classes.w98margin1}>
                <ClassCard
                  key={i}
                  imgSrc={courseData.cardImageUrl}
                  title={courseData.name}
                  description={courseData.cardDescription}
                  availablePlaces={10}
                  learningWeeks={3}
                  // startDate={new Date()}
                  startDate={courseData.startDate}
                  id={courseData.id}
                />
              </Grid>
            ))}
          </Carousel>
        </div>
        {/* <Box className={classes.loadMore} display="flex" justifyContent="center">
        <Button variant="outlined" className={clsx(classes.customCTAButton, classes.seeOurProcessBtn)}>
          Load more
        </Button>
      </Box> */}
      </Container>
    );

};

export default ClassesList;
