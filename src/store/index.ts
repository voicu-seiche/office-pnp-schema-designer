import { routerReducer } from 'react-router-redux';
import { ContentState } from './content/state';
import { reducer as contentReducer } from './content/reducer';
import { reducer as breadcrumbsReducer } from './breadcrumbs/reducer';

export interface ApplicationState {
    content: ContentState;
}

export const reducers = {
    router: routerReducer,
    content: contentReducer,
    breadcrumbs: breadcrumbsReducer,
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
