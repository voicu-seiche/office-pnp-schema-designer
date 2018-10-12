import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// tslint:disable-next-line:no-any
export interface ContentTypesProps extends RouteComponentProps<any> {
}

class ContentTypes extends React.Component<ContentTypesProps> {
    constructor(props: ContentTypesProps) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <h1>Content Types</h1>
            </React.Fragment>
        );
    }
}

export default connect()(withRouter<ContentTypesProps>(ContentTypes));
