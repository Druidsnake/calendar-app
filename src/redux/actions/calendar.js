import Swal from "sweetalert2";
import { fetchConToken } from "../../helpers/fetch";
import { types } from "../../types/types";
import moment from "moment";

export const startLoadingEvents = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();

            if (body.ok) {
                const events = body.events;

                events.map((e) => {
                    e.start = moment(e.start).toDate()
                    e.end = moment(e.end).toDate()
                });

                dispatch(eventsLoaded(events));

            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.msg, 'error');
        }
    }
}

export const setActiveEvent = (e) => ({
    type: types.calendarSetActiveEvent,
    payload: e
})

const addNewEvent = (e) => ({
    type: types.calendarAddNewEvent,
    payload: e
})

export const clearActiveEvent = (e) => ({ type: types.calendarClearActiveEvent })

export const updatedEvent = (e) => ({
    type: types.calendarUpdatedEvent,
    payload: e
})

export const deletedEvent = (e) => ({ type: types.calendarDeletedEvent, payload: e })

export const startAddNewEvent = (e) => {

    return async (dispatch, getState) => {

        const {uid: _id, name} = getState().auth;

        try {
            const resp = await fetchConToken('events', e, 'POST');
            const body = await resp.json();

            if (body.ok) {
                e.id = body.eventId
                e.user = {
                    _id,
                    name,
                }

                dispatch(addNewEvent(e));

                Swal.fire('Success', 'Evento creado exitosamente', 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.msg, 'error');
        }

    }
}

const eventsLoaded = (events) => ({
    type: types.calendarLoaded,
    payload: events
})

export const startEventUpdate = (e) => {
    return async (dispatch, getState) => {

        const {activeEvent} = getState().calendar;
        try {

            const resp = await fetchConToken(`events/${activeEvent.id}`, { ...activeEvent, ...e }, 'PUT');
            const body = await resp.json();

            if (body.ok) {
                dispatch(updatedEvent(e));

            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            // Swal.fire('Error', error.response.msg, 'error');
        }
    }
}

export const startEventDeletion = () => {
    return async (dispatch, getState) => {

        const { activeEvent } = getState().calendar;

        try {
            const resp = await fetchConToken(`events/${activeEvent.id}`, {}, 'DELETE');
            const body = await resp.json();
            console.log(body);

            if (body.ok) {
                dispatch(deletedEvent(activeEvent));
                dispatch(clearActiveEvent())
                Swal.fire('Success', body.msg, 'success');
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            // Swal.fire('Error', error.response.msg, 'error');
        }
    }
}

export const logoutEvent = () => ({
    type: types.calendarLogoutEvent
})