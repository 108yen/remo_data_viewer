import React from 'react';
import { SideNavContainer, Title } from '../styled/sidenav';
import AppNavigation from './index';


class MainPage extends React.Component {
    state = { selectedPath: 'home' };

    changePath = (path) => {
        this.setState({ selectedPath: path });
    }

    displayText = () => {
        return (
            <div style={{ margin: '50px', color: 'green' }}>
                {this.state.selectedPath}
            </div>
        );
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <SideNavContainer>
                    <Title>SideNav</Title>
                    <AppNavigation changePath={this.changePath} />
                </SideNavContainer>
                {this.displayText()}
            </div>
        );
    }
}

export default MainPage;