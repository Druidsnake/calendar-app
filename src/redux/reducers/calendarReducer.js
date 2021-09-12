import { types } from '../../types/types';
import { setActiveEvent } from '../actions/calendar';

const initialState = {
    events: [],
    activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.calendarLoaded:
            return {
                ...state,
                events: [
                    ...action.payload
                ]
            }
        case types.calendarSetActiveEvent:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.calendarAddNewEvent:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.calendarClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }
        case types.calendarUpdatedEvent:
            return {
                ...state,
                events: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        case types.calendarDeletedEvent:
            return {
                ...state,
                events: state.events.filter(
                    e => e.id !== action.payload.id
                )
            }
        case types.calendarLogoutEvent:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export default calendarReducer;