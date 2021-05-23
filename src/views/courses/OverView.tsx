import React from 'react';
import { makeStyles, Theme, Divider, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import CustomTextLarge from 'components/CustomTextLarge';
import { IStoreState } from 'reducers/root.reducer';
import CustomText from 'components/CustomText';
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 120
  },
  content: {
    marginTop: '46px',
    width: "calc(100% - 500px)"
  },
  overview: {
    fontSize: 18,
    margin: "10px 0"
  },
  overviewImgWrapper: {
    float: "left",
    height: "100%",
    // width: "fit-content"
  },
  overviewImg: {
    height: 18,
  },
  overviewWrapper: {
    marginLeft: 30
  },
  overviewTotal: {
    borderBottom: '1px solid #DADCEC',
    paddingBottom: 30,
    marginBottom: 30,
  },
  overviewDescription: {
    borderBottom: '1px solid #DADCEC',
    margin: "30px 0",
    fontSize: 18,
    paddingBottom: 30,
  },
  mobileContent: {
    width: "100%"
  },
  marginTop20: {
    marginTop: 20,
    // borderTopLeftRadius: 999,
    // borderBottomLeftRadius: 999,
  },
  numberPart: {
    width: 50,
    float: "left",
    textAlign: "center",
    fontSize: 16,
    lineHeight: "48px",
    color: "#4b4fe4",
    backgroundColor: "#f7f7fc",
    marginRight: 20,
    fontWeight: 600
  },
  borderRadius999: {
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999
  },
  paddingTop10: {
    padding: "10px 0"
  }
}));

const OverView = (props: { viewDeviceType?: number; className?: string }) => {
  const { className } = props;
  const courseDetail = useSelector(
    (state: IStoreState) => state.courses.course
  );
  const overviewContents = JSON.parse(courseDetail.overview.replace("\\", ""));
  const prerequisites = courseDetail.prerequisites;
  const classes = useStyles();
  const overviewItem = '/static/images/courses/overview_circle_image.png';
  const content = classNames({
    [classes.content]: true,
    [classes.mobileContent]: props.viewDeviceType === 2,
  });
  const formatNumber = (number) => {
    if (number < 10) return "0" + number;
    return number;
  }
  return (
    <div className={clsx(classes.root, 'root-font', className)} id="overview">
      <CustomTextLarge style={{ color: '#0A1F44' }}>Overview</CustomTextLarge>
      <Divider
        variant="fullWidth"
        color="#DADCEC"
        style={{ marginTop: '10px' }}
      />
      <div className={content}>
        <CustomText
          fontSize="24px"
          lineHeight="29px"
          color="#0A1F44"
          fontWeight="bold"
        >
          What you'll <span style={{ color: '#4B4FE4' }}>learn</span>
        </CustomText>
        <Grid container={true} className={classes.overviewTotal}>
          {overviewContents.map((overview, index) => (
            <Grid item={true} md={6}>
              <div className={classes.overview}>
                <div className={classes.overviewImgWrapper}><img src={overviewItem} alt="overview" className={classes.overviewImg}/></div>
                <div className={classes.overviewWrapper}>{overview}</div>
                
              </div>
            </Grid>
          ))}
          
        </Grid>
        <CustomText
          fontSize="24px"
          lineHeight="29px"
          color="#0A1F44"
          fontWeight="bold"
        >
          {courseDetail.questionTitle}
        </CustomText>
        <div className={clsx(classes.overviewWrapper, classes.overviewDescription)}>{courseDetail.questionDescription}</div>

        <CustomText
          fontSize="24px"
          lineHeight="29px"
          color="#0A1F44"
          fontWeight="bold"
        >
          Prerequisites
        </CustomText>
        {prerequisites.map((prerequisite, index) => (
          <Paper className={classes.borderRadius999}>
            <div className={classes.marginTop20}>
              <div className={classes.numberPart + " " + classes.borderRadius999}>{formatNumber(index + 1)}</div>
              <CustomText color={'#546681'} className={classes.paddingTop10}>{prerequisite.name}</CustomText>
              
            </div>
          </Paper>
          // <Grid item={true} md={12}>
          //   <div className={classes.overview}>
          //     <div className={classes.overviewImgWrapper}>{prerequisite.id}</div>
          //     <div className={classes.overviewWrapper}>{prerequisite.name}</div>
              
          //   </div>
          // </Grid>
        ))}

      </div>
    </div>
  );
};
export default OverView;
