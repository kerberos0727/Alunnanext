import React from 'react';
import type { FC } from 'react';
import {
  makeStyles,
  Container,
  Theme
} from '@material-ui/core';
import Link from 'next/link';

interface TeacherQuestionHeaderProps {
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 100,
    paddingBottom: 20,
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
  },
  bannerChip: {
    marginRight: 20
  },
  cardContent: {

  },
  logo: {

  },
  logoLink: {

  },
  loginWrapper: {

  },
  loginText: {
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
  },
  loginLink: {
    fontSize: 16,
    lineHeight: '26px',
    fontWeight: 'bold',
  },
}));

const TeacherQuestionHeader: FC<TeacherQuestionHeaderProps> = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container
        className={classes.cardContainer}
        maxWidth="lg"
      >
        <Link
          // component={RouterLink}
          href="/"
          // variant="body2"
          // color="primary"
          // className={classes.logoLink}
        >
          <img
            alt="Logo"
            className={classes.logo}
            src="/static/images/logo.svg"
          />
        </Link>
      </Container>
    </div>
  );
}

export default TeacherQuestionHeader;