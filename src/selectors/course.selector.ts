import { createSelector } from 'reselect';
import { IStoreState } from 'reducers/root.reducer';
import { ICourseState } from 'reducers/course.reducer';

// export const selectCourses: ParametricSelector<IStoreState, null, ICourse[]> = createSelector(
//     (state: IStoreState) => state.courses,
//     (courseState: ICourseState) => courseState.courses
// );

export const createCoursesSelector = () => {
    return createSelector(
        (state: IStoreState) => state.courses,
        (courseState: ICourseState) => courseState.courses
    );
}