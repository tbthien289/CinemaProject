

function bookingReducer(state = {}, action) {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                ...state,
                result: action.payload,
            }
        case 'DEL_SIMPLE_ACTION':
            return {
                ...state,
                result: action.payload,
            }
        case 'SET_ID_MOVIE':
            return {
                ...state,
                idMovie: action.payload,
            }
        default:
            return state
    }
}

export default bookingReducer;