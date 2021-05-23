import React from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import CustomMainButton from 'components/CustomMainButton';
import classNames from "classnames";
import Link from 'next/link';

const useStyles = makeStyles(theme => createStyles({
  root: {
    width: 444,
    margin: 'auto',
    marginTop: 140,
    textAlign: 'center',
  },
  title: {
    fontSize: 46,
    fontWeight: 600,
    lineHeight: '58px',
    '& > span': {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit'
    }
  },
  desc: {
    fontSize: 17,
    lineHeight: '28px',
    color: '#546681',
    margin: '22.4px 0px',
  },
  customCTAButton: {
    width: 170,
    height: 45,
    borderRadius: 50,
  },
  seeOurProcessBtn: {
    marginLeft: 20,
    color: '#546681',
    background: '#fff',
    textTransform: 'unset'
  },
  w100: {
    width: "100%",
    "& button": {
      width: "100%"
    }
  },
  mobileView: {
    marginTop: 30,
    marginLeft: 0
  }
}))

const CourseIdea = (props) => {
  const classes = useStyles();
  const openSignup = () => {
    props.openRegister();
  };
  const root = classNames({
    [classes.root]: true,
    [classes.w100]: props.viewDeviceType===2,
  });
  const processBtn = classNames({
    [classes.customCTAButton]: true,
    [classes.seeOurProcessBtn]: true,
    [classes.mobileView]: props.viewDeviceType===2,
  });
  return (
    <Container>
      <div className={root}>
        <Typography
          className={classes.title}
          variant="h2"
          color="textPrimary"
        >
          Got a course <Typography component="span" color="primary">idea?</Typography>
        </Typography>
        <Typography className={classes.desc}>
          Feel free to ping us at&nbsp;
          <Link href="mailto:team@alunna.io">
            team@alunna.io.
          </Link>&nbsp;
          We value your input and are happy to make courses that help you!
        </Typography>
        <Box mt={3}>
          <CustomMainButton label="Sign up" customClass={classes.customCTAButton} onClick={() => openSignup()} />
            <Link href="/classesView">
              <Button variant="outlined" className={processBtn}>
                  See our courses
              </Button>
            </Link>
        </Box>
      </div>
    </Container>
  );
}

export default CourseIdea;
