import React from 'react'
import type { FC } from 'react';
import { Button, Card, CardContent, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import CustomMainButton from 'components/CustomMainButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',

    display: 'flex',
    marginBottom: 160,
    marginTop: 180
  },

  card: {
    width: '100%',
    background: 'linear-gradient(0deg, #EDEDFF, #EDEDFF), linear-gradient(180deg, #3B5AAF 6.22%, #292167 100%), #FFFFFF',
    borderRadius: 15,
  },
  cardContent: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    }
  },
  title: {
    fontSize: 46,
    lineHeight: '58px',
    fontWeight: 700,
  },
  descWrapper: {
    marginTop: 20,
  },
  description: {
    color: '#546681',
    fontSize: 17,
    lineHeight: '28px',

  },
  gridNoPadding: {
    paddingTop: '0!important',
    paddingBottom: '0!important',
  },
  teacherImg: {

  },
  btnWrapper: {
    marginTop: 40,
  },
  customCTAButton: {
    width: 170,
    height: 45,
    borderRadius: 50,
  },
  seeOurClassBtn: {
    marginLeft: 20,
    color: '#546681',
    background: '#fff',
    textTransform: 'none',
  }
}));

const BecomeTeacher: FC = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7} className={classes.gridNoPadding}>
              <img alt="become teacher" src="/static/home/teacher.png" className={classes.teacherImg} />
            </Grid>
            <Grid item xs={12} md={5} className="d-flex justify-content-center flex-column">
              <div className="d-flex align-items-center">
                <Typography variant="h2" color="textPrimary" className={classes.title}>Become</Typography>&nbsp;&nbsp;
                <Typography variant="h2" color="primary" className={classes.title}>a teacher</Typography>
              </div>
              <div className={classes.descWrapper}>
                <p className={classes.description}>Check out our innovative income model for</p>
                <p className={classes.description}>teaching classes and the encouragement in</p>
                <p className={classes.description}>teaching freedom on Alunna.</p>
              </div>
              <div className={classes.btnWrapper}>
                <CustomMainButton label="Sign up" customClass={classes.customCTAButton}/>
                <Button variant="outlined" className={clsx(classes.customCTAButton, classes.seeOurClassBtn)}>See our classes</Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BecomeTeacher;