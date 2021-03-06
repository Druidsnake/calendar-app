import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from "sweetalert2";
import { useSelector, useDispatch } from 'react-redux';
import { setModalClose } from '../../redux/actions/ui';
import { addNewEvent, clearActiveEvent, startAddNewEvent, startEventUpdate, updatedEvent } from '../../redux/actions/calendar';

const now = moment().minutes(0).seconds(0);
const now2 = now.clone().add(1, "hours");

const initialEvent = {
    title: "",
    notes: "",
    start: now.toDate(),
    end: now.add(1, "hour").toDate(),
}

export const CalendarModal = () => {
    const dispatch = useDispatch();

    const [dateStart, setDateStart] = useState(now.toDate())
    const [dateEnd, setDateEnd] = useState(now2.toDate())
    const [titleValid, setTitleValid] = useState(true)

    const { modalOpen } = useSelector(state => state.ui);

    const [formValues, setFormValues] = useState( initialEvent )

    const { notes, title, start, end } = formValues;

    const { activeEvent } = useSelector(state => state.calendar)
    const { uid, name } = useSelector(state => state.auth)

    useEffect(() => {
        if (activeEvent) {
            setFormValues({
                ...activeEvent
            })
        }else {
            setFormValues(initialEvent)
        }
    }, [activeEvent])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');


    const closeModal = (e) => {
        dispatch(setModalClose())
        dispatch(clearActiveEvent())
        setFormValues(initialEvent)
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const handleStartDateChange = (e) => {
        setDateStart(e)
        setFormValues({
            ...formValues,
            start: e
        })
    }
    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(start);
        console.log(end);
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire("Error", "La fecha fin debe ser mayor a la fecha inicio", "error");
        }
        if(title.trim().length < 2){
            return setTitleValid(false)
        }else {
            setTitleValid(true)
        }
        if (activeEvent) {
            dispatch(startEventUpdate( formValues ));
        }else {
            dispatch(startAddNewEvent( formValues ));
        }


        closeModal();
    }



    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                overlayClassName="modal-fondo"
                contentLabel="Example Modal"

            >
                <h1> Nuevo evento </h1>
                <hr />
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="container">

                    <div className="form-group">
                        <label>Fecha y hora inicio</label>
                        <DateTimePicker
                            onChange={handleStartDateChange}
                            value={dateStart}
                            // className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker
                            onChange={handleEndDateChange}
                            value={dateEnd}
                            // className="form-control"
                            minDate={dateStart}
                        />
                    </div>

                    <hr />
                    <div className="form-group">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className={`form-control ${!titleValid && "is-invalid"}`}
                            placeholder="T??tulo del evento"
                            name="title"
                            value={title}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripci??n corta</small>
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={notes}
                            onChange={handleInputChange}
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Informaci??n adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>
            </Modal>
        </div>
    )
}
