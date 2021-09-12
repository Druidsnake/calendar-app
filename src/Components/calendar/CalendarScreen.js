import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import moment from 'moment'
import 'moment/locale/es'
import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { setModalOpen } from '../../redux/actions/ui'
import { clearActiveEvent, setActiveEvent, startLoadingEvents } from '../../redux/actions/calendar'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'
moment.locale("es");


const localizer = momentLocalizer(moment)

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingEvents());
    }, [dispatch])

    const { uid } = useSelector(state => state.auth);
    const { events, activeEvent } = useSelector(state => state.calendar);

    const [lastView, setlastView] = useState( localStorage.getItem("lastView") || "month")

    const onDoubleClick = (e) => {
        dispatch(setModalOpen())
    }

    const onSelectEvent = (e) => {
        dispatch(setActiveEvent(e))
    }

    const onViewChange = (e) => {
        localStorage.setItem("lastView", e);
        setlastView(e)
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: (uid == event.user._id) ? "blue" : "#4EC5F1",
            borderRadius: "0px",
            opacity: 0.8,
            display: "block",
        }
        return {
            style
        }
    }

    const onSelectSlot = () => {
        dispatch(clearActiveEvent());
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                onSelectSlot={onSelectSlot}
                selectable={true}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            {
                activeEvent && <DeleteEventFab />
            }
            <CalendarModal />
        </div>
    )
}
