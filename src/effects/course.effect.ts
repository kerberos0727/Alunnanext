import { fromDataToCourseModel, ICourse } from 'models/course.model';
import { HttpErrorResponseModel } from 'models/error.model';
import * as HttpUtil from 'utils/http.util';

export const requestCourses = async (): Promise<ICourse[] | HttpErrorResponseModel> => {
  const endpoint = '/courses';
  const model = await HttpUtil.get(endpoint);

  if (model instanceof HttpErrorResponseModel) {
    return model;
  }

  let courses: ICourse[] = (model as any[]).map(data => fromDataToCourseModel(data));
  
  return courses;
};

export const requestCourse = async (courseId: string): Promise<ICourse | HttpErrorResponseModel> => {
  const endpoint = '/courses/get-course/' + courseId;
  const model = await HttpUtil.get(endpoint);

  if (model instanceof HttpErrorResponseModel) {
    return model;
  }

  let course: ICourse = fromDataToCourseModel((model as any));
  
  return course;
};
