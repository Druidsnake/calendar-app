import { types } from "../../types/types";

const initialState = {
    checking: true,
    uid: null,
    name: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }
        case types.authLogout:
            return {
                checking: false
            }
        case types.authClearSessionData:
            return {
                checking: false
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        default:
            return state;
    }

}

export default authReducer;