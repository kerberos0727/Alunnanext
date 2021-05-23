import { IAction } from 'models/action.model';
import * as ActionUtility from 'utils/action.util';

export const REMOVE: string = 'ErrorAction.REMOVE';

export const removeById = (id: string): IAction<string> => ActionUtility.createAction(REMOVE, id);

export const CLEAR_ALL: string = 'ErrorAction.CLEAR_ALL';

export const clearAll = (): IAction<undefined> =>  ActionUtility.createAction(CLEAR_ALL);