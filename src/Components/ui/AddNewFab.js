import React from 'react';
import { useDispatch } from 'react-redux';
import { clearActiveEvent } from '../../redux/actions/calendar';
import { setModalOpen } from '../../redux/actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(clearActiveEvent())
        dispatch(setModalOpen());
    }

    return (
        <div>
            <button
                className="btn btn-primary fab"
                onClick={openModal}
            >
                <i className="fas fa-plus"></i>
            </button>
        </div>
    )
}
