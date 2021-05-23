import React from 'react'
import type { FC } from 'react';
import Link from 'next/link';
import { Card, CardContent, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#fff',
    background: 'linear-gradient(0deg, #EDEDFF, #EDEDFF), linear-gradient(180deg, #3B5AAF 6.22%, #292167 100%), #FFFFFF',

    border: '1px solid #D6D8E7',
    borderRadius: 15,
  },
  textWrapper: {
    marginTop: 15,
  },
  title: {
    fontSize: 14,
    lineHeight: '17px',
    color: '#4B4FE4',
    fontWeight: 700,

  },
  largeTitle: {
    fontWeight: 'bold',
    fontSize: 46,
    lineHeight: '58px',

  },
  card: {
    padding: '80px 45px',
    background: 'linear-gradient(0deg, #EDEDFF, #EDEDFF), linear-gradient(180deg, #3B5AAF 6.22%, #292167 100%), #FFFFFF',

    border: '1px solid #D6D8E7',
    borderRadius: 15,
  },
  cardContent: {
    padding: 0,
  },
  boxWrapper: {
    marginTop: 48
  },
  miniCart: {
    padding: '50px 25px',
    borderRadius: 10,
    background: '#F8F8FF',
  },
  miniCartTitle: {
    color: '#0A1F44',
    fontSize: 24,
    lineHeight: '29px',
    fontWeight: 'bold',
  },
  miniCartDesc: {
    fontSize: 17,
    lineHeight: '28px',
    color: '#546681',
    marginTop: 12,
  },
  learnMore: {
    color: '#4B4FE4',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '19px',
    marginRight: 12,
  },
  learnMoreWrapper: {
    marginTop: 15,
  }
}));

const cards = [
  {
    title: 'Strict class timing',
    content: 'Classes are limited in length and meeting time so you can make the most of your lecture and lab time.'
  },
  {
    title: 'Project-based learning',
    content: 'You will learn via the de facto best way to learn-by building. Apply theories by getting your hands dirty.'
  },
  {
    title: 'Focus on the hard stuff',
    content: 'We believe that the best problems to solve are the hard ones. Learn technical skills with other members.'
  },
];

interface OwnProps {
  viewDeviceType?: number;
}

const Mission: FC<OwnProps> = ({viewDeviceType}) => {
  const classes = useStyles();

  if(viewDeviceType < 2)
  return (
    <Container>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          
          <div className={classes.boxWrapper}>
            <Grid container spacing={4}>
              {cards.map((card, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card className={classes.miniCart}>
                    <CardContent className={classes.cardContent}>
                      <div>
                        <Typography className={classes.miniCartTitle}>{card.title}</Typography>
                        <Typography className={classes.miniCartDesc}>{card.content}</Typography>
                        <div className={clsx("d-flex align-items-center", classes.learnMoreWrapper)}>
                          <Link href="/howWork">
                            <Typography className={classes.learnMore}>Learn more</Typography>
                          </Link>
                          <img alt="learn more" src="/static/home/arrow_right.svg" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </CardContent>
      </Card>
    </Container>
    );
  else
    return (
      <Container>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            
            <div className={classes.boxWrapper}>
              <Grid container spacing={4}>
                {cards.map((card, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card className={classes.miniCart}>
                      <CardContent className={classes.cardContent}>
                        <div>
                          <Typography className={classes.miniCartTitle}>{card.title}</Typography>
                          <Typography className={classes.miniCartDesc}>{card.content}</Typography>
                          <div className={clsx("d-flex align-items-center", classes.learnMoreWrapper)}>
                            <Typography className={classes.learnMore}>Learn more</Typography>
                            <img alt="learn more" src="/static/home/arrow_right.svg" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </CardContent>
        </Card>
      </Container>
    );
};

export default Mission;