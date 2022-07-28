import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import storage from 'redux-persist/lib/storage';

const store = createStore(rootReducer);

export default {store};
