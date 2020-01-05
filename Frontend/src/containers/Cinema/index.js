import { connect } from 'react-redux';

import { simpleAction, delSimpleAction } from './action'
import { setidMovieAction } from '../Booking/action'
import Cinema from "./Cinema";


const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    simpleAction: () => dispatch(simpleAction()),
    delSimpleAction: () => dispatch(delSimpleAction()),
    setidMovieAction: (id) => dispatch(setidMovieAction(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Cinema);