import { createStore, applyMiddleware, combineReducers, Store, ReducersMapObject, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import * as StoreModule from './store';
import { ApplicationState, reducers } from './store';
import { History } from 'history';

export default function configureStore(history: History, initialState?: ApplicationState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    const createStoreWithMiddleware = composeWithDevTools(
        applyMiddleware(thunk, routerMiddleware(history))
    )(createStore);

    // Combine all reducers and instantiate the app-wide store instance
    const allReducers = buildRootReducer(reducers);
    const store = createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;

    // Enable Webpack hot module replacement for reducers
    // if (module.hot) {
    //     module.hot.accept('./store', () => {
    //         const nextRootReducer = require<typeof StoreModule>('./store');
    //         store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
    //     });
    // }

    return store;
}

function buildRootReducer(allReducers: ReducersMapObject<ApplicationState, AnyAction>) {
    return combineReducers<ApplicationState>(allReducers);
}
