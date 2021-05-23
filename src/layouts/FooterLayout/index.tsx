import React from 'react';
import Link from 'next/link';
import { makeStyles, Theme, Grid, Container, Box } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextFooterNormal from './TextFooterNormal';
import TextFooterBold from './TextFooterBold';
import IconWithText from 'components/IconWithText';
import Logo from 'components/Logo';
import clsx from 'clsx';
import { RouterPathName } from 'constants/routes.constant';
import { useSelector } from 'react-redux';
import { IStoreState } from 'reducers/root.reducer';
import * as CourseSelectors from 'selectors/course.selector';
import { const_courses } from '../../components/Constant';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    // backgroundImage: `url('/static/images/footer.png')`,
    // height: 700,
    backgroundColor: "#334392",
    marginTop: 150,
    // height: 600,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  },

  footerContent: {
    // paddingTop: '24%'
    // paddingTop: 320,
    // maxWidth: 1440,
    paddingTop: 100,
    paddingBottom: 50
  },
  socialContainer: {
    display: 'flex',
    marginTop: '21px',
    justifyContent: 'space-between',
    paddingRight: '80%'
  },
  copyRight: {
    // marginTop: '45px',
    marginTop: '20px',
  },
  topBg: {
    width: '100%',
    zIndex: -1,
    position: 'absolute'
  },
  teamDesc: {
    marginTop: 27,
    // width: 470,
  },
  contactContainer: {
    marginTop: 30,
  },
  socialPadding: {
    padding: "20px 20%"
  }
}));

const selectCourses = CourseSelectors.createCoursesSelector();

const Footer = props => {
  const classes = useStyles();
  const { topBgImg, topBgMargin, bgBottom, viewDeviceType } = props;
  const courses = const_courses;

  // const [smNumber, setSmNumber] = React.useState(4);

  // React.useEffect(() => {
  //   if(viewDeviceType == 0) setSmNumber(4);
  //   else if(viewDeviceType == 1) setSmNumber(4);
  //   else if(viewDeviceType == 2)  setSmNumber(12);
  // }, [viewDeviceType]);

  if(viewDeviceType < 2)
  return (
    <div className={classes.footer}>
      {topBgImg && bgBottom && (
        <img
          alt="how it works"
          className={classes.topBg}
          style={{ bottom: bgBottom }}
          src={topBgImg}
        />
      )}
      {topBgImg && !bgBottom && (
        <img
          alt="how it works"
          className={classes.topBg}
          style={{ top: topBgMargin }}
          src={topBgImg}
        />
      )}
        <Container className={classes.footerContent}>
          <Grid container spacing={4}>
            <Grid item md={6} sm={4} xs={12}>
              <Logo white />
              <div className={classes.teamDesc}>
                <TextFooterNormal
                  text={
                    'We are dedicated to the future engineers of this world.'
                  }
                />
                <TextFooterNormal
                  text={
                    'Please reach out with suggestions for content and improvements to the classes.'
                  }
                />
              </div>
              <div className={classes.contactContainer}>
                <a href="mailto: team@alunna.io">
                  <IconWithText
                    CIcon={'/static/images/footer/message.png'}
                    text={'team@alunna.io'}
                    style={{ color: '#fff' }}
                  />
                </a>
                
                {/* <IconWithText
                  CIcon={'/static/images/footer/chat.png'}
                  text={'Livechat'}
                  style={{ color: '#fff' }}
                /> */}
              </div>

              <div className={classes.socialContainer}>
                <FacebookIcon style={{ color: '#fff' }} />
                <LinkedInIcon style={{ color: '#fff' }} />
                <GitHubIcon style={{ color: '#fff' }} />
                <TwitterIcon style={{ color: '#fff' }} />
              </div>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <TextFooterBold text={'Classes'} />
              <div style={{ marginTop: '20px' }}>
                {/* <TextFooterNormal
                  styleCustom={'5px'}
                  text={'Data Structures and Algorithms'}
                />
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'AWS Cloud Development'}
                />
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'MERN Stack'}
                />
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'Machine Learning'}
                />
                <TextFooterNormal
                  styleCustom={'5px'}
                  text={'Blockchain'}
                /> */}
                {courses.map(course => (
                  <Link href={"/courses/" + course.id}>
                    <TextFooterNormal
                      styleCustom={'5px'}
                      text={course.name}
                    />
                  </Link>
                ))}
              </div>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <TextFooterBold text={'Home'} />
              <Box marginTop={3}>
                <Link href={RouterPathName.Teachers}>
                  <TextFooterNormal styleCustom={'5px'} text={'Teachers'} />
                </Link>
                <Link href={RouterPathName.HowItWorks}>
                  <TextFooterNormal styleCustom={'5px'} text={'How it works'} />
                </Link>
                <Link href={RouterPathName.Contact}>
                  <TextFooterNormal styleCustom={'5px'} text={'Contacts'} />
                </Link>
                <Link href={RouterPathName.Blogs}>
                  <TextFooterNormal styleCustom={'5px'} text={'Blog'} />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item md={6} sm={6} xs={12}>
              <div className={classes.copyRight}>
                <TextFooterNormal text={'© Copyright 2020 Alunna Inc.'} />
              </div>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <div className={classes.copyRight}>
                <TextFooterNormal text={'Created with ❤️ in Los Angeles, CA'} />
              </div>
            </Grid>
            
          </Grid>
          
        </Container>
    </div>
    );
  else
  return (
    <div className={classes.footer}>
      {topBgImg && bgBottom && (
        <img
          alt="how it works"
          className={classes.topBg}
          style={{ bottom: bgBottom }}
          src={topBgImg}
        />
      )}
      {topBgImg && !bgBottom && (
        <img
          alt="how it works"
          className={classes.topBg}
          style={{ top: topBgMargin }}
          src={topBgImg}
        />
      )}
        <Container className={classes.footerContent}>
          <Grid container spacing={4}>
            <Grid item md={6} sm={12} xs={12}>
              <Logo white />
              <div className={classes.teamDesc}>
                <TextFooterNormal
                  text={
                    'We are dedicated to the future engineers of this world. Please reach out with suggestions for content and improvements to the classes.'
                  }
                />
                
              </div>
              
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <TextFooterBold text={'Classes'} />
              <div style={{ marginTop: '20px' }}>
                <TextFooterNormal
                  styleCustom={'15px'}
                  text={'Data Structures and Algorithms'}
                />
                <TextFooterNormal
                  styleCustom={'15px'}
                  text={'AWS Cloud Development'}
                />
                <TextFooterNormal
                  styleCustom={'15px'}
                  text={'MERN Stack'}
                />
                <TextFooterNormal
                  styleCustom={'15px'}
                  text={'Machine Learning'}
                />
                <TextFooterNormal
                  styleCustom={'15px'}
                  text={'Blockchain'}
                />
              </div>
            </Grid>
            <Grid item md={2} sm={12} xs={12}>
              <TextFooterBold text={'Home'} />
              <Box marginTop={3}>
                <Link href={RouterPathName.Teachers}>
                  <TextFooterNormal styleCustom={'15px'} text={'Teachers'} />
                </Link>
                <Link href={RouterPathName.HowItWorks}>
                  <TextFooterNormal styleCustom={'15px'} text={'How it works'} />
                </Link>
                <Link href={RouterPathName.Contact}>
                  <TextFooterNormal styleCustom={'15px'} text={'Contacts'} />
                </Link>
                <Link href={RouterPathName.Blogs}>
                  <TextFooterNormal styleCustom={'15px'} text={'Blog'} />
                </Link>
                <div className={classes.contactContainer}>
                  <a href="mailto: team@alunna.io">
                    <IconWithText
                      CIcon={'/static/images/footer/message.png'}
                      text={'team@alunna.io'}
                      style={{ color: '#fff' }}
                    />
                  </a>
                  {/* <IconWithText
                    CIcon={'/static/images/footer/chat.png'}
                    text={'Livechat'}
                    style={{ color: '#fff' }}
                  /> */}
                </div>
              </Box>
            </Grid>
          </Grid>
          <div className={clsx(classes.copyRight, "text-center")}>
            <div className={clsx(classes.socialContainer, classes.socialPadding)}>
              <FacebookIcon style={{ color: '#fff' }} />
              <LinkedInIcon style={{ color: '#fff' }} />
              <GitHubIcon style={{ color: '#fff' }} />
              <TwitterIcon style={{ color: '#fff' }} />
            </div>
            <TextFooterNormal text={'© Copyright 2020 Alunna, Inc.'} />
            <TextFooterNormal text={'Created with ❤️ in Los Angeles, CA'} />
          </div>
        </Container>
    </div>
    );
};

export default Footer;
