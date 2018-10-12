import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import Header from './Header';
import NavBar from './NavBar';

initializeIcons(undefined, { disableWarnings: true });

export class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <Fabric className="App">
                <Header />
                <NavBar />
                <div className="body">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </Fabric>
        );
    }
}
