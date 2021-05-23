import React from 'react';
import { makeStyles, Theme, Container } from '@material-ui/core';
import Link from 'next/link';
import CustomText from 'components/CustomText';
import Footer from 'layouts/FooterLayout';
import CustomTextLarge from 'components/CustomTextLarge';
import CustomMainButton from 'components/CustomMainButton';
import TopBar from 'layouts/MainLayout/TopBar';
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  notFoundNumber: {
    display: 'flex',
    flexDirection: 'row'
  },
  notFoundText: {
    fontFamily: 'Inter',
    fontSize: '200px',
    lineHeight: '280px',
    fontWeight: 'bold'
  },
  notFoundImg: {
    height: '280px',
    paddingTop: '26%'
  },
  leftContent: {
    marginTop: '10%',
    width: '34%',
    marginBottom: '10%'
  },
  notFoundContent: {
    marginTop: '3%'
  },
  backGroundImg: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  backToHome: {
    marginTop: '4%'
  },
  robotImage: {
    width: "100%"
  },
  mobileLeft: {
    margin: 0,
    width: "100%"
  },
  w100: {
    "& button": {
      width: "100%",
      marginTop: 50
    }
  },
  mobileImage4: {
    height: "8rem",
    paddingTop: 0,
    marginTop: "5rem"
  },
  mobileText: {
    fontSize: "10rem",
    lineHeight: "unset"
  }
}));

const NotFoundPage = () => {
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
  const leftContentClasses = classNames({
    [classes.leftContent]: true,
    [classes.mobileLeft]: viewStep === 2,
  });
  const notFoundText = classNames({
    [classes.notFoundText]: true,
    [classes.mobileText]: viewStep === 2,
  });
  const notFoundImg = classNames({
    [classes.notFoundImg]: true,
    [classes.mobileImage4]: viewStep === 2,
  });
  const backToHome = classNames({
    [classes.backToHome]: true,
    [classes.w100]: viewStep === 2,
  });
  return (
    <div className={classes.root}>
      <TopBar
        inlineImageUrl="/static/images/robo.png"
        imageAlt="error"
        classImageBackground={classes.backGroundImg}
        viewDeviceType={viewStep}
      />
      {viewStep === 2 ? (
        <img className={classes.robotImage} src="/static/images/robo.png" alt="hero img" />
      )
        : (<></>)
      }
      <Container>
        <div className={leftContentClasses}>
          <div className={classes.notFoundNumber}>
            <p className={notFoundText}>40</p>
            <img
              className={notFoundImg}
              src="/static/images/4.png"
              alt="404"
            />
          </div>
          <CustomTextLarge>
            Oopsy... <p style={{ color: '#373BCE' }}>Page not found</p>
          </CustomTextLarge>
          <div className={classes.notFoundContent}>
            <CustomText color="#546681">
              Please return to the homepage, and if this problem persists,
              please email our team so we can address the issue at hand: <br /> <b>tech@alunna.io</b> <br /> Thank you!
            </CustomText>
            {/* <IconWithText
              CIcon={'/static/images/message.png'}
              text={'tech@alunna.io'}
              style={{ color: '#4B4FE4', fontSize: '14px' }}
            />
            <CustomText color="#546681">Thank you!</CustomText> */}
          </div>
          <div className={backToHome}>
            <Link href='/'>
              <CustomMainButton label={'Back to home page'} />
            </Link>
          </div>
        </div>
      </Container>
      <Footer viewDeviceType={viewStep} />
    </div>
  );
};
export default NotFoundPage;
