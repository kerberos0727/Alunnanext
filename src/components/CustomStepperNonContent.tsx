import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import CustomText from './CustomText';
import { IStepper } from 'types/stepper';
import CustomTextLarge from './CustomTextLarge';
const useStyles = makeStyles((theme: Theme) => ({
  root: {},
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
  }
}));
interface Props {
  contents: IStepper[];
}
const CustomStepperNonContent = (props: Props) => {
  const { contents } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {contents.map((content, index) => (
        <div>
          {index !== 0 && <div className={classes.upperLine} />}
          {!content.button && (
            <div className={classes.stepWrapper}>
              <div className={classes.backgroundButton}>
                <div className={classes.roundedButton}>
                  <p className={classes.stepNumber}>{content.step}</p>
                </div>
              </div>
              <div>
                <CustomTextLarge
                  style={{
                    fontSize: '24px',
                    lineHeight: '29px',
                    marginLeft: '15px'
                  }}
                >
                  {content.title}
                </CustomTextLarge>
                <CustomText color={'#546681'} styles={{ marginLeft: '15px' }}>
                  {content.content}
                </CustomText>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default CustomStepperNonContent;
