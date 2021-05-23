import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeStyles,
  Theme,
  Button,
  Grid,
  Divider,
  Container,
  Typography,
  Box,
  Popper,
  Fade,
  Paper
} from '@material-ui/core';
import clsx from 'clsx';
import CustomTextLarge from 'components/CustomTextLarge';
import CustomText from 'components/CustomText';
import IconWithText from 'components/IconWithText';
import CustomTag from 'components/CustomTag';
import CustomOutlineButton from 'components/CustomOutlineButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TopBar from 'layouts/MainLayout/TopBar';
// import * as _ from 'lodash';
import CustomMainButton from 'components/CustomMainButton';
import OverView from './OverView';
import Syllabus from './Syllabus';
import Teachers from './Teachers';
// import Feedback from './Feedback';
import FAQ from './FAQ';
import Footer from 'layouts/FooterLayout';
import { useRouteMatch } from 'react-router';
import * as CourseActions from 'actions/courses.action';
import * as RequestingSelectors from 'selectors/requesting.selector';
import * as ErrorSelectors from 'selectors/error.selector';
import * as PaymentActions from 'actions/payment.action';
import { IStoreState } from 'reducers/root.reducer';
import LoadingScreen from 'components/LoadingScreen';
import classNames from "classnames";
import * as _ from 'lodash';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    // height: '10000rem'
  },
  stickyRoot: {
    position: 'absolute',
    borderRadius: '16px',
    background: '#fff',
    boxShadow: '0 0 5px 4px #e6e6e6',
    maxWidth: 500,
    // right: 16,
    zIndex: 0,
    margin: 'auto',
  },
  centerGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  absoluteImage: {
    position: "absolute",
    width: "100vw",
    bottom: -162,
    left: "calc(640px - 24px - 50vw)",
    zIndex: -1
  },
  iconRoot: {
    fontSize: '14px',
    // lineHeight: '17px',
    // paddingTop: '16px',
    // paddingBottom: '16px',
    paddingTop: 5,
    paddingBottom: 5,
  },
  paddingGrid: {
    marginLeft: '35px',
    marginRight: '35px',
  },
  centerGridFirst: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    marginTop: '32px',
    marginBottom: '20px',
  },
  tag: {
    margin: 8,
    display: 'inline-block'
  },
  footerGroup: {
    marginTop: '20px',
    marginBottom: '45px',
    display: 'flex',
    alignItems: 'center',
  },
  customButton: {
    // color: '#4B4FE4',
    // borderColor: '#4B4FE4',
    color: "#546681",
    minWidth: 200,
    border: "1px solid #546681",
    padding: "13px 12.5px",
    fontWeight: 600,
    borderRadius: 50,
    textTransform: "unset",
    "&:hover": {
      color: "#fff",
      background: "#373BCE",
    }
  },
  stickyBackground: {
    backgroundImage: `url('/static/images/courses/python-courses.png')`,
    backgroundPosition: 'center',
    height: '200px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
  iconWithText: {
    color: '#4B4FE4',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '17px',
  },
  iconWithStudent: {
    color: '#546681',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '17px',
  },
  container: {
    position: 'relative',
    // zIndex: 2000,
    marginTop: '64px',
    minHeight: '100vh',
  },
  classImageBackground: {
    width: '100%',
  },
  titleContainer: {
    marginTop: '8px',
    width: '53%',
    paddingRight: '3%',
    position: "relative"
  },
  containerWidth: {
    width: '100%',
  },
  starWrapper: {
    display: 'flex',
    marginTop: '10px',
    marginBottom: '10px',
  },
  star: {
    display: 'flex',
    marginRight: '38px',
  },
  buttonContainer: {
    marginTop: '22px',
    display: 'flex',
  },
  loading: {
    marginTop: '162px',
    width: '100%',
    border: '0.1px solid #DADCEC',
    background: '#DADCEC',
  },
  loadingProcess: {
    height: '1.5px',
    border: '0.5px solid #4B4FE4',
    background: '#4B4FE4',
  },
  menuNav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '53%',
    marginTop: '28px',
  },
  cursorPointer: {
    cursor: "pointer"
  },
  zIndex0: {
    zIndex: 0
  },
  marginTop100: {
    marginTop: 100
  },
  courseTitle: {
    fontSize: 55,
    lineHeight: 70
  },
  courseTitleMobile: {
    fontSize: 35,
    lineHeight: 50
  },
  displayBlock: {
    display: "block"
  },
  starGap: {
    marginLeft: 20
  },
  paddingBottom10: {
    paddingBottom: 10
  },
  buttonContainerMobile: {
    display: "block"
  },
  buttonMobile: {
    width: "100%",
    marginBottom: 20
  },
  marginLeft30: {
    marginLeft: 30
  },
  marginLeft0: {
    marginLeft: 0
  },
  buttonRadius: {
    borderRadius: 999
  },
  marginTop0: {
    marginTop: 0
  },
  displayNone: {
    display: "none"
  },
  padding3rem: {
    padding: "0.5rem 3rem"
  },
  papper: {
    padding: 16,
    marginTop: 16,
    minWidth: 200,
    textAlign: "center",
  },
}));

const CoursePage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const routeMatch = useRouteMatch();

  const [classesAnchorEl, setClassesAnchorEl] = React.useState(null);
  const [position, setPosition] = useState<'absolute' | 'fixed' | 'sticky'>(
    'absolute'
  );
  const [top, setTop] = useState(213);
  const [right, setRight] = useState("-20px");
  const handleScroll = event => {
    const { scrollTop, scrollHeight } = event.target;
    if (scrollTop >= 255) {
      setPosition('fixed');
      setTop(10);
      setRight("calc(50vw - 660px)");
      if (scrollTop >= scrollHeight - 1350) {
        setTop(scrollHeight - 1350 - scrollTop);
      }
    } else {
      setPosition('absolute');
      setTop(265);
      setRight("-20px");
    }
  };

  React.useEffect(() => {
    document.addEventListener('scroll', _.throttle(handleScroll, 25), true);
  }, []);


  const [modal, setModal] = React.useState(0);
  const [viewStep, setViewStep] = React.useState(0);

  const courseDetail = useSelector(
    (state: IStoreState) => state.courses.course
  );
  const isRequesting = useSelector((state: IStoreState) =>
    RequestingSelectors.selectRequesting(
      state,
      CourseActions.REQUEST_COURSE_DETAIL
    )
  );
  const courseError = useSelector((state: IStoreState) =>
    ErrorSelectors.selectError(state, CourseActions.REQUEST_COURSE_DETAIL)
  );


  React.useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth > 1280) setViewStep(0);
      // web view
      else if (window.innerWidth < 800) setViewStep(2);
      // mobile view
      else setViewStep(1); // tablet view
      return true;
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  React.useEffect(() => {
    const courseId = (routeMatch.params as any).courseId;
    dispatch(CourseActions.requestCourse(courseId));
  }, [routeMatch, dispatch]);

  const handleCheckout = async (event) => {
    const stripe = await stripePromise;
    const session = await dispatch(
      PaymentActions.checkoutPayment(courseDetail.id.toString())
    );

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: (session as any).checkout_session_id,
    });

    if (result.error) {
      console.log('error to get checkout', result.error);
    }
  };

  const handleCloseClassAnchor = () => {
    setClassesAnchorEl(null);
  };

  // const openRegisterModal = () => {
  //   console.log('ee')
  //   setModal(2);
  // };

  const updateModal = (value) => {
    // if(value !== 0)
    setModal(value);
  };

  const container = classNames({
    [classes.container]: true,
    [classes.zIndex0]: modal > 0 || viewStep === 2,
    [classes.marginTop100]: viewStep === 2,
  });
  
  const titleContainer = classNames({
    [classes.titleContainer]: true,
    [classes.containerWidth]: viewStep === 2,
  });
  const courseTitle = classNames({
    [classes.courseTitle]: viewStep !== 2,
    [classes.courseTitleMobile]: viewStep === 2,
  });
  const starWrapper = classNames({
    [classes.starWrapper]: true,
    [classes.displayBlock]: viewStep === 2,
  });
  const star = classNames({
    [classes.star]: true,
    [classes.paddingBottom10]: viewStep === 2,
  });
  const starGap = classNames({
    [classes.starGap]: viewStep === 2,
  });
  const buttonContainer = classNames({
    [classes.buttonContainer]: true,
    [classes.buttonContainerMobile]: viewStep === 2,
  }); 
  const mobileButtonWrapper = classNames({
    [classes.marginLeft30]: true,
    [classes.marginLeft0]: viewStep === 2,
  }); 
  const buttonMobile = classNames({
    [classes.buttonRadius]: true,
    [classes.buttonMobile]: viewStep === 2,
  });
  const loading = classNames({
    [classes.loading]: true,
    [classes.displayNone]: viewStep === 2,
  }); 
  const menuNav = classNames({
    [classes.menuNav]: true,
    [classes.displayNone]: viewStep === 2,
  });

  return (
    <div className={clsx(classes.root, 'root-font')}>
      <TopBar
        // inlineImageUrl="/static/images/courses/img-1.png"
        imageAlt="alunna"
        classImageBackground={classes.classImageBackground}
        modalValue={modal}
        updateModalValue={(value) => updateModal(value)}
        viewDeviceType={viewStep}
      />
      {isRequesting && <LoadingScreen />}
      {courseError && (
        <Typography variant="h6" color="error" align="center">
          {courseError.message}
        </Typography>
      )}
      {courseDetail && (
        <>
          <Container className={container}>
            {viewStep === 0 ? (
              
              <div className={classes.stickyRoot} style={{ position, top, right }}>
                <div
                  className={classes.stickyBackground}
                  style={{ backgroundImage: `url(${courseDetail.cardImageUrl})` }}
                />
                <div className={classes.paddingGrid}>
                  <Grid container alignItems="center">
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGridFirst}
                    >
                      <CustomTextLarge
                        style={{ fontWeight: 'normal', color: '#4B4FE4' }}
                      >
                        $
                        {/* {courseDetail.price.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })} */}
                        {courseDetail.price}
                      </CustomTextLarge>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGridFirst}
                    >
                      <CustomText fontSize="16px" lineHeight="19.36px">
                        Next cohort starts
                      </CustomText>
                      <CustomText
                        fontSize="14px"
                        lineHeight="17px"
                        fontWeight="bold"
                      >
                        in 3 weeks!
                      </CustomText>
                    </Grid>
                    <Grid item md={12}>
                      <Divider variant="fullWidth" />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <IconWithText
                        CIcon="/static/images/courses/calendar_edit.png"
                        text="Duration"
                        style={{ color: '#546681', marginTop: '2px' }}
                        className={classes.iconRoot}
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <CustomText fontSize="16px" lineHeight="19px" color="#546681">
                        4 weeks
                      </CustomText>
                    </Grid>
                    <Grid item md={12}>
                      <Divider variant="fullWidth" />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <IconWithText
                        CIcon="/static/images/courses/calendar.png"
                        text="Schedule"
                        style={{ color: '#546681', marginTop: '2px' }}
                        className={classes.iconRoot}
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <CustomText fontSize="16px" lineHeight="19px" color="#546681">
                        4 days/week
                      </CustomText>
                    </Grid>
                    <Grid item md={12}>
                      <Divider variant="fullWidth" />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <IconWithText
                        CIcon="/static/images/courses/bar_chart.png"
                        text="Difficulty"
                        style={{ color: '#546681', marginTop: '2px' }}
                        className={classes.iconRoot}
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <CustomText fontSize="16px" lineHeight="19px" color="#546681">
                        {courseDetail.difficulty}
                      </CustomText>
                    </Grid>
                    <Grid item md={12}>
                      <Divider variant="fullWidth" />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <IconWithText
                        CIcon="/static/images/courses/comment.png"
                        text="Language"
                        style={{ color: '#546681', marginTop: '2px' }}
                        className={classes.iconRoot}
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <CustomText fontSize="16px" lineHeight="19px" color="#546681">
                        {courseDetail.language}
                      </CustomText>
                    </Grid>
                    <Grid item md={12}>
                      <Divider variant="fullWidth" />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <IconWithText
                        CIcon="/static/images/courses/link.png"
                        text="Access"
                        style={{ color: '#546681', marginTop: '2px' }}
                        className={classes.iconRoot}
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <CustomText fontSize="16px" lineHeight="19px" color="#546681">
                        Lifetime
                      </CustomText>
                    </Grid>
                    <Grid item md={12}>
                      <Divider variant="fullWidth" />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                      lg={6}
                      sm={6}
                      className={classes.centerGrid}
                    >
                      <IconWithText
                        CIcon="/static/images/courses/Color.png"
                        text="Topics"
                        style={{ color: '#546681', marginTop: '2px' }}
                        className={classes.iconRoot}
                      />
                    </Grid>
                    {courseDetail.topics && courseDetail.topics.length > 0 && (
                      <>
                        <Grid
                          item
                          md={6}
                          xs={12}
                          lg={6}
                          sm={6}
                          className={classes.centerGrid}
                        >
                          <CustomTag>{courseDetail.topics[0].name}</CustomTag>
                        </Grid>
                        <Grid item md={12} className={classes.centerGrid}>
                          <Box width="100%">
                            {courseDetail.topics.slice(1).map((topic, topicIndex) => (
                                <div className={classes.tag} key={topicIndex}>
                                  <CustomTag>{topic.name}</CustomTag>
                                </div>
                            ))}
                          </Box>
                        </Grid>
                      </>
                    )}
                    <Grid item md={12} className={classes.centerGrid}>
                      <div className={classes.footerGroup}>
                        <Button
                          className={classes.customButton}
                          onMouseEnter={(e) => setClassesAnchorEl(e.target)}
                          onMouseLeave={handleCloseClassAnchor}
                          onClick={handleCheckout}
                        >
                          Start now   
                        </Button>
                        <Popper
                          anchorEl={classesAnchorEl}
                          open={classesAnchorEl}
                          placement="bottom"
                          disablePortal={true}
                        >
                          <Fade in={classesAnchorEl} timeout={350}>
                            <Paper className={classes.papper}>
                              {courseDetail.startDate}
                            </Paper>
                          </Fade>
                        </Popper>
                        <FavoriteBorderIcon
                          style={{ marginLeft: '17px', color: '#546681' }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>

            )
              :
              (
                <></>
            )}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconWithText
                CIcon={'/static/images/clock.svg'}
                text={'Start date:'}
                className={classes.iconWithText}
              />
              <CustomText
                color="#546681"
                fontSize="14px"
                lineHeight="17px"
                styles={{ marginLeft: '1%' }}
              >
                {courseDetail.startDate}
              </CustomText>
            </div>
            <div className={titleContainer}>
              {viewStep === 0 && (<img
                  alt="courseImage"
                  src="/static/images/courses/img-1.png"
                  className={classes.absoluteImage}
                />
              )}
              <CustomTextLarge className={courseTitle}>
                {courseDetail.name}
              </CustomTextLarge>
              <div className={starWrapper}>
                <div className={star}>
                  <CustomText
                    color="#546681"
                    fontSize="14px"
                    lineHeight="17px"
                    fontWeight="bold"
                  >
                    4.8
                  </CustomText>
                  <img src="/static/images/courses/star.png" alt="star" className={starGap} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <IconWithText
                    CIcon={'/static/images/courses/people.png'}
                    text={'Students:'}
                    className={classes.iconWithStudent}
                  />
                  <CustomText
                    color="#546681"
                    fontSize="14px"
                    lineHeight="17px"
                    fontWeight="bold"
                    styles={{ marginLeft: '1%' }}
                  >
                    450
                  </CustomText>
                </div>
              </div>
              <CustomText color="#546681">
                {courseDetail.description}
              </CustomText>
              {viewStep > 0 ? (
                <Grid container alignItems="center">
                  <Grid
                    item
                    md={6}
                    lg={6}
                    sm={6}
                    className={classes.centerGridFirst}
                  >
                    <CustomTextLarge
                      style={{ color: '#4B4FE4', fontWeight: 600 }}
                    >
                      $
                      {/* {courseDetail.price.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })} */}
                      {courseDetail.price}
                    </CustomTextLarge>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    lg={6}
                    sm={6}
                    className={classes.centerGridFirst}
                    style={{marginLeft: 20}}
                  >
                    <CustomText fontSize="16px" lineHeight="19.36px">
                      Next cohort starts
                    </CustomText>
                    <CustomText
                      fontSize="14px"
                      lineHeight="17px"
                      fontWeight="bold"
                    >
                      in 3 weeks!
                    </CustomText>
                  </Grid>
                </Grid>
              ) : ("")}

              <div className={buttonContainer}>
                <CustomMainButton
                  onClick={() => setModal(2)}
                  label="Enroll now"
                  customClass={buttonMobile + " " + classes.padding3rem}
                  // onClick={handleCheckout}
                />
                <div className={mobileButtonWrapper}>
                  {viewStep === 2 ? (<CustomMainButton
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                      label="Share -->"
                      className={buttonMobile}
                      style={{backgroundColor: "transparent", color: "rgb(84, 102, 129)"}}
                    />
                    )
                    :
                    (
                      <CustomOutlineButton
                        label="Share -->"
                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                        className={buttonMobile}
                      />
                    )
                  }
                  
                  
                </div>
              </div>
            </div>
            <div>
              <div className={loading}>
                <div
                  className={classes.loadingProcess}
                  style={{ width: '78px' }}
                />
              </div>
              <div className={menuNav}>
                <a className={classes.cursorPointer} href="#overview">
                  <CustomText color="#4B4FE4" fontWeight="600">
                    Overview
                  </CustomText>
                </a>
                <a className={classes.cursorPointer} href="#syllabus">
                  <CustomText color="#546681" fontWeight="600">
                    Syllabus
                  </CustomText>
                </a>
                <a className={classes.cursorPointer} href="#teachers">
                  <CustomText color="#546681" fontWeight="600">
                    Teacher
                  </CustomText>
                </a>
                {/* <a className={classes.cursorPointer} href="#feedback">
                  <CustomText color="#546681" fontWeight="600">
                    Students’ feedback
                  </CustomText>
                </a>a */}
                <a className={classes.cursorPointer} href="#faq">
                  <CustomText color="#546681" fontWeight="600">
                    FAQ
                  </CustomText>
                </a>
              </div>
              <OverView viewDeviceType={viewStep}/>
            </div>
            <Syllabus viewDeviceType={viewStep}/>
            <Teachers viewDeviceType={viewStep}/>
            {/* <Feedback viewDeviceType={viewStep}/> */}
            <FAQ viewDeviceType={viewStep}/>
          </Container>
        </>
      )}
      <Footer viewDeviceType={viewStep} />
    </div>
  );
};
export default CoursePage;
