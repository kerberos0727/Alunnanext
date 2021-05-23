import React from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';

interface MainLayoutProps {
  children?: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    // display: 'flex',
    // height: '100%',
    // overflow: 'hidden',
    // width: '100%'
  },
  wrapper: {
    // display: 'flex',
    // flex: '1 1 auto',
    // overflow: 'hidden',
    // paddingTop: 100
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    width: '100%',
  },
  content: {
    // flex: '1 1 auto',
    // height: '100%',
    // overflow: 'auto',
    width: '100%',
  }
}));

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const classes = useStyles();
  var image = "/static/home/hero.png";
  if(window.location.pathname === "/classes") image = "/static/classes/hero.png";
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
    <div className={classes.root}>
      <TopBar inlineImageUrl={image} imageAlt="hero" viewDeviceType={viewStep} />
      {/* <div>
        <img
          alt="hero"
          src="/static/home/hero.png"
        />
      </div> */}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
