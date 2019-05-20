import React, {Component} from "react";
import {Header, Input, Menu} from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

@inject('routing')
@observer
export default class HeaderPage extends Component {
    state = {activeItem: 'home'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <Menu secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...'/>
                    </Menu.Item>
                    <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}/>
                </Menu.Menu>
            </Menu>
        );
    }
}
