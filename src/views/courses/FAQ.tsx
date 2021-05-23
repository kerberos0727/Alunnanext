import React from 'react';
import type { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, makeStyles, Typography } from '@material-ui/core';
import { Theme } from 'theme';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
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
  faqWrapper: {
    width: 750,
    marginTop: 40,
  },
  heading: {
    color: '#546681',
    fontSize: 17,
    lineHeight: '28px',
    fontWeight: 600
  },
  summary: {
    marginLeft: 20
  },
  icon: {
    fontSize: 22
  },
  accordion: {
    background: '#FFF',
    boxShadow: '0px 4px 25px rgba(11, 14, 112, 0.15)',
    borderRadius: 15,
    marginBottom: 20,
  },
  accordionDesc: {
    color: '#546681',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: '28px',
    marginLeft: 42,
  },
  accordionSummary: {
    '&.Mui-expanded': {
      '& div': {
        '& p': {
          color: '#4B4FE4'
        }
      }
    }
  },
  marginBottom20: {
    marginBottom: 20
  },
  widthUnset: {
    width: "unset"
  }
}));

type Props = {
  viewDeviceType?: number;
};

const FAQ: FC<Props> = ({viewDeviceType}) => {
  const classes = useStyles();
  const faqWrapper = classNames({
    [classes.faqWrapper]: true,
    [classes.widthUnset]: viewDeviceType === 2,
  });

  return (
    <div className={classes.root} id="faq">
      <div className={classes.section}>
        <Typography variant="h2" color="textPrimary" className={classes.sectionTitle}>FAQ</Typography>
      </div>
      <div className={faqWrapper}>
        <div className={classes.marginBottom20}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordionSummary}
            >
              <div className="d-flex align-items-center">
                <ExpandMoreIcon className={clsx(classes.heading, classes.icon)} />
                <Typography className={clsx(classes.heading, classes.summary)}>Can I only take one course at a time?</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordionDesc}>
                Nope! Feel free to take as many as you want. Be aware of the times, however, since our system could prevent you from double-booking course times.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={classes.marginBottom20}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1b-header"
              className={classes.accordionSummary}
            >
              <div className="d-flex align-items-center">
                <ExpandMoreIcon className={clsx(classes.heading, classes.icon)} />
                <Typography className={clsx(classes.heading, classes.summary)}>What are the refund rules?</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordionDesc}>
                We prorate refunds depending on time spent in the class. So, if you request a refund halfway through, you will receive half of the price you paid. Cloud elastic pricing!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={classes.marginBottom20}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1c-header"
              className={classes.accordionSummary}
            >
              <div className="d-flex align-items-center">
                <ExpandMoreIcon className={clsx(classes.heading, classes.icon)} />
                <Typography className={clsx(classes.heading, classes.summary)}>Is this a fully distanced course? Do I need to attend any classes in person?</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordionDesc}>
                This is an entirely live class, and you must have your camera enabled. This is integral to our community and facilitates the strong connections that we have found in our students. We provide recordings in the event that you have something come up.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={classes.marginBottom20}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1d-header"
              className={classes.accordionSummary}
            >
              <div className="d-flex align-items-center">
                <ExpandMoreIcon className={clsx(classes.heading, classes.icon)} />
                <Typography className={clsx(classes.heading, classes.summary)}>
                  Do I need to take the courses in a specific order?
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordionDesc}>
                You are not required to, but we do provide recommendations based on your personal experience. If you find that you are struggling too much, please let us know and we can figure out an alternative roadmap for you.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={classes.marginBottom20}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1e-header"
              className={classes.accordionSummary}
            >
              <div className="d-flex align-items-center">
                <ExpandMoreIcon className={clsx(classes.heading, classes.icon)} />
                <Typography className={clsx(classes.heading, classes.summary)}>
                  What will I be able to do upon completing a course?
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordionDesc}>
                We have an extensive post-graduate network, where you can meet people who work at your dream companies, or find people to continue to build with. We provide resources for showing off your projects upon completion.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

      </div>
    </div>
  );
};


export default FAQ;