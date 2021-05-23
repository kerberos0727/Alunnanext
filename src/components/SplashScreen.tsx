import React from 'react';
import type { FC } from 'react';
import {
  Box,
  LinearProgress,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: 30,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2000
  }
}));

const SlashScreen: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
}

export default SlashScreen;
