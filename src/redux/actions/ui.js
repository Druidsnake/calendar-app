import { types } from "../../types/types";

export const setModalOpen = () => ({
    type: types.uiOpenModal
})

export const setModalClose = () => ({
    type: types.uiCloseModal
})