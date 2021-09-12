import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import calendarReducer from './reducers/calendarReducer';
import uiReducer from './reducers/uiReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    calendar: calendarReducer
})