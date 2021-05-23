import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import moment from 'moment';
import CustomMainButton from '../../../../components/CustomMainButton';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { RouterPathName } from 'constants/routes.constant';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    width: '100%',
    borderRadius: 12,
    height: 586,
    marginBottom: '25px',
  },
  media: {
    height: Math.ceil(300 * 0.58),
  },
  startDateWrapper: {
    borderRadius: 6,
    background: '#EEF0FF',
    display: 'flex',
    width: 'fit-content',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 16,
  },
  startDateTitle: {
    fontWeight: 600,
    color: '#4B4FE4',
    marginRight: 4,
    fontSize: 12,
  },
  startDateInfo: {
    fontWeight: 600,
    color: '#546681',
    fontSize: 12,
  },
  name: {
    fontWeight: 600,
    marginBottom: 16,
  },
  moreInfo: {
    marginTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    bottom: 122,
    width: '100%',
  },
  cardContent: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 250,
  },
  btn: {
    width: 150,
    height: 40,
    borderRadius: 20,
    textTransform: 'none',
    boxShadow: ' 0px 4px 25px rgba(72, 77, 255, 0.4)',
  },
  icon: {
    marginRight: 8,
  },
  iconRow: {
    marginTop: 4,
  },
});

export interface CourseProps {
  id: string;
  imgSrc: string;
  startDate: string;
  title: string;
  description: string;
  learningWeeks: number;
  availablePlaces: number;
}

export default function CourseCard(props: CourseProps) {
  const classes = useStyles();
  const history = useRouter();

  return (
    <Card raised className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.imgSrc}
        title={props.title}
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.startDateWrapper}>
          <Typography className={classes.startDateTitle}>
            Start date:
          </Typography>
          <Typography className={classes.startDateInfo}>
            {props.startDate}
          </Typography>
        </div>

        <Typography className={classes.name} variant="h3">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <div className={classes.moreInfo}>
        <div className={clsx('d-flex align-items-center', classes.iconRow)}>
          <img
            src="/static/images/calendar_2.svg"
            alt="icon"
            className={classes.icon}
          />
          <Typography variant="body2" color="textSecondary">
            {props.learningWeeks} weeks
          </Typography>
        </div>
        <div className={clsx('d-flex align-items-center', classes.iconRow)}>
          <img
            src="/static/images/three_users.svg"
            alt="icon"
            className={classes.icon}
          />
          <Typography variant="body2" color="textSecondary">
            {props.availablePlaces} places left
          </Typography>
        </div>
      </div>
      <CardActions
        style={{ position: 'absolute', bottom: 42, paddingLeft: 20 }}
      >
        <CustomMainButton
          label="Learn more"
          className={classes.btn}
          onClick={() => history.push(RouterPathName.Courses + '/' + props.id)}
        />
      </CardActions>
    </Card>
  );
}
