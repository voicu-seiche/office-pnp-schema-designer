import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import '../styles/Header.css';

// tslint:disable-next-line:no-any
export interface HeaderProps extends RouteComponentProps<any> {
}

class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <div className="header ms-bgColor-themePrimary">
                <div className="ms-font-xl logo">
                    <strong><Link className="" to="/">Office PnP Schema Designer</Link></strong>
                </div>
            </div>
        );
    }
}

export default connect()(withRouter<HeaderProps>(Header));
