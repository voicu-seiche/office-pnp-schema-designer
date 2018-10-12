import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
// import { PrimaryButton, DefaultButton } from '../../node_modules/office-ui-fabric-react/lib/Button';

// tslint:disable-next-line:no-any
export interface ProvisioningTemplateProps extends RouteComponentProps<any> {
}

class ProvisioningTemplate extends React.Component<ProvisioningTemplateProps> {
    constructor(props: ProvisioningTemplateProps) {
        super(props);
    }

    render() {
        return (
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <TextField label="Required " required={true} placeholder="Please enter some text" />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <TextField label="Version" required={false} placeholder="Please enter some text" />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <TextField label="BaseSiteTemplate" required={false} placeholder="Please enter some text" />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <TextField label="ImagePreviewUrl" required={false} placeholder="Please enter some text" />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <TextField label="DisplayName" required={false} placeholder="Please enter some text" />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <TextField label="Description" required={false} placeholder="Please enter some text" />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <TextField label="TemplateCultureInfo" required={false} placeholder="Please enter some text" />
                    </div>
                </div>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm5 ms-md5 ms-lg5">
                        <TextField label="Scope" required={false} placeholder="Please enter some text" />
                    </div>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                    &nbsp;
                </div>
                {/* <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                    <PrimaryButton text="Save" />
                    &nbsp;
                    <DefaultButton text="Cancel" />
                </div> */}
            </div>
        );
    }
}

export default connect()(withRouter<ProvisioningTemplateProps>(ProvisioningTemplate));
