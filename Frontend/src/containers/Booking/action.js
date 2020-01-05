

export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const delSimpleAction = () => dispatch => {
    dispatch({
        type: 'DEL_SIMPLE_ACTION',
        payload: ''
    })
}

export const setidMovieAction = (id) => dispatch => {
    dispatch({
        type: 'SET_ID_MOVIE',
        payload: id
    })
}