import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import ProvisioningTemplateDesigner from './components/ProvisioningTemplateDesigner';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { ApplicationState } from './store';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './utils/registerServiceWorker';
import configureStore from './configureStore';
import { WindowExtended } from './utils/windowExtended';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './styles/index.css';

const baseUrl = (window as WindowExtended).location.href!;
const history = createBrowserHistory({ basename: baseUrl });

const initialState = (window as WindowExtended).initialReduxState as ApplicationState;
const store = configureStore(history, initialState);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <Layout>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/provisioning-template/:version" component={ProvisioningTemplateDesigner} />
                </Layout>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
