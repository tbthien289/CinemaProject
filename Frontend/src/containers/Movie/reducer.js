

function movieReducer(state = {}, action) {
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
        default:
            return state
    }
}

export default movieReducer;