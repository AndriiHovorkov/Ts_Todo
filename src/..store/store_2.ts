import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import listReducer from './reducers/listRedusers';
import notificReducer from './reducers/notificReducer';

const rootReducer = combineReducers({
    list: listReducer,
    notification: notificReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;

export default store;