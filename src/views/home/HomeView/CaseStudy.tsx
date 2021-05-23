import React from 'react'
import type { FC } from 'react';
import { Card, CardContent, Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import CustomMainButton from 'components/CustomMainButton';
import IconWithText from 'components/IconWithText';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // backgroundImage: `url('/static/home/case_study_bg.png')`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'top',
    // backgroundRepeat: 'no-repeat',
    // height: 1500,
  },
  textWrapper: {
    marginTop: 15,
  },
  titleWrapper: {
    paddingTop: 176
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
  cardContent: {
    paddingTop: 35,
    paddingRight: 30,
    paddingLeft: 30
  },
  boxWrapper: {
    marginTop: 48
  },
  miniCart: {
    borderRadius: 15,
    background: '#FFF',
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
  readmoreWrapper: {
    marginTop: 30,
  },
  customCTAButton: {
    width: 150,
    height: 45,
    borderRadius: 50,
  },
  cardMedia: {
    width: '100%',
  },
  info: {
    marginTop: 12,
    display: 'flex',
    alignItems: 'center'
  },
  tag: {
    background: '#E9F9F0',
    borderRadius: 5,
    padding: '5px 10px',
    color: '#38CB89',
    width: 84,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '17px',
    textAlign: 'center',
    marginRight: 27,
  },
  iconWithText: {
    color: '#546681',
    letterSpacing: '0.1em',
    lineHeight: '17px',
    fontSize: 14,
    fontWeight: 'bold'
  },
}));

const cards = [
  {
    title: 'Why does intense learning work? The science',
    content: 'See how your brain retains information when under stress- and why it is better for long-term retention.',
    tag: 'Science',
    date: '10 Mar 2021',
  },
  {
    title: 'Why does intense learning work? The science',
    content: 'See how your brain retains information when under stress- and why it is better for long-term retention.',
    tag: 'Science',
    date: '09 Apr 2021',
  },
  {
    title: 'Why does intense learning work? The science',
    content: 'See how your brain retains information when under stress- and why it is better for long-term retention.',
    tag: 'Science',
    date: '12 Feb 2021'
  },
];

const CaseStudy: FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.titleWrapper}>
          <Typography className={classes.title}>BLOG & CASE STUDIES</Typography>
        </div>
        <div className={classes.textWrapper}>
          <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>Our Latest News & Updates</Typography>
          {/* <Typography variant="h2" color="textPrimary" className={classes.largeTitle}>Alunna classes.</Typography> */}
        </div>
        <div className={classes.boxWrapper}>
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className={classes.miniCart}>
                  <img
                    className={classes.cardMedia}
                    src="/static/home/card_media.png"
                    alt="Learning"
                  />
                  <CardContent className={classes.cardContent}>
                    <div>
                      <Typography className={classes.miniCartTitle}>{card.title}</Typography>
                      <Typography className={classes.miniCartDesc}>{card.content}</Typography>
                      <div className={classes.info}>
                        <Typography className={classes.tag}>{card.tag}</Typography>
                        <IconWithText
                          CIcon={'/static/home/date.svg'}
                          text={card.date}
                          className={classes.iconWithText}
                        />
                      </div>
                      <div className={clsx("d-flex align-items-center", classes.readmoreWrapper)}>
                        <CustomMainButton label="Read more" customClass={classes.customCTAButton}/>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudy;