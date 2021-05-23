import React from 'react';
import type { FC } from 'react';
import CustomMainButton from './CustomMainButton';
import { makeStyles } from '@material-ui/core';
import { Theme } from 'theme';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 750
  },
  customBtn: {
    background: '#4B4FE4',
    boxShadow: 'unset',
    width: 44,
    height: 44,
    minWidth: '44px',
    '&:disabled': {
      background: 'unset',
      border: '1px solid #546681',
      borderRadius: '50%',
    }
  },
  page: {
    color: '#546681',
    fontSize: 17,
    lineHeight: '28px',

  },
  active: {
    color: '#4B4FE4',
    fontWeight: 'bold'
  },
  pageNumWrapper: {
    padding: '0 20px'
  },
  pageNumber: {
    '&:not(:first-child)': {
      marginLeft: 25
    }
  }
}));

type Props = {
  currentPage: number;
  displayPages: number[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

const Pagination: FC<Props> = ({ currentPage, displayPages, hasNextPage, hasPreviousPage }) => {
  const classes = useStyles();

  const handleBack = () => {

  };

  const handleNext = () => {

  };

  return (
    <div className={classes.root}>
      <CustomMainButton
        label={'←'}
        onClick={() => handleBack()} customClass={classes.customBtn}
        disabled={hasNextPage}
      />
      <div className={classes.pageNumWrapper}>
        {displayPages.map((dPage) => (
          <span className={clsx(classes.pageNumber, currentPage === dPage ? classes.active : '')} key={dPage}>{dPage + 1}</span>
        ))}
      </div>
      {/* <span className={classes.count}>{ index + 1 } / {intro.length ?? 0}</span> */}
      <CustomMainButton
        label={'→'}
        onClick={() => handleNext()} customClass={classes.customBtn}
        disabled={hasPreviousPage}
      />
    </div>
  );
};

export default Pagination;
