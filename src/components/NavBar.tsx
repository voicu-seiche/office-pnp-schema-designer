import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { ApplicationState } from '../store';
import { ContentActionCreators, contentActionCreators } from '../store/content/actions';
import { Dispatch, bindActionCreators } from 'redux';
import { parseString } from 'xml2js';
import '../styles/NavBar.css';

// tslint:disable-next-line:no-any
export interface NavBarProps extends RouteComponentProps<any> {
    provisioningTemplateVersions: string[];
    actions: ContentActionCreators;
}

export interface NavBarState {
    commandBarItems: ICommandBarItemProps[];
}

class NavBar extends React.Component<NavBarProps, NavBarState> {
    fileUploadInput: HTMLInputElement | null;

    constructor(props: NavBarProps) {
        super(props);

        let items = [];

        items.push({
            key: 'newItem',
            name: 'New',
            icon: 'Add',
            onClick: () => { return; },
            subMenuProps: {
                items: [
                    {
                        key: 'provisioningTemplate',
                        name: 'Provisioning Template',
                        icon: 'Page',
                        subMenuProps: {
                            items: this.props.provisioningTemplateVersions.map((version => ({
                                key: version,
                                name: version,
                                icon: 'Page',
                                onClick: () => { this._onNewProvisioningTemplateClick(version); },
                            })))
                        }
                    },
                ],
            },
        });
        items.push({
            key: 'open',
            name: 'Open',
            icon: 'FabricOpenFolderHorizontal',
            onClick: () => { this.fileUploadInput ? this.fileUploadInput.click() : console.log(); },
        });
        items.push({
            key: 'save',
            name: 'Save',
            icon: 'Save',
            onClick: () => { return; }
        });
        items.push({
            key: 'close',
            name: 'Close',
            icon: 'Cancel',
            onClick: this._onCloseClick.bind(this),
        });

        this.state = {
            commandBarItems: items,
        };
    }

    render() {
        return (
            <div className="NavBar">
                <CommandBar items={this.state.commandBarItems} />
                <div className="open-file-container">
                    <input type="file" ref={(element) => { this.fileUploadInput = element; }} onChange={(e) => this.handleChange(e)} />
                </div>
            </div>
        );
    }

    _onNewProvisioningTemplateClick(version: string) {
        this.props.actions.createNewProvisioningTemplate(version);
        this.props.history.push(`/provisioning-template/${version}`);
    }

    _onCloseClick() {
        this.props.actions.createNewProvisioningTemplate('');
        this.props.history.push('/');
    }

    // tslint:disable-next-line:no-any
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let files = event.target.files;
        if (files) {
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                let fileContent: string = fileReader.result as string;
                if (fileContent) {
                    // tslint:disable-next-line:no-any
                    parseString(fileContent, (err: string, result: any) => {
                        console.log(result);
                    });
                }
            };
            fileReader.readAsText(files[0]);
        }
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    provisioningTemplateVersions: state.content.ProvisioningTemplateVersions
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(contentActionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter<NavBarProps>(NavBar));
