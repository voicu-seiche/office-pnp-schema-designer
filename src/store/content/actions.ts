import { Action, ActionCreatorsMapObject } from 'redux';

export enum ActionTypes {
    CreateNewProvisioningTemplate
}

export interface ContentActionCreators extends ActionCreatorsMapObject {
    createNewProvisioningTemplate: (version: string) => CreateProvisioningTemplateAction;
}

export const contentActionCreators: ContentActionCreators = {
    createNewProvisioningTemplate: (version: string) => {
        return {
            type: ActionTypes.CreateNewProvisioningTemplate,
            provisioningTemplateVersion: version
        };
    },
};

export interface CreateProvisioningTemplateAction extends Action {
    provisioningTemplateVersion: string;
}
