

function cinemaReducer(state = {}, action) {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        case 'DEL_SIMPLE_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}

export default cinemaReducer;