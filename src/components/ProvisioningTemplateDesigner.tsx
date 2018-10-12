import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb';
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import SiteFields from './SiteFields';
import ContentTypes from './ContentTypes';
import ProvisioningTemplate from './ProvisioningTemplate';
import { ApplicationState } from '../store';
import { NavBarAction } from '../store/content/state';
import '../styles/Content.css';

// tslint:disable-next-line:no-any
export interface ProvisioningTemplateDesignerProps extends RouteComponentProps<any> {
    selectedProvisioningTemplateVersion: string;
    provisioningTemplateNavBarActions: NavBarAction[];
}

export interface ProvisioningTemplateDesignerState {
    breadcrumbs: IBreadcrumbItem[];
    navBarLinks: INavLinkGroup[];
}

class ProvisioningTemplateDesigner extends React.Component<ProvisioningTemplateDesignerProps, ProvisioningTemplateDesignerState> {
    constructor(props: ProvisioningTemplateDesignerProps) {
        super(props);

        this.state = {
            breadcrumbs: [
                { text: this.props.selectedProvisioningTemplateVersion, key: 'root', onClick: () => { this.props.history.push(this.props.match.url); }, },
            ],
            navBarLinks: [
                {
                    links: this.props.provisioningTemplateNavBarActions.map((action) => ({
                        key: action.key,
                        name: action.name,
                        url: '',
                        onClick: () => { this._onNavBarLinkClick(action.url); },
                    }))
                }
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                            <Breadcrumb className="breadcrumbs" items={this.state.breadcrumbs} />
                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm4 ms-md3 ms-lg2">
                            <Nav groups={this.state.navBarLinks} expandedStateText={'expanded'} collapsedStateText={'collapsed'} selectedKey={''} />
                        </div>
                        <div className="ms-Grid-col ms-sm7 ms-md8 ms-lg9">
                            <Switch>
                                <Route path={`${this.props.match.url}`} exact={true} component={ProvisioningTemplate} />
                                <Route path={`${this.props.match.url}/site-fields`} component={SiteFields} />
                                <Route path={`${this.props.match.url}/content-types`} component={ContentTypes} />
                            </Switch>
                        </div>
                        <div className="ms-Grid-col ms-sm1 ms-md1 ms-lg1">
                            &nbsp;
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    _onNavBarLinkClick(url: string) {
        this.props.history.push(`${this.props.match.url}${url}`);
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    selectedProvisioningTemplateVersion: state.content.SelectedProvisioningTemplateVersion,
    provisioningTemplateNavBarActions: state.content.ProvisioningTemplateNavBarActions,
});

export default connect(mapStateToProps)(withRouter<ProvisioningTemplateDesignerProps>(ProvisioningTemplateDesigner));
