import React from 'react';
import {
  makeStyles,
  Theme,
  Container,
  Paper,
  Grid
} from '@material-ui/core';
import CustomTextFieldLabel from 'components/CustomTextFieldLabel';
import Footer from 'layouts/FooterLayout';
import CustomTextLarge from 'components/CustomTextLarge';
import CustomMainButton from 'components/CustomMainButton';
import CustomTextMini from 'components/CustomTextMini';
import TopBar from 'layouts/MainLayout/TopBar';
import CourseIdea from '../classes/ClassesView/CourseIdea';
import classNames from "classnames";
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  leftContent: {
    // marginTop: '18%',
    width: '28%',
    display: "flex",
    // marginBottom: '10%'
  },
  backToHome: {
    marginTop: '4%'
  },
  formContact: {
    // paddingTop: '10%'
  },
  contactContent: {
    padding: '4%'
  },
  btnSubmit: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4%'
  },
  customBtn: {
    width: 170,
    height: 45
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
  },
  w100: {
    width: "100%",
    paddingBottom: 40
  },
  mobileTitle: {
    
  }
}));

const ContactUs = () => {
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
  const containerItem = classNames({
    [classes.containerItem]: true,
    [classes.mobileContent]: viewStep===2,
  });
  const fullheight = classNames({
    [classes.fullheight]: true,
    [classes.noHeight]: viewStep===2,
  });
  const leftContent = classNames({
    [classes.leftContent]: true,
    [fullheight]: true,
    [classes.w100]: viewStep===2,
  });
  return (
    <div className={classes.root}>
      <TopBar
        inlineImageUrl="/static/images/contact.png"
        imageAlt="alunna contact"
        viewDeviceType={viewStep}
      />
      {viewStep === 2 ? (
        <img className={ classes.heroImage } src="/static/images/contact.png" alt="header img"/>
      )
        : (<></>)
      }
      <Container>
        <div className={leftContent}>
          <div className={containerItem}>
            <CustomTextMini
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                color: '#373BCE'
              }}
            >
              contact us
            </CustomTextMini>
            <CustomTextLarge>
              We welcome all feedback <p style={{ color: '#373BCE' }}>from you</p>
            </CustomTextLarge>
          </div>
        </div>
        <div className={classes.formContact}>
          <Paper>
            <div className={classes.contactContent}>
              <Grid container spacing={6}>
                <Grid item lg={6} xs={12} sm={6}>
                  <CustomTextFieldLabel label={'First name'} />
                </Grid>
                <Grid item lg={6} xs={12} sm={6}>
                  <CustomTextFieldLabel label={'Last name'} />
                </Grid>
                <Grid item lg={6} xs={12} sm={6}>
                  <CustomTextFieldLabel label={'email address'} />
                </Grid>
                <Grid item lg={6} xs={12} sm={6}>
                  <CustomTextFieldLabel label={'phone'} />
                </Grid>
                <Grid item lg={12} xs={12} sm={12}>
                  <CustomTextFieldLabel multiline rows={8} label={'Message'} />
                </Grid>
              </Grid>
              <div className={classes.btnSubmit}>
                <CustomMainButton
                  label={'Submit'}
                  customClass={classes.customBtn}
                />
              </div>
            </div>
          </Paper>
        </div>
        <CourseIdea viewDeviceType={viewStep}/>
      </Container>
      <Footer
        topBgImg={'/static/images/footer/topBg2.png'}
        topBgMargin={'-680px'}
        bgBottom={"0px"}
        viewDeviceType={viewStep}
      />
    </div>
  );
};
export default ContactUs;
