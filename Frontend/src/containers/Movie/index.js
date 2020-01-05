import { connect } from 'react-redux';

import Movie from './Movie'
import { simpleAction, delSimpleAction } from './action'

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    simpleAction: () => dispatch(simpleAction()),
    delSimpleAction: () => dispatch(delSimpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);