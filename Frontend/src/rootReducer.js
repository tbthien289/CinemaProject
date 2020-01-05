import { combineReducers } from 'redux';
import movieReducer from './containers/Movie/reducer';
import cinemaReducer from './containers/Cinema/reducer';
import bookingReducer from './containers/Booking/reducer';
import placeReducer from './containers/Place/reducer';

export default combineReducers({
    movieReducer,
    cinemaReducer,
    bookingReducer,
    placeReducer,
});