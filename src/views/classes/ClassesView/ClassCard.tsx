import React from 'react';
// import moment from 'moment';
import clsx from 'clsx';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// import CustomMainButton from 'components/CustomMainButton';
// import { useHistory } from 'react-router';
import { RouterPathName } from 'constants/routes.constant';

interface Props {
    id: any;
    imgSrc?: string;
    title?: string;
    description?: string;
    startDate?: any;
    learningWeeks?: number;
    availablePlaces?: number;
}

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid #D6D8E7',
        borderRadius: 15,
        boxSizing: 'border-box',
        height: 707,
        display: 'flex',
        flexDirection: 'column',
        cursor: "pointer",
        transition: ".4s",
        "&:hover": {
            // -webkit-transform: "translate(0,-6px)",
            // -ms-transform: "translate(0,-6px)",
            transform: "translate(0,-10px)"
        }
    },
    media: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 220,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    content: {
        padding: 25,
        flex: 1,
        overflow: 'hidden',
    },
    actions: {
        display: 'block',
        padding: '0px 25px 25px 25px',
    },
    bgIcon: {
        // height: 150,
        height: "100%"
    },
    title: {
        margin: '16px 0px',
        fontSize: 24,
        lineHeight: '29px',
        fontWeight: 600,
    },
    description: {
        fontSize: 17,
        lineHeight: '28px',
        color: '#546681',
    },
    clock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        backgroundColor: '#EEF0FF',
        borderRadius: 10,
        fontSize: 14,
        lineHeight: '17px',
        letterSpacing: '10%',
        fontWeight: 700
    },
    clockIcon: {
        height: 17,
        margin: 'auto 0'
    },
    clockText: {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        fontWeight: 'inherit',
    },
    clockTextPrimary: {
        // margin: '0px 8px',
        margin: 'auto 8px'
    },
    clockTextSecondary: {
        color: '##546681',
        fontWeight: 400,
        margin: 'auto 0'
    },
    btn: {
        marginTop: 16,
    },
    actionIcons: {
        marginBottom: 16,
    },
    icon: {
        height: 14,
        marginRight: 8
    }
}));

const ClassCard = (props: Props) => {
    // const history = useHistory();
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={8} onClick={() => window.location.href = RouterPathName.Courses + '/' + props.id}>
            <CardMedia
                className={classes.media}
                // image="/static/classes/card-bg.png"
            >
                <img className={classes.bgIcon} src={props.imgSrc} alt="Background" />
            </CardMedia>
            <CardContent className={classes.content}>
                {props.startDate && (
                    <div className={classes.clock}>
                        <img className={classes.clockIcon} src="/static/classes/clock.svg" alt="clock" />
                        <Typography
                            className={clsx(classes.clockText, classes.clockTextPrimary)}
                            color="primary"
                            component="span"
                        >
                            Start date:
                        </Typography>
                        <Typography
                            className={clsx(classes.clockText, classes.clockTextSecondary)}
                            component="span"
                            color="textSecondary"
                        >
                            {props.startDate}
                        </Typography>
                    </div>
                )}
                <Typography className={classes.title} variant="h4" color="textPrimary">
                    {props.title}
                </Typography>
                <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                <div className={classes.actions}>

                </div>
            </CardContent>
            <CardActions className={classes.actions}>
                <div className={classes.actionIcons}>
                    {props.learningWeeks !== undefined && (
                        <Box alignItems="center" display="flex">
                            <img className={classes.icon} src="/static/classes/calendar.svg" alt="Calendar" />
                            <Typography variant="body2" color="textSecondary">
                                {props.learningWeeks} learning weeks
                            </Typography>
                        </Box>
                    )}
                    {props.availablePlaces !== undefined && (
                        <Box alignItems="center" display="flex">
                            <img className={classes.icon} src="/static/classes/user.svg" alt="User" />
                            <Typography variant="body2" color="textSecondary">
                                {props.availablePlaces} places left
                            </Typography>
                        </Box>
                    )}
                </div>

                {/* <CustomMainButton 
                    label="Learn more" 
                    className={classes.btn} 
                    onClick={() => history.push(RouterPathName.Courses + '/' + props.id)}
                /> */}
            </CardActions>
        </Card>
    );
};

export default ClassCard;
