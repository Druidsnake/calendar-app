import React from 'react'
import { useDispatch } from 'react-redux'
import { startEventDeletion } from '../../redux/actions/calendar';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startEventDeletion());
    }

    return (
        <div>
            <button
                className="btn btn-danger fab-danger"
                onClick={ handleClick }
            >
                <i className="fas fa-trash mr-2"></i>
                <span>Borrar evento</span>
            </button>
        </div>
    )
}
