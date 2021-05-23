import React from 'react';
import type { FC } from 'react';
import { makeStyles, Table, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { Theme } from 'theme';
import clsx from 'clsx';
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  profilePictureWrapper: {
    width: 190,
    height: 190,

  },
  profilePicture: {
    width: "100%",
    borderRadius: "50%",
  },
  info: {
    marginLeft: 57
  },
  teacherName: {
    color: '#0A1F44',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: '29px',
  },
  teacherTitle: {
    color: '#546681',
    fontSize: 17,
    lineHeight: '28px',
    marginTop: 2
  },
  icon: {
    marginRight: 8
  },
  cellLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  cellHeader: {
    width: '22%',
  },
  cellValue: {
    fontSize: 16,
    lineHeight: '19px',
    color: "#546681",
  },
  cellTypo: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '17px',
  },
  table: {
    width: 503,
    marginTop: 16
  },
  cellWithNoBorder: {
    borderBottom: 'none',
  },
  cell: {
    padding: 0,
    marginBottom: 11,
  },
  displayBlock: {
    display: "block"
  },
  infoMargin: {
    marginLeft: 0,
    marginTop: 20 
  },
}));

interface ITeacher {
  name: string;
  title: string;
  institution: string;
  numOfStudents: string;
  numOfCourses: string;
  profilePic: string;
}

type Props = {
  teacher: any;
  viewDeviceType: number;
};

const TeacherCard: FC<Props> = ({ viewDeviceType, teacher }) => {
  const classes = useStyles();
  const { name, title, institution, number_of_students, number_of_courses, profile_image_url } = teacher;
  const root = classNames({
    [classes.root]: true,
    [classes.displayBlock]: viewDeviceType === 2,
  }); 
  const info = classNames({
    [classes.info]: true,
    [classes.infoMargin]: viewDeviceType === 2,
  });

  return (
    <div className={root}>
      <div className={classes.profilePictureWrapper}>
        <img
          alt="profile"
          className={classes.profilePicture}
          src={profile_image_url}
        />
      </div>
      <div className={info}>
        <Typography className={classes.teacherName}>{name}</Typography>
        <Typography className={classes.teacherTitle}>{title}</Typography>
        <div>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell className={clsx(classes.cellHeader, classes.cellWithNoBorder, classes.cell)}>
                  <div className={classes.cellLabel}>
                    <img
                      alt="icon"
                      className={classes.icon}
                      src="/static/images/courses/institution.svg"
                    />
                    <Typography className={classes.cellTypo}>Institution:</Typography>
                  </div>
                </TableCell>
                <TableCell className={clsx(classes.cellWithNoBorder, classes.cell)}>
                  <Typography className={clsx(classes.cellValue)}>{institution}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={clsx(classes.cellHeader, classes.cellWithNoBorder, classes.cell)}>
                  <div className={classes.cellLabel}>
                    <img
                      alt="icon"
                      className={classes.icon}
                      src="/static/images/courses/three_users.svg"
                    />
                    <Typography className={classes.cellTypo}>Students:</Typography>
                  </div>
                </TableCell>
                <TableCell className={clsx(classes.cellWithNoBorder, classes.cell)}>
                  <Typography className={clsx(classes.cellValue)}>{number_of_students}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={clsx(classes.cellHeader, classes.cellWithNoBorder, classes.cell)}>
                  <div className={classes.cellLabel}>
                    <img
                      alt="icon"
                      className={classes.icon}
                      src="/static/images/courses/courses.svg"
                    />
                    <Typography className={classes.cellTypo}>Courses:</Typography>
                  </div>
                </TableCell>
                <TableCell className={clsx(classes.cellWithNoBorder, classes.cell)}>
                  <Typography className={clsx(classes.cellValue)}>{number_of_courses}</Typography>
                </TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell className={clsx(classes.cell)}>
                <div className={classes.cellLabel}>
                    <img
                      alt="icon"
                      className={classes.icon}
                      src="/static/images/courses/three_users.svg"
                    />
                    <Typography>Students:</Typography>
                  </div>
                </TableCell>
                <Typography className={classes.cellValue}>{numOfStudents}</Typography>
              </TableRow>
              <TableRow>
                <TableCell className={clsx(classes.cell)}>
                  <div className={classes.cellLabel}>
                    <img
                      alt="icon"
                      className={classes.icon}
                      src="/static/images/courses/courses.svg"
                    />
                    <Typography>Courses:</Typography>
                  </div>
                </TableCell>
                <Typography className={classes.cellValue}>{numOfCourses}</Typography>
              </TableRow> */}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};


export default TeacherCard;