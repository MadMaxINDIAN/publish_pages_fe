import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from "../actions/type";

const initialState = {
    message: null,
    type: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                ...state,
                message: action.payload,
                type: "success"
            };
        case ALERT_ERROR:
            return {
                ...state,
                message: action.payload,
                type: "danger"
            };
        case ALERT_CLEAR:
            return {
                ...state,
                message: null,
                type: null
            };
        default:
            return state;
    }
}