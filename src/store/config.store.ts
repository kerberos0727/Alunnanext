import configStoreDev from './config-development.store';
import configStoreProd from './config-production.store';

let configureStore: any = process.env.NODE_ENV === 'production' ? configStoreProd : configStoreDev;

export default configureStore;
