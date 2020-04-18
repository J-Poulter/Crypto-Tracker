import { combineReducers } from 'redux';
import { exchanges } from './exchanges';
import { cryptos } from './cryptos';
import { favorites } from './favorites';
import { market } from './market';
import { selected } from './selected';

const rootReducer = combineReducers({exchanges, cryptos, favorites, market, selected});

export default rootReducer;