import React, { useEffect } from 'react';
import type { FC } from 'react';
// import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Typography,
  makeStyles,
  Container,
  Grid,
  Popper,
  Fade,
  Paper
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Logo from 'components/Logo';
import CustomMainButton from 'components/CustomMainButton';
// import { Row, Col } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import RegisterView from 'views/auth/RegisterView';
import LoginView from 'views/auth/LoginView';
import MobileHeader from './MobileHeader';
import { useSelector } from 'react-redux';
import * as CourseSelectors from 'selectors/course.selector';
import { IStoreState } from 'reducers/root.reducer';
import { ICourse } from 'models/course.model';
import { RouterPathName } from 'constants/routes.constant';
import classNames from "classnames";
import { const_courses } from '../../components/Constant';

interface TopBarProps {
  className?: string;
  inlineImageUrl?: string;
  imageAlt?: string;
  classImageBackground?: string;
  modalValue?: number;
  updateModalValue?: any;
  viewDeviceType?: number;
}



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'unset',
    position: 'relative',
    // zIndex: -1
  },
  appbar: {
    backgroundColor: '#fff',
    height: 100,
  },
  toolbar: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    zIndex: 2
  },
  container: {},
  logo: {
    marginRight: 2,
    cursor: 'pointer'
  },
  link: {
    fontWeight: 'normal',
    '& + &': {
      marginLeft: 2
    }
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: 2,
    marginRight: 2
  },
  menuWrapper: {
    marginLeft: 70,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  anchor: {
    // color: '#4B4FE4',
    color: '#546681',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '19px',
    textTransform: 'none',
    '&:hover': {
      background: '#fff',
    }
  },
  menu: {
    marginTop: 40,
    // padding: "20px",
    inset: 'unset !important',
    display: 'inline-block !important',
    '& > div[aria-hidden]': {
      // display: 'none'
    },
    '& .MuiMenu-paper': {
      border: '1px solid #DADCEC',
      boxShadow: '0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12)',
      borderRadius: '10px',
      top: '24px !important',
      left: '-200px !important',
      maxHeight: 'unset !important',
      maxWidth: 'unset !important',
      '& .MuiList-padding': {
        paddingTop: 0,
        paddingBottom: 0,
        '& .MuiMenuItem-root': {
          paddingTop: 12,
          paddingBottom: 12,
          '&:hover': {
            background: '#EEF0FF',
          }
        }
      }
    }
  },
  menuItem: {
    // margin: 8,
    padding: 8,
    transition: 'background-color 0.2s linear',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  },
  itemTitle: {
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    margin: 0,
    padding: 0,
    color: "rgb(23, 23, 23)",
  },
  itemDescription: {
    fontFamily: "Inter, sans-serif",
    color: "rgb(92, 92, 92)",
    margin: 0,
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 500,
    letterSpacing: "-0.02em",
  },
  menuRow: {
    padding: 24
  },
  papper: {
    padding: 16,
    marginTop: 24
  },
  menuItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,
    "&:hover": {
      color: '#4B4FE4',
      borderTop: '2px solid #4B4FE4',
    }
  },
  opening: {
    color: '#4B4FE4',
  },
  closing: {
    color: '#546681',
  },
  arrow: {
    marginLeft: -4,
    zIndex: 2,
    fontSize: 20,
  },
  phoneWrapper: {
    // marginLeft: 71,
  },
  phoneText: {
    color: '#546681',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '19px',
    marginLeft: 8,
  },
  signupBtn: {
    width: 110,
    height: 45,
    marginLeft: 41
  },
  absoluteImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    // width: "55vw",
    // height: "calc(100vh - 160px)",
    height: "85vh",
  },
  activeLink: {
    color: '#4B4FE4',
    borderTop: '2px solid #4B4FE4',
  },
  activeButton: {
    color: '#4B4FE4',
  },
  center: {},
  modal: {
    maxWidth: "1200px"
  },
  modalHeader: {
    position: 'absolute',
    right: 0
  },
  modalTitle: {},
  modalBody: {},
  modalFooter: {},
  modalFooterCenter: {},
  tabletBGImage: {
    height: "unset",
    width: "50vw"
  },
  noneHoverEffect: {
    "&:hover": {
      color: '#4B4FE4',
      borderTop: 'unset',
    }
  }

}));

const selectCourses = CourseSelectors.createCoursesSelector();

const TopBar: FC<TopBarProps> = (props) => {
  const classes = useStyles();
  const history = useRouter();
  // const location = useLocation();
  // const courses = useSelector((state: IStoreState) => selectCourses(state));
  const courses = const_courses;
  const authState = useSelector((state: IStoreState) => state.authentication);

  const { className, inlineImageUrl, imageAlt, ...rest } = props;

  console.log('courses--_>', const_courses)

  const [classesAnchorEl, setClassesAnchorEl] = React.useState(null);
  // const [teacherAnchorEl, setTeacherAnchorEl] = React.useState(null);
  const [modal, setModal] = React.useState(0);

  useEffect(() => {
    setModal(props.modalValue);
  }, [props.modalValue]);

  if (authState.isLoggedIn && modal) setModal(0);

  const handleClickClasses = (event) => {
    history.push('/classesView');
  };

  const handleSelecClass = (course: ICourse) => () => {
    setClassesAnchorEl(null);
    history.push(RouterPathName.Courses + '/' + course.id);
  };

  const handleCloseClassAnchor = () => {
    setClassesAnchorEl(null);
  };

  // const handleClickTeacher = (event) => {
  //   setTeacherAnchorEl(null);
  // };

  // const handleCloseTeacherAnchor = () => {
  //   setTeacherAnchorEl(null);
  // };

  // const handleViewTeacherProfile = () => {
  //   history.push('/teacher/Bradley-Woolf');
  // };

  const loginModalOpen = () => {
    setModal(1);
    props.updateModalValue(1);
  };

  const registerModalOpen = () => {
    setModal(2);
    props.updateModalValue(2);
  };

  const closeModal = () => {
    setModal(0);
    if (props.modalValue)
      props.updateModalValue();
  };

  const updateModal = () => {
    if (modal !== 0)
      setModal(0);
    if (props.modalValue)
      props.updateModalValue();
  };
  const absoluteImage = classNames({
    [classes.absoluteImage]: true,
    [classes.tabletBGImage]: props.viewDeviceType === 1,
  });

  if (props.viewDeviceType < 2)
    return (
      <AppBar
        className={clsx(className, classes.root)}
        color="default"
        position="static"
        {...rest}
      >
        {/* {courses.length ? ( */}
        <>
          <Container
            className={classes.container}
            maxWidth="lg"
          >
            <div className={classes.toolbar}>
              <Link href="/">
                <Logo className={classes.logo} />
              </Link>
              <div className={classes.menuWrapper}>
                <div className={clsx(classes.menuItemWrapper, history.pathname === '/' ? classes.activeLink : '')}>
                  <Button className={clsx(classes.anchor, history.pathname === '/' ? classes.activeButton : '')} onClick={() => history.push('/')}>
                    Home
                    </Button>
                </div>
                <div
                  className={clsx(classes.menuItemWrapper, history.pathname === '/classesView' ? classes.activeLink : '')}
                  onMouseLeave={handleCloseClassAnchor}
                >
                  <Button
                    onClick={handleClickClasses}
                    className={classes.anchor}
                    onMouseEnter={(e) => { setClassesAnchorEl(e.target); console.log(e.target) }}
                    endIcon={<KeyboardArrowDownIcon className={clsx(classes.arrow, classes.closing)} />}
                  >
                    Classes
                  </Button>
                  <Popper
                    anchorEl={classesAnchorEl}
                    open={classesAnchorEl}
                    placement="bottom"
                    disablePortal={true}
                  >
                    <Fade in={classesAnchorEl} timeout={350}>
                      <Paper className={classes.papper} elevation={6}>
                        <Grid container={true}>
                          <Grid item={true} md={6}>
                            {courses.slice(0, courses.length / 2 + courses.length % 2).map((course) => (
                              <div
                                onClick={handleSelecClass(course)}
                                className={classes.menuItem}
                              >
                                <Typography variant="subtitle1" component="p">
                                  {course.name}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                  {course.subDescription}
                                </Typography>
                              </div>
                            ))}
                          </Grid>
                          <Grid item={true} md={6}>
                            {courses.slice(courses.length / 2 + courses.length % 2).map((course) => (
                              <div
                                onClick={handleSelecClass(course)}
                                className={classes.menuItem}
                              >
                                <Typography variant="subtitle1" component="p">
                                  {course.name}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                  {course.subDescription}
                                </Typography>
                              </div>
                            ))}
                          </Grid>
                        </Grid>
                      </Paper>
                    </Fade>
                  </Popper>
                </div>
                <div className={clsx(classes.menuItemWrapper, history.pathname === '/howWork' ? classes.activeLink : '')}>
                  <Button className={clsx(classes.anchor, history.pathname === '/howWork' ? classes.activeButton : '')} onClick={() => history.push('/howWork')}>
                    How it works
                  </Button>
                </div>
                <div className={classes.menuItemWrapper}>
                  <a href="https://alunna-blog.webflow.io/">
                    <Button className={clsx(classes.anchor, history.pathname === '/blog' ? classes.activeButton : '')}>
                      Blog
                    </Button>
                  </a>
                </div>
                <div className={clsx(classes.menuItemWrapper, classes.phoneWrapper, classes.noneHoverEffect)}>
                  <img alt="Alunna phone" src="/static/images/phone.svg" />
                  <a href="tel:+1 818 808 9948">
                    <Typography className={classes.phoneText}>(+1) 818 808-9948</Typography>
                  </a>
                </div>
                {
                  authState.isLoggedIn ?
                    (
                      <>
                        <div className={clsx(classes.menuItemWrapper, classes.phoneWrapper, classes.noneHoverEffect)}>
                          You are logged as
                          </div>
                        <Link href="/profile">
                          <div>
                            {authState.pedingingSignUpEmail}
                          </div>
                        </Link>
                      </>
                    ) :
                    (
                      <div className={clsx(classes.menuItemWrapper, classes.noneHoverEffect)}>
                        <Button className={classes.anchor} onClick={() => loginModalOpen()}>
                          Login
                          </Button>
                        <CustomMainButton label="Signup" customClass={classes.signupBtn} onClick={() => registerModalOpen()} />
                      </div>
                    )
                }

              </div>
            </div>
          </Container>
          <div>
            {inlineImageUrl && (<img
              alt={imageAlt}
              src={inlineImageUrl}
              className={clsx(props.classImageBackground, absoluteImage)}
            />
            )}
          </div>
          <Dialog
            classes={{
              root: classes.center,
              paper: classes.modal
            }}
            open={modal > 0}
            keepMounted
            onClose={() => closeModal()}
            aria-labelledby="modal-slide-title"
            aria-describedby="modal-slide-description"
          >
            <Container
              className={classes.container}
              maxWidth="lg"
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
              >
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="primary"
                  onClick={() => closeModal()}

                >
                  <Close />
                </IconButton>
              </DialogTitle>
              {(modal === 2) ? (<RegisterView openLogin={loginModalOpen} viewDeviceType={props.viewDeviceType} />) : ((modal === 1) ? (<LoginView openRegister={registerModalOpen} viewDeviceType={props.viewDeviceType} />) : (<></>))}
            </Container>
          </Dialog>
        </>
        {/* ) : ("")} */}

      </AppBar >
    );
  else
    return (<MobileHeader modalValue={modal} updateModalValue={() => updateModal()} />);
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;