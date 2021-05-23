import React from 'react';
import type { FC } from 'react';
import { makeStyles, Theme, Container, Button, Typography, Card, CardContent, Box, Grid } from '@material-ui/core';
import CustomText from 'components/CustomText';
import Footer from 'layouts/FooterLayout';
import IconWithText from 'components/IconWithText';
import { useRouter } from 'next/router';
import useRouterQueryParams from 'hooks/useRouterQueryParam';
import CustomMainButton from 'components/CustomMainButton';
import clsx from 'clsx';
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
    height: window.screen.height * 0.6,
    position: 'absolute',
    right: 0,
    top: 0
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
  },
  noMarginTop: {
    marginTop: 0
  },
  mobileContentFont: {
    fontSize: 20
  },
  date: {
    display: "flex",
    alignItems: "center",
  },
  padding20: {
    padding: "20px 0"
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
  const container = classNames({
    [classes.container]: true,
    [classes.noMarginTop]: viewStep===2,
  });
  const notFoundContent = classNames({
    [classes.notFoundContent]: true,
    [classes.mobileContentFont]: viewStep===2,
  });
  const date = classNames({
    [classes.date]: true,
    [classes.padding20]: viewStep===2,
  });
  const backToHome = classNames({
    [classes.backToHome]: true,
    [classes.mobileButton]: viewStep===2,
  });
  return (
    <div className={classes.root}>
      <TopBar
        inlineImageUrl="/static/images/thankyou.png"
        imageAlt="thank-you"
        classImageBackground={classes.backGroundImg}
        viewDeviceType={viewStep}
      />
      {viewStep === 2 ? (
        <img className={ classes.heroImage } src="/static/images/thankyou.png" alt="hero img" />
      )
        : (<></>)
      }
      <Container>
        <Grid container spacing={1} className={container}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                color="textPrimary"
                variant="h2"
                className={classes.formTitle}
              >
                Thank you, Michael!
              </Typography>
              <Typography
                color="textPrimary"
                variant="h2"
                className={classes.formTitle}
              >
                Your {action} has
              </Typography>
              <Typography
                color="primary"
                variant="h2"
                className={classes.formTitle}
              >
                been successful!
              </Typography>
            </div>

            <div className={notFoundContent}>
              <CustomText color='#546681'>We're excited to help your learning! You will receive an email with your expected prerequisites to be completed by:</CustomText>
              <div className={date}>
                <IconWithText
                  CIcon={'/static/images/clock.svg'}
                  text={'Start date:'}
                  className={classes.iconWithText}
                />
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    color: 'rgb(84, 102, 129)',
                    marginLeft: '1%',
                    fontWeight: 'bold'
                  }}
                >
                  10 Mar 2021
                </p>
              </div>
              <CustomText
                color='#546681'
              >
                If you have any immediate questions or feedback, feel free to email us:
                </CustomText>
              <IconWithText
                CIcon={'/static/images/message.svg'}
                text={'team@alunna.io'}
                className={clsx(date, classes.iconWithText)}
              />
            </div>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Box>
                  <div className={classes.cardSection}>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      className={classes.cardText}
                    >
                      Join our Slack channel and get to know other students and teachers of your course!
                    </Typography>
                  </div>
                  <div className={classes.cardSection}>
                    <Button
                      onClick={() => {}}
                      variant="outlined"
                      className={classes.customBtn}
                      startIcon={(
                        <img src="/static/images/colorful_slack.svg" alt="Slack"/>
                      )}
                    >
                      Join Slack
                    </Button>
                  </div>
                  <div>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                      className={classes.cardText}
                    >
                      There are a lot of channels, but we recommend next ones:
                    </Typography>
                    <div className={clsx('d-flex', classes.tagWrapper)}>
                      <Typography className={classes.tag}># course channel</Typography>
                      <Typography className={classes.tag}># main channel</Typography>
                      <Typography className={classes.tag}># jobs</Typography>
                    </div>
                  </div>
                </Box>
              </CardContent>
            </Card>
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
