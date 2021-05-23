import React from 'react';
import { useRouter } from 'next/router'
import { makeStyles, Theme, Button } from '@material-ui/core';
import CustomText from './CustomText';
import CustomMainButton from './CustomMainButton';
import clsx from 'clsx';
import CustomTextLarge from './CustomTextLarge';
import { RouterPathName } from 'constants/routes.constant';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  contentBottom: {
    marginTop: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '30%',
    paddingRight: '30%',
    paddingBottom: '25px'
  },
  btnContainer: {
    marginTop: '6%',
    justifyContent: 'space-between'
  },

  customBtn: {
    width: 170,
    height: 45
  },
  processBtn: {
    color: '#546681',
    padding: '13px 12.5px',
    borderRadius: '50px',
    textTransform: 'none',
    marginLeft: 32
  }
}));

const GotIdea = props => {
  const classes = useStyles();
  const history = useRouter();

  return (
    <div className={classes.contentBottom}>
      <CustomTextLarge>
        Got a course <span style={{ color: '#373BCE' }}>idea?</span>
      </CustomTextLarge>
      <div style={{ marginLeft: '10%', marginRight: '10%', marginTop: '4%' }}>
        <CustomText color="#546681" fontSize="15px">
          'Feel free to ping us at <b>team@alunna.io</b>. We value your input and are
          happy to make courses that help you!'
        </CustomText>
      </div>
      <div className={classes.btnContainer}>
        <CustomMainButton label={'Sign up'} customClass={classes.customBtn}  />
        <Button
          variant="outlined"
          className={clsx(classes.customBtn, classes.processBtn)}
          onClick={() => history.push(RouterPathName.Classes)}
        >
          See our courses
        </Button>
      </div>
    </div>
  );
};
export default GotIdea;
