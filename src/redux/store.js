import {combineReducers, createStore} from 'redux';
import reducers from '../components/reducer';

const allReducers = combineReducers(reducers);

const store = createStore(allReducers);

export default () => store;