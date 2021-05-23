import React from 'react';
import type { FC } from 'react';
import { Button, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import { Theme } from 'theme';
import { feedback } from './feedbackMock';
import clsx from 'clsx';
import { Rating } from '@material-ui/lab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FeedbackCard from './FeedbackCard';
import Pagination from 'components/Pagination';
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 120,
  },
  section: {
    width: 750,
    borderBottom: '1px solid #DADCEC',
    paddingBottom: 10,
  },
  sectionTitle: {
    lineHeight: '58px',
    fontSize: 46,
    fontWeight: 'bold',
  },
  teacherCard: {
    marginTop: 40,
  },
  overall: {
    display: 'flex',
    alignItems: 'center',
    width: 750,
  },
  overallFilter: {
    marginLeft: 'auto',
  },
  ratingScore: {
    color: '#546681',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: '29px',
  },
  overAllScore: {
    margin: '40px 0'
  },
  rating: {
    marginLeft: 10,
    marginRight: 20
  },
  numOfReviews: {
    color: '#A6A9C2',
    fontSize: 17,
    lineHeight: '28px',
    marginLeft: 30
  },
  anchor: {
    textTransform: 'none',
    color: '#546681',
    fontSize: 16,
    lineHeight: '26px',
    '& .MuiButton-label': {
      fontWeight: 'normal',

    }
  },
  arrow: {
    marginLeft: -4,
    zIndex: 2,
    fontSize: 20,
  },
  opening: {
    color: '#4B4FE4',
  },
  closing: {
    color: '#546681',
  },
  menu: {
    marginTop: 52,
    '& .MuiMenu-paper': {
      border: '1px solid #DADCEC',
      boxShadow: '0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12)',
      borderRadius: '10px',
      '& .MuiList-padding': {
        paddingTop: 0,
        paddingBottom: 0,
        '& .MuiMenuItem-root':{
          paddingTop: 12,
          paddingBottom: 12,
          '&:hover': {
            background: '#EEF0FF',
          }
        }
      }
    }
  },
  w100: {
    width: "100%"
  },
  displayFlex: {
    display: "flex"
  },
  floatLeft: {
    float: "left",
  },
  marginBottom20: {
    marginBottom: 20
  }
}));

type Props = {
  viewDeviceType?: number;
};

const Feedback: FC<Props> = ({viewDeviceType}) => {
  const classes = useStyles();

  const [filterAnchorEl, setFilterAnchorEl] = React.useState(null);

  const handleClickFilter = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleCloseFilterAnchor = () => {
    setFilterAnchorEl(null);
  };
  const section = classNames({
    [classes.section]: true,
    [classes.w100]: viewDeviceType === 2,
  });
  const overall = classNames({
    [classes.section]: true,
    [classes.w100]: viewDeviceType === 2,
  }); 
  const overAllScore = classNames({
    [classes.overAllScore]: true,
    [classes.displayFlex]: viewDeviceType < 2,
    [classes.w100]: viewDeviceType === 2,
  });
  const ratingScore = classNames({
    [classes.ratingScore]: true,
    [classes.floatLeft]: viewDeviceType === 2,
  });
  const rating = classNames({
    [classes.rating]: true,
    [classes.floatLeft]: viewDeviceType === 2,
  });
  
  const ratingText = classNames({
    [classes.ratingScore]: true,
    [classes.marginBottom20]: viewDeviceType === 2,
  });

  return (
    <div className={classes.root} id="feedback">
      <div className={section}>
        <Typography variant="h2" color="textPrimary" className={classes.sectionTitle}>Student's feedback</Typography>
      </div>
      <div className={overall}>
        <div className={clsx("align-items-center", overAllScore)}>
          <Typography className={ratingText}>Course rating:&nbsp;&nbsp;</Typography>
          <Typography className={ratingScore}>4.8</Typography>
          <Rating name="read-only" value={4} readOnly className={rating} />
          {viewDeviceType === 2? (<Typography className={classes.numOfReviews}>560 reviews</Typography>) : ("")}
        </div>
        {viewDeviceType < 2? (<Typography className={classes.numOfReviews}>560 reviews</Typography>) : ("")}
        <div className={classes.overallFilter}>
          <Button
            className={clsx(classes.anchor)}
            onClick={handleClickFilter}
            endIcon={filterAnchorEl
              ? <KeyboardArrowUpIcon className={clsx(classes.arrow, classes.opening)} />
              : <KeyboardArrowDownIcon className={clsx(classes.arrow, classes.closing)} />
            }
          >
            All
          </Button>
          <Menu
            anchorEl={filterAnchorEl}
            keepMounted={false}
            open={Boolean(filterAnchorEl)}
            onClose={handleCloseFilterAnchor}
            className={classes.menu}
          >
            <MenuItem>5 stars</MenuItem>
            <MenuItem>4 stars</MenuItem>
            <MenuItem>3 stars</MenuItem>
            <MenuItem>2 stars</MenuItem>
            <MenuItem>1 stars</MenuItem>
          </Menu>
        </div>
      </div>
      <div>
        {feedback.map((f, idx) => (
          <FeedbackCard feedback={f} key={idx} viewDeviceType={viewDeviceType} />
        ))}
      </div>
      {viewDeviceType < 2 ? (
        <div>
          <Pagination
            currentPage={0}
            displayPages={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
            hasPreviousPage={false}
            hasNextPage={true}
          />
        </div>
        ) :
        ("")
      }
      
    </div>
  );
};


export default Feedback;