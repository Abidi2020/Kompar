import {ADD_FORM} from '../actions/types'

const initialState = {
    form: null,
    loading: true
}

export default function(state=initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case ADD_FORM:
            return {
                ...state,
                form: payload
            }
        default:
            return state
    }
}