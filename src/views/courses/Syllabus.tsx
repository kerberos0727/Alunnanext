import React from 'react';
import type { FC } from 'react';
import { makeStyles, Typography, Paper } from '@material-ui/core';
import { Theme } from 'theme';
import classNames from "classnames";
import CustomText from 'components/CustomText';
import CustomTextLarge from 'components/CustomTextLarge';
import { useSelector } from 'react-redux';
import { IStoreState } from 'reducers/root.reducer';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 120,
  },
  section: {
    width: 750,
    borderBottom: '1px solid #DADCEC',
    paddingBottom: 10,
  },
  sectionTitle: {
    lineHeight: '58px',
    fontSize: 46,
    fontWeight: 'bold',
  },
  teacherCard: {
    marginTop: 40,
  },
  faqWrapper: {
    width: 750,
    marginTop: 40,
  },
  heading: {
    color: '#546681',
    fontSize: 17,
    lineHeight: '28px',
    fontWeight: 600
  },
  summary: {
    marginLeft: 20
  },
  icon: {
    fontSize: 22
  },
  accordion: {
    background: '#FFF',
    boxShadow: '0px 4px 25px rgba(11, 14, 112, 0.15)',
    borderRadius: 15,
    marginBottom: 20,
  },
  accordionDesc: {
    color: '#546681',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: '28px',
    marginLeft: 42,
  },
  accordionSummary: {
    '&.Mui-expanded': {
      '& div': {
        '& p': {
          color: '#4B4FE4'
        }
      }
    }
  },
  marginBottom20: {
    marginBottom: 20
  },
  widthUnset: {
    width: "unset"
  },
  roundedButton: {
    borderRadius: '50%',
    borderColor: '#4B4FE4',
    border: '2px solid',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    opacity: 0.8,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#F7F7FC'
  },
  stepNumber: {
    fontFamily: 'Inter',
    fontSize: '22px',
    color: '#4B4FE4'
  },
  backgroundButton: {
    borderRadius: '50%',
    border: '2px solid #e0e0ff',
    width: '70px',
    lineHeight: '70px',
    textAlign: 'center',
    opacity: 0.8,
    minWidth: 70,
    position: 'relative',
    height: '70px',
    backgroundColor: '#e0e0ff'
  },
  upperLine: {
    borderLeft: '2px dashed #D6D8E7',
    height: '30px',
    margin: '0px 35px 0px 35px'
  },
  content: {
    padding: '25px'
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  stepImage: {
    marginTop: 11,
    marginLeft: 1
  },
  stepWeek: {
    color: "#546681",
    marginLeft: 15
  },
  downIcon: {
    marginLeft: 4,
    marginTop: 2
  },
  readmore: {
    color: "#4b4fe4",
    marginTop: 8,
    display: "flex",
  },
}));

type Props = {
  viewDeviceType?: number;
};

const Syllabus: FC<Props> = ({viewDeviceType}) => {
  const classes = useStyles();
  
  const imageArray = [
    '/static/images/courses/Hardware.png',
    '/static/images/courses/Python.png',
    '/static/images/courses/Data_Structures.png',
    '/static/images/courses/Algorithms.png',
  ]
  const courseDetail = useSelector(
    (state: IStoreState) => state.courses.course
  );
  const contents = courseDetail.weeks;
  const faqWrapper = classNames({
    [classes.faqWrapper]: true,
    [classes.widthUnset]: viewDeviceType === 2,
  });

  return (
    <div className={classes.root} id="syllabus">
      <div className={classes.section}>
        <Typography variant="h2" color="textPrimary" className={classes.sectionTitle}>Syllabus</Typography>
      </div>
      <div className={faqWrapper}>
      {contents.map((content, index) => (
        <div>
          <div className={classes.upperLine} />
          
          <div className={classes.stepWrapper}>
            <div className={classes.backgroundButton}>
              <div className={classes.roundedButton}>
                <img src={imageArray[content.id % 4]} alt="stepImage" className={classes.stepImage}/>
                {/* <p className={classes.stepNumber}>{content.step}</p> */}
              </div>
            </div>
            <div>
              <CustomText
                className={classes.stepWeek}
              >
                Week #{index + 1}
              </CustomText>
              <CustomTextLarge
                style={{
                  fontSize: '24px',
                  lineHeight: '29px',
                  marginLeft: '15px'
                }}
              >
                {content.title}
              </CustomTextLarge>
            </div>
            
          </div>
          
          { content.description ? (
            <>
              <div className={classes.upperLine} />
              <Paper>
                <div className={classes.content}>
                  <CustomText color={'#546681'}>{content.description}</CustomText>
                  {/* <CustomText className={classes.readmore} >
                    Read more<KeyboardArrowDownIcon className={classes.downIcon} />
                  </CustomText> */}
                </div>
              </Paper>
            </>
          ) : null}
        </div>
      ))}

      </div>
    </div>
  );
};


export default Syllabus;