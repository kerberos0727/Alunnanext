import React from 'react';
import { Button, makeStyles, Typography, withStyles } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/ExpandMore';

export interface HeaderDropdownItem {
  label: string;
  path?: string;
}

export interface HeaderTabProps {
  dropdown?: boolean;
  items?: HeaderDropdownItem[];
  label: string;
  focused?: boolean;
}

type Props = HeaderTabProps;

const ColorButton = withStyles(() => ({
  root: {
    height: '100%',
    borderRadius: 0,
    textTransform: 'none',
    '&:hover': {}
  }
}))(Button);

const HeaderTab: React.FC<Props> = (props: Props) => {
  const { label, dropdown = false, focused = false } = props;
  const classes = useStyles();
  const btnFocused: React.CSSProperties = {
    borderTop: '2px solid #4B4FE4'
  };
  const textFocused: React.CSSProperties = {
    color: '#4B4FE4'
  };

  const moreIcon: React.CSSProperties = {
    color: focused ? '#4B4FE4' : '#546681',
    marginLeft: 4
  };

  return (
    <div className={classes.wrapper}>
      <ColorButton style={focused ? btnFocused : {}}>
        <Typography className={classes.text} style={focused ? textFocused : {}}>
          {label}
        </Typography>
        {dropdown && <MoreIcon style={moreIcon} />}
      </ColorButton>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  text: {
    color: '#546681',
    fontSize: 18
  },
  textFocused: {
    color: '#4B4FE4',
    fontWeight: 'bold'
  }
}));

export default HeaderTab;
