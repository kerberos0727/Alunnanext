import React from 'react';
import type { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Theme } from 'theme';
import { Rating } from '@material-ui/lab';
import classNames from "classnames";


interface IFeedback {
  name: string;
  rating: number;
  imageUrl: string;
  comment: string;
  createdAt: string;
}

type Props = {
  feedback: IFeedback;
  viewDeviceType?: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#fff',
    padding: 35,
    width: 750,
    boxShadow: '0px 4px 25px rgba(11, 14, 112, 0.15)',
    borderRadius: 15,
    marginBottom: 20
  },
  feedbackWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  profilePicture: {
    width: 72,
    height: 72,
  },
  feedbackInfo: {
    marginLeft: 20,
  },
  ratingWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  commentWrapper: {
    marginLeft: 92,
    '& p': {
      color: '#546681',
      fontSize: 17,
      lineHeight: '28px',
    }
  },
  rating: {

  },
  name: {
    color: '#0A1F44',
    fontSize: 17,
    lineHeight: '28px',
    fontWeight: 600,
  },
  createdAt: {
    marginLeft: 10,
    color: '#A6A9C2',
    fontSize: 17,
    lineHeight: '28px',
  },
  mobileRoot: {
    padding: 15,
    width: "100%"
  },
  margin5: {
    margin: "20px 5px"
  },
  font14: {
    fontSize: 14
  }
}));

const FeedbackCard: FC<Props> = ({ viewDeviceType, feedback }) => {
  const { name, rating, imageUrl, comment, createdAt } = feedback;

  const classes = useStyles();
  const root = classNames({
    [classes.root]: true,
    [classes.mobileRoot]: viewDeviceType === 2,
  }); 
  const commentWrapper = classNames({
    [classes.commentWrapper]: true,
    [classes.margin5]: viewDeviceType === 2,
  });
  const createdAtClass = classNames({
    [classes.createdAt]: true,
    [classes.font14]: viewDeviceType === 2,
  });

  return (
    <div className={root}>
      <div className={classes.feedbackWrapper}>
        <img
          alt="profile"
          className={classes.profilePicture}
          src={imageUrl}
        />
        <div className={classes.feedbackInfo}>
          <Typography className={classes.name}>{name}</Typography>
          <div className={classes.ratingWrapper}>
            <Rating name="read-only" value={rating} readOnly className={classes.rating} />
            <div className={createdAtClass}>{createdAt}</div>
          </div>
        </div>
      </div>
      <div className={commentWrapper}>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;