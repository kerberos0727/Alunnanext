import React from 'react';
import { makeStyles, Theme, Container, Grid } from '@material-ui/core';
import Footer from 'layouts/FooterLayout';
import TopBar from 'layouts/MainLayout/TopBar';
import classNames from "classnames";
import { useSelector } from 'react-redux';
import { IStoreState } from 'reducers/root.reducer';
import { useRouter } from 'next/router';

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
  },
  formWrapper: {
    fontSize: 20,
    marginTop: 20,
    width: "100%"
  }
}));

const Profile = props => {
  const classes = useStyles();
  const history = useRouter();
  const [modal, setModal] = React.useState(0);
  const [viewStep, setViewStep] = React.useState(0);
  const authState = useSelector((state: IStoreState) => state.authentication);
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

  
  if (!authState.isLoggedIn) history.push("/");
  // const openRegisterModal = () => {
  //   console.log('ee')
  //   setModal(2);
  // };
  const updateModal = (value) => {
    // if(value !== 0)
    setModal(value);
  };

  const leftContentClasses = classNames({
    [classes.leftContent]: true,
    [classes.mobileLeft]: viewStep===2,
  });

  return (
    <div className={classes.root}>
      
      <TopBar
        modalValue={modal}
        updateModalValue={(value) => updateModal(value)}
        viewDeviceType={viewStep} />

      <Container>
        <div className={leftContentClasses}>
          <Grid container alignItems="center">
            <Grid
              item
              md={6}
              xs={12}
              lg={6}
              sm={6}
              className={classes.formWrapper}
            >
              First Name
            </Grid>
              
            <Grid
              item
              md={6}
              xs={12}
              lg={6}
              sm={6}
              className={classes.formWrapper}
            >
              {authState.isLoggedIn? authState.currentAuthenticatedUser.attributes.given_name: ""}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              lg={6}
              sm={6}
              className={classes.formWrapper}
            >
              Middle Name
            </Grid>
              
            <Grid
              item
              md={6}
              xs={12}
              lg={6}
              sm={6}
              className={classes.formWrapper}
            >
              {authState.isLoggedIn? authState.currentAuthenticatedUser.attributes["custom:middleName"]: ""}
            </Grid>
          
            <Grid
              item
              md={6}
              xs={12}
              lg={6}
              sm={6}
              className={classes.formWrapper}
            >
              Last Name
            </Grid>
              
            <Grid
              item
              md={6}
              xs={12}
              lg={6}
              sm={6}
              className={classes.formWrapper}
            >
              {authState.isLoggedIn? authState.currentAuthenticatedUser.attributes.family_name: ""}
            </Grid>
            
          </Grid>
          
        </div>
        
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
export default Profile;
