import { combineReducers } from 'redux';
import { exchanges } from './exchanges';
import { cryptos } from './cryptos';
import { favorites } from './favorites';

const rootReducer = combineReducers({exchanges, cryptos, favorites});

export default rootReducer;