import { LOGIN_FAIL, LOGIN_SUCCESS, SET_CURRENT_USER } from "../actions/type";

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            };
        default:
            return state;
    }
}
