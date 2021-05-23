import { Action, Dispatch } from 'redux';
import { DispatchProp } from 'react-redux';

export type ReduxDispatch<P> = Dispatch<IAction<P>>;

export type ReduxDispatchProp<P> = DispatchProp<IAction<P>>;

export interface IAction<T> extends Action<string> {
	readonly type: string;
	readonly payload?: T;
	readonly error?: boolean;
	readonly meta?: any;
}