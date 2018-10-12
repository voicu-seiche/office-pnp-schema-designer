import { ActionTypes, CreateProvisioningTemplateAction } from './actions';
import { Reducer } from 'redux';
import { ContentState, initialState } from './state';

export const reducer: Reducer<ContentState> = (state: ContentState = initialState, action: CreateProvisioningTemplateAction) => {
    switch (action.type) {
        case ActionTypes.CreateNewProvisioningTemplate:
            return Object.assign({}, state, <ContentState> {
                SelectedProvisioningTemplateVersion: action.provisioningTemplateVersion,
            });
        default:
            return state;
    }
};
