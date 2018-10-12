import { ApplicationState } from '../store';
import { StoreEnhancer } from 'redux';

export interface WindowExtended extends Window {
    initialReduxState: ApplicationState;
    devToolsExtension: () => StoreEnhancer;
}
