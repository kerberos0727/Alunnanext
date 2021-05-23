import React from 'react';
import type { FC } from 'react';
import { makeStyles, Theme, Container, Typography, Grid } from '@material-ui/core';
import CustomText from 'components/CustomText';
import Footer from 'layouts/FooterLayout';
import { useRouter } from 'next/router';
import useRouterQueryParams from 'hooks/useRouterQueryParam';
import CustomMainButton from 'components/CustomMainButton';
import TopBar from 'layouts/MainLayout/TopBar';
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  notFoundNumber: {
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    marginTop: 60,
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
  pageOopsy: {
    fontFamily: 'Inter',
    fontSize: '46px',
    lineHeight: '58px',
    fontWeight: 'bold',
    marginTop: '-6%'
  },
  leftContent: {
    marginTop: '10%',
    width: '40%',
    marginBottom: '20%'
  },
  notFoundContent: {
    marginTop: '3%'
  },
  backToHome: {
    marginTop: '4%',
    marginBottom: '10%'
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 46,
    lineHeight: '58px',
    margin: "auto 0"
  },
  primaryFormTitle: {
    color: "#4B4FE4"
  },
  iconWithText: {
    color: '#4B4FE4',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  card: {
    background: '#EDEDFF',
    border: '1px solid #D6D8E7',
    borderRadius: '15px',
    marginTop: 41,
    marginBottom: 40,
  },
  cardContent: {
    padding: 28,
    boxShadow: '0px 4px 40px rgba(11, 14, 112, 0.2)',
  },
  cardText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '28px',
    color: '#546681',
  },
  customBtn: {
    background: '#fff',
    boxShadow: '0px 4px 15px rgba(72, 77, 255, 0.2)',
    border: '1px solid #4B4FE4',
    color: '#4B4FE4',
    padding: '13px 12.5px',
    borderRadius: '50px',
    width: '200px',
    fontWeight: 600,
    textTransform: 'unset',
  },
  cardSection: {
    marginBottom: 24,
  },
  joinSlackIcon: {
    color: '#4B4FE4',
  },
  tagWrapper: {
    marginTop: 5,
    paddingBottom: 3,
  },
  tag: {
    color: '#4B4FE4',
    letterSpacing: '0.1em',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: '17px',
    marginRight: 30
  },
  backGroundImg: {
    // height: window.screen.height * 0.6,
    height: "100vh",
    backgroundSize: "contain",
    width: "unset",
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1
  },
  fullheight: {
    height: "calc(100vh - 200px)"
  },
  containerItem: {
    height: "unset",
    margin: "auto 0"
  },
  height100per: {
    height: "100%",
  },
  heroImage: {
    width: "100%"
  },
  mobileContent: {
    margin: 0
  },
  mobileButton: {
    "& button": {
      width: "100%",
      marginTop: 50
    }
  },
  noHeight: {
    height: "unset"
  }
}));

const ThankYouPage: FC = () => {
  const classes = useStyles();

  const query = useRouterQueryParams();

  const history = useRouter();
  const action = query.get('action');
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
  const containerItem = classNames({
    [classes.containerItem]: true,
    [classes.mobileContent]: viewStep===2,
  });
  const backToHome = classNames({
    [classes.backToHome]: true,
    [classes.mobileButton]: viewStep===2,
  });
  const fullheight = classNames({
    [classes.fullheight]: true,
    [classes.noHeight]: viewStep===2,
  });
  return (
    <div className={classes.root}>
      <TopBar
        inlineImageUrl="/static/images/thankyou.png"
        imageAlt="thank-you-logo"
        classImageBackground={classes.backGroundImg}
        viewDeviceType={viewStep}
      />
      {viewStep === 2 ? (
        <img className={ classes.heroImage } src="/static/images/thankyou.png" alt="hero img"/>
      )
        : (<></>)
      }
      <Container  className={fullheight}>
        <Grid container spacing={1} className={classes.container + " " + classes.height100per}>
          <Grid item xs={12} md={6} className={containerItem}>
            <div>
              <Typography
                color="textPrimary"
                variant="h2"
                className={classes.formTitle}
              >
                <div>Thank you for</div>
                <div className={classes.primaryFormTitle}>signing up!</div>
              </Typography>
              
            </div>

            <div className={classes.notFoundContent}>
              <CustomText color='#546681'>Check out our classes and start learning today!</CustomText>
              
            </div>
            
            <div className={backToHome}>
              <CustomMainButton
                label={action === 'registration' ? 'Back to my account' : 'Back to Home page'}
                onClick={() => history.push('/')}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer viewDeviceType={viewStep}/>
    </div>
  );
};
export default ThankYouPage;
