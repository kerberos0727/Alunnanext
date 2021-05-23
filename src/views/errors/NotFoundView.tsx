import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'theme';
import Page from 'components/Page';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#333',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 30,
    paddingTop: 80,
    paddingBottom: 80
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto'
  }
}));

const NotFoundView: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  // const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page
      className={classes.root}
      title="404: Not found"
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant='h3'
          color="textPrimary"
        >
          404: The page you are looking for isn’t here
        </Typography>
        <Typography
          align="center"
          variant="subtitle2"
          color="textSecondary"
        >
          You either tried some shady route or you
          came here by mistake. Whichever it is, try using the navigation.
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <img
            alt="Under development"
            className={classes.image}
            src="/static/images/undraw_page_not_found_su7k.svg"
          />
        </Box>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
        >
          <Link
            // color="secondary"
            // component={RouterLink}
            href="/"
          // variant="outlined"
          >
            Back to home
          </Link>
        </Box>
      </Container>
    </Page>
  );
};

export default NotFoundView;
