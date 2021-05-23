import React from 'react';
import type { FC } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Theme } from 'theme';
// import { teachers } from './teacherMock';
import TeacherCard from './TeacherCard';
import { useSelector } from 'react-redux';
import { IStoreState } from 'reducers/root.reducer';

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
}));

type Props = {
  viewDeviceType?: number;
};

const Teachers: FC<Props> = ({ viewDeviceType }) => {
  const classes = useStyles();
  const courseDetail = useSelector(
    (state: IStoreState) => state.courses.course
  );
  const teacher = courseDetail.teacher;

  return (
    <div className={classes.root} id="teachers">
      <div className={classes.section}>
        <Typography variant="h2" color="textPrimary" className={classes.sectionTitle}>Teacher</Typography>
      </div>
      {/* {teachers.map((teacher, idx) => (
        <div className={classes.teacherCard} key={idx}>
          <TeacherCard teacher={teacher} viewDeviceType={viewDeviceType}/>
        </div>
      ))} */}
      {teacher && (
        <div className={classes.teacherCard}>
          <TeacherCard teacher={teacher} viewDeviceType={viewDeviceType}/>
        </div>
      )}
    </div>
  );
};


export default Teachers;