import { Reducer, AnyAction } from 'redux';
import { BreadcrumbState, defaultState } from './state';

export const reducer: Reducer<BreadcrumbState> = (state: BreadcrumbState = defaultState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};
