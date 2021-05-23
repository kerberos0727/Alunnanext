import React from 'react';
import { makeStyles } from '@material-ui/core';

import Page from 'components/Page';
import Footer from 'layouts/FooterLayout';
import Hero from './Hero';
import CourseIdea from './CourseIdea';
import ClassesList from './ClassesList';
// import ComingClassesList from './ComingClassesList';
import TopBar from 'layouts/MainLayout/TopBar';

const useStyles = makeStyles(() => ({
  root: {},
  backgroundImage: {
    // backgroundImage: `url('/static/classes/hero.png')`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
  }
}));


const ClassesView = () => {
	const classes = useStyles();
	const [modal, setModal] = React.useState(0);
	const [viewStep, setViewStep] = React.useState(0);
	
  React.useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth > 1700) setViewStep(0); // web view
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
		<Page
			className={classes.root}
			title="Classes"
		>
			<TopBar
        inlineImageUrl="/static/classes/hero.png"
				imageAlt="error"
				modalValue={modal}
        updateModalValue={(value) => updateModal(value)}
        viewDeviceType={viewStep}
      />
			<div className={classes.backgroundImage}>
				<Hero viewDeviceType={viewStep}/>
				<ClassesList viewDeviceType={viewStep}/>
				{/* <ComingClassesList viewDeviceType={viewStep}/> */}
				<CourseIdea openRegister={ openRegisterModal} viewDeviceType={viewStep}/>
				<Footer
					topBgImg={'/static/images/footer/topBg2.png'}
					topBgMargin={'-510px'}
					bgBottom={"0px"}
					viewDeviceType={viewStep}
				/>
			</div>
		</Page>
	);
};

export default ClassesView;
