import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  Typography,
  Container,
  Theme
} from '@material-ui/core';
import Link from 'next/link';

interface CompleteAccountSetupHeaderProps {
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
    justifyContent: 'space-between',
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

const CompleteAccountSetupHeader: FC<CompleteAccountSetupHeaderProps> = ({ ...rest }) => {
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
        <div className={clsx("d-flex justify-content-center", classes.loginWrapper)}>
          <Typography className={classes.loginText}>I'm already a member, &nbsp;</Typography>
          <Typography>
            <Link
              // component={RouterLink}
              href="/"
              // variant="body2"
              // color="primary"
              // className={classes.loginLink}
            >
              Log in
            </Link>
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default CompleteAccountSetupHeader;