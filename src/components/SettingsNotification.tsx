import React, {
  useState,
  useEffect
} from 'react';
import type { FC } from 'react';
import Cookies from 'js-cookie';
import {
  Box,
  Button,
  Paper,
  Portal,
  Typography,
  makeStyles
} from '@material-ui/core';
import useSettings from 'hooks/useSettings';
import type { Theme } from 'theme';
import { THEMES } from 'constants/theme.constant';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 420,
    position: 'fixed',
    top: 0,
    right: 0,
    margin: 30,
    outline: 'none',
    zIndex: 2000,
    padding: 20
  }
}));

const SettingsNotification: FC = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState<boolean>(false);
  const { saveSettings } = useSettings();

  const handleSwitch = (): void => {
    saveSettings({ theme: THEMES.LIGHT });
    Cookies.set('settingsUpdated', 'true');
    setOpen(false);
  };

  const handleClose = (): void => {
    Cookies.set('settingsUpdated', 'true');
    setOpen(false);
  };

  useEffect(() => {
    const settingsUpdated = Cookies.get('settingsUpdated');

    if (!settingsUpdated) {
      setOpen(true);
    }
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Paper
        className={classes.root}
        elevation={3}
      >
        <Typography
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          Settings Updated
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          We automatically updated your settings.
          You change the settings any time from your dashboard settings.
        </Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
        >
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleSwitch}
          >
            Switch
          </Button>
        </Box>
      </Paper>
    </Portal>
  );
};

export default SettingsNotification;
