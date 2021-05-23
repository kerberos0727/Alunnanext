import React from 'react';
import { makeStyles } from '@material-ui/core';
import Hero from './Hero';
import Features from './Features';
// import Testimonials from './Testimonials';
import Footer from 'layouts/FooterLayout';
// import Mission from './Mission';
import Curriculum from './Curriculum';
import Promise from './Promise';
import HowItWork from './HowItWork';
import CaseStudy from './CaseStudy';
import LeaveEmail from './LeaveEmail';
import CourseElasticSlide from './Courses/CourseElasticSlide';
import TopBar from 'layouts/MainLayout/TopBar';

const useStyles = makeStyles(() => ({
  root: {},
  backgroundImage: {
    // backgroundColor: '#4B4FE4',
    // backgroundImage: `url('/static/home/home_bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  backGroundImg: {
    // height: window.screen.height * 0.6,
    position: 'absolute',
    right: 0,
    top: 0
  },
}));

const HomeView: React.FC = () => {
  const classes = useStyles();
  const [modal, setModal] = React.useState(0);
  const [viewStep, setViewStep] = React.useState(0);

  React.useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth > 1450) setViewStep(0); // web view
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

  return (
    <div className={classes.root} title="Home">
      <TopBar
        inlineImageUrl="/static/home/hero.png"
        imageAlt="error"
        classImageBackground={classes.backGroundImg}
        modalValue={modal}
        updateModalValue={(value) => updateModal(value)}
        viewDeviceType={viewStep}
      />
      <div className={classes.backgroundImage}>
        <Hero openRegister={openRegisterModal} viewDeviceType={viewStep} />
        <Features viewDeviceType={viewStep} />
        <CourseElasticSlide viewDeviceType={viewStep} />
        <Curriculum viewDeviceType={viewStep} />
        <Promise viewDeviceType={viewStep} />
        <HowItWork />
        <CaseStudy />
        <LeaveEmail viewDeviceType={viewStep} />
        <Footer
          topBgImg={'/static/home/testimonial_bg.png'}
          topBgMargin={'-200px'}
          bgBottom={"0px"}
          viewDeviceType={viewStep}
        />
      </div>
    </div>
  );
};

export default HomeView;
