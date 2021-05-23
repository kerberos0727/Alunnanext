import React from 'react';
import { makeStyles, Container, Grid, Typography, Box, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import Page from 'components/Page';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import Footer from 'layouts/FooterLayout';
import CourseSlider from './CourseSlider';
import TopBar from 'layouts/MainLayout/TopBar';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {},
  backgroundImage: {
    // backgroundColor: '#4B4FE4',
    backgroundImage: `url('/static/home/home_bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginTop: 121,
  },
  teacherInfo: {
    position: 'relative',
  },
  teacherImage: {
    width: 538,
    height: 538,
    borderRadius: '50%',
    backgroundColor: '#D2D7FE',
    backgroundImage: `url('/static/images/teacher1.png')`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  teacherBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  teacherImageWrapper: {
    zIndex: 2
  },
  basicInfoWrapper: {

  },
  teacherName: {
    fontWeight: 700,
    fontSize: 46,
    lineHeight: '58px',
  },
  titleDesc: {
    color: '#4B4FE4',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '17px',
    textTransform: 'uppercase',
    marginTop: 15,
  },
  socialWrapper: {

  },
  socialIcon: {
    color: '#4B4FE4',
    marginRight: 24,
    marginTop: 39,
    transform: 'scale(1.3)',
  },
  generalInfo: {
    fontSize: 24,
    lineHeight: '29px',
    fontWeight: 'bold',
    marginTop: 49,
  },
  infoLabel: {
    color: '#546681',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: '0.1em'
  },
  infoValue: {
    fontSize: 16,
    lineHeight: '26px',
    color: '#546681',
  },
  cellWithNoBorder: {
    borderBottom: 'unset',
  },
  cellHeader: {
    width: '20%',
    paddingLeft: 0,
  },
  generalInfoTable: {
    marginTop: 27,
  },
  teacherDescWrapper: {
    marginTop: 70,
  },
  aboutMeLabel: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '29px',
  },
  teacherDesc: {
    marginTop: 13,
    color: '#546681',
    fontSize: 17,
    lineHeight: '28px',
    maxWidth: 1073
  },
  teacherImageMobile: {
    marginTop: 100,
    width: 300,
    height: 300,
    borderRadius: "50%",
    backgroundColor: "#D2D7FE"
  }
}));

const HomeView: React.FC = () => {
  const classes = useStyles();
  const [viewStep, setViewStep] = React.useState(0);
  React.useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth > 1280) setViewStep(0); // web view
      else if (window.innerWidth < 800) setViewStep(2); // mobile view
      else setViewStep(1); // tablet view
      return true;
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  return (
    <Page className={classes.root} title="Home">
      <TopBar imageAlt="" viewDeviceType={viewStep}/>
      <div className={classes.teacherInfo}>
        {/* <img
          alt="Teacher Border"
          src={"/static/images/teacher_border.png"}
          className={classes.teacherBorder}
        /> */}
        <Container>
          <Grid container spacing={5}>
            <Grid item className={classes.teacherImageWrapper} xs={12} md={6}>
              {viewStep < 1 ? (<div className={classes.teacherImage} />)
                :
                (
                  <div className="text-center">
                    <img alt="Teacher Img"
                      src={"/static/images/teacher1.png"}
                      className={classes.teacherImageMobile}
                    />
                  </div>
                  
                )
              }
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.basicInfoWrapper}>
                <Box className="d-flex align-items-center" mt={7}>
                  <Typography color="textPrimary" className={classes.teacherName}>Bradley&nbsp;</Typography>
                  <Typography color="primary" className={classes.teacherName}>Woolf</Typography>
                </Box>
                <Typography className={classes.titleDesc}>Teacher</Typography>
                <div className="socialWrapper">
                  <FacebookIcon className={classes.socialIcon} />
                  <LinkedInIcon className={classes.socialIcon} />
                  <GitHubIcon className={classes.socialIcon} />
                  <TwitterIcon className={classes.socialIcon} />
                </div>
                <Typography color="textPrimary" className={classes.generalInfo}>General Information</Typography>
                <Table className={classes.generalInfoTable}>
                  <TableBody>
                    <TableRow>
                      <TableCell className={clsx(classes.cellWithNoBorder, classes.cellHeader)}>
                        <Typography className={classes.infoLabel}>Email:</Typography>
                      </TableCell>
                      <TableCell className={classes.cellWithNoBorder}>
                        <Typography className={classes.infoValue}>brad@alunna.io</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={clsx(classes.cellWithNoBorder, classes.cellHeader)}>
                        <Typography className={classes.infoLabel}>Phone:</Typography>
                      </TableCell>
                      <TableCell className={classes.cellWithNoBorder}>
                        <Typography className={classes.infoValue}>(818) 808-9948</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={clsx(classes.cellWithNoBorder, classes.cellHeader)}>
                        <Typography className={classes.infoLabel}>Pronoun:</Typography>
                      </TableCell>
                      <TableCell className={classes.cellWithNoBorder}>
                        <Typography className={classes.infoValue}>He/Him</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Grid>
          </Grid>
          <div className={classes.teacherDescWrapper}>
            <Typography color="textPrimary" className={classes.aboutMeLabel}>About Me</Typography>
            <p className={classes.teacherDesc}>
              "There is nothing more important than context- the why should precede the how"
            </p>
            <p></p>
            <p className={classes.teacherDesc}>
              Bradley is a graduate of the University of Southern California (USC), though learned programming outside of class time. After enrolling in a Bootcamp called Codesmith, he pursued cloud computing by achieving multiple AWS certifications and deploying multiple production apps.
            </p>
          </div>
        </Container>
      </div>
      <div className={classes.backgroundImage}>
        <CourseSlider viewDeviceType={viewStep} />
      </div>
      <Footer
        topBgImg={'/static/images/teacher_bg.png'}
        topBgMargin={'-662px'}
        bgBottom={'0px'}
        viewDeviceType={viewStep}
      />
    </Page>
  );
};

export default HomeView;
