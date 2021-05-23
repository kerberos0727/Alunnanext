import { ReduxDispatch } from 'models/action.model';
import { HttpErrorResponseModel } from 'models/error.model';
import { ICourse } from 'models/course.model';

import * as ActionUtils from 'utils/action.util';
import * as CourseEffects from 'effects/course.effect';

export type ActionUnion = undefined | HttpErrorResponseModel | ICourse[] | ICourse;
export const REQUEST_COURSES: string = 'CoursesAction.REQUEST_COURSES';
export const REQUEST_COURSES_FINISHED: string = 'CoursesAction.REQUEST_COURSES_FINISHED';

export const requestCourses = (): any => {
    return async (dispatch: ReduxDispatch<ActionUnion>): Promise<void> => {
        await ActionUtils.createThunkEffect<ICourse[]>(dispatch, REQUEST_COURSES, CourseEffects.requestCourses);
    };
};
export const REQUEST_COURSE_DETAIL: string = 'CoursesAction.REQUEST_COURSE_DETAIL';
export const REQUEST_COURSE_DETAIL_FINISHED: string = 'CoursesAction.REQUEST_COURSE_DETAIL_FINISHED';

export const requestCourse = (courseId: string) => {
    return async (dispatch: ReduxDispatch<ActionUnion>) => {
        return await ActionUtils.createThunkEffect<ICourse | HttpErrorResponseModel>(dispatch, REQUEST_COURSE_DETAIL, CourseEffects.requestCourse, courseId);
    };
};
