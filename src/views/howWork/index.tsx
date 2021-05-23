import React from 'react';
import { makeStyles, Theme, Container } from '@material-ui/core';
import Footer from 'layouts/FooterLayout';
import TopBar from 'layouts/MainLayout/TopBar';
import CustomTextLarge from 'components/CustomTextLarge';
import IconWithText from 'components/IconWithText';
import CustomStepper from 'components/CustomStepper';
// import GotIdea from 'components/GotIdea';
import CourseIdea from '../classes/ClassesView/CourseIdea';
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative'
  },
  backGroundImg: {
    width: '100%',
    height: window.screen.height * 0.6,
    position: 'absolute',
    top: 0,
    zIndex: -2
  },
  boyImg: {
    height: '780px',
    position: 'absolute',
    right: 0,
    top: '200px',
    zIndex: -1
  },
  leftContent: {
    marginTop: '18%',
    width: '44%',
    marginBottom: '10%'
  },
  iconWrapper: {
    display: 'flex',
    marginTop: '15px',
    justifyContent: 'space-between'
  },
  robotImage: {
    width: "100%"
  },
  mobileLeft: {
    margin: "0",
    width: "100%",
    paddingTop: 100
  },
  mobileImage4: {
    height: "8rem",
    paddingTop: 0,
    marginTop: "5rem"
  },
  mobileText: {
    fontSize: "10rem",
    lineHeight: "unset"
  },
  boyMobile: {
    width: window.screen.height * 0.3,
    top: window.screen.height * 0.4,
    height: "unset"
  },
  displayNone: {
    display: "none"
  },
  w60: {
    width: "60%"
  },
  w100: {
    width: "100%",
    "& button": {
      width: "100%",
      marginTop: 50
    }
  },
  mobileSteps: {
    // marginTop: "40vh"
    marginTop: 100
  }
}));

const HowItWork = props => {
  const classes = useStyles();
  const contents = [
    {
      step: 1,
      title: 'Select a course and sign up!',
      content: `Select a start date for any topic you want to learn, and check if it aligns with your goals. Sign up or connect with an Alunna team member to discuss.`
    },
    {
      step: 2,
      title: 'Complete prerequisites',
      content: `Complete the short, direct, and fun prerequisites. We provide all the materials beforehand, then check in to see what you should focus on before you enroll.`
    },
    {
      step: 3,
      title: 'Start building with peers from around the world',
      content: `Our classes are intense & fast-paced, and we sincerely want you to succeed. We do not disqualify based on performance in this prerequisite period. And, yes, the prereq material is free, even if you decide not to enroll.`
    },
    // need to onClick={() => history.push('/classesView')} for step 4
    {
      step: 4,
      title: '',
      content: 'Start learning',
      button: true
    }
  ];
  const [modal, setModal] = React.useState(0);
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

  const openRegisterModal = () => {
    console.log('ee')
    setModal(2);
  };
  const updateModal = (value) => {
    // if(value !== 0)
    setModal(value);
  };

  const leftContentClasses = classNames({
    [classes.leftContent]: true,
    [classes.mobileLeft]: viewStep===2,
  });
  const boyImage = classNames({
    [classes.boyImg]: true,
    [classes.boyMobile]: viewStep===2,
  });
  const steps = classNames({
    [classes.w60]: viewStep<2,
    [classes.w100]: viewStep === 2,
    [classes.mobileSteps]: viewStep===2,
  });
  // const notFoundImg = classNames({
  //   [classes.notFoundImg]: true,
  //   [classes.mobileImage4]: viewStep===2,
  // });
  // const backToHome = classNames({
  //   [classes.backToHome]: true,
  //   [classes.w100]: viewStep===2,
  // });

  return (
    <div className={classes.root}>
      <img
        className={classes.backGroundImg}
        src="/static/images/howItWork/halfBg.png"
        alt="howItwork"
      />
      {viewStep === 2 ? (<></>) : (
        <div className="position-relative">
          <img
            className={boyImage}
            src="/static/images/howItWork/boy.png"
            alt="howItwork"
          />
        </div>
      )}
      
      <TopBar
        modalValue={modal}
        updateModalValue={(value) => updateModal(value)}
        viewDeviceType={viewStep} />

      <Container>
        <div className={leftContentClasses}>
          <CustomTextLarge>
            Sign up, complete prerequisites,
            <p style={{ color: '#373BCE' }}>build with peers</p>
          </CustomTextLarge>
          {/* <CustomText color="#546681" styles={{ marginTop: '20px' }}>
            Wait, I thought there were no conditions to start the class?
          </CustomText>
          <CustomText color="#546681">What prerequisites?</CustomText> */}
          <div className={classes.iconWrapper}>
            <IconWithText
              CIcon={'/static/images/howItWork/file_blank.png'}
              text={'No transcripts'}
              style={{ color: '#0A1F44' }}
            />
            <IconWithText
              CIcon={'/static/images/howItWork/no-letter.png'}
              text={'No admissions'}
              style={{ color: '#0A1F44' }}
            />
            <IconWithText
              CIcon={'/static/images/howItWork/no-expiriense.png'}
              text={'No isolation'}
              style={{ color: '#0A1F44' }}
            />
          </div>
        </div>
        <div className={steps}>
          <CustomStepper contents={contents} openRegister={ openRegisterModal}/>
        </div>
        <CourseIdea openRegister={ openRegisterModal} viewDeviceType={viewStep}/>
      </Container>
      <Footer
        topBgImg={'/static/images/footer/topBg2.png'}
        topBgMargin={'-510px'}
        bgBottom={"0px"}
        viewDeviceType={viewStep}
      />
    </div>
  );
};
export default HowItWork;
