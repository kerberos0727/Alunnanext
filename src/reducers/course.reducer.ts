import { IAction } from 'models/action.model';
import { ICourse } from 'models/course.model';
import { withBaseReducer } from 'utils/reducer.util';
import * as CourseActions from 'actions/courses.action';

export interface ICourseState {
    courses: ICourse[];
    course?: ICourse;
}

const initialState: ICourseState = {
    courses: []
};

const reducer = (state: ICourseState = initialState, action: IAction<CourseActions.ActionUnion>): ICourseState => {
    switch (action.type) {
        case CourseActions.REQUEST_COURSES_FINISHED: {
            return {
                ...state,
                courses: action.payload as ICourse[]
            };
        }
        case CourseActions.REQUEST_COURSE_DETAIL_FINISHED: {
            return {
                ...state,
                course: action.payload as ICourse
            };
        }
        default:
            return state;
    }
};

export default withBaseReducer(reducer);
