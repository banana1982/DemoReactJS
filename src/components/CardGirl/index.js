/**
 * Created by thuatnv on 10/2/17.
 */
import React, {Component} from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import './style.css'
import { Link } from 'react-router-dom';

export default class CardGirl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: props.isLiked,
            link: props.link,
            name: props.name,
            like: props.like,
            id: props.id
        };

        // This binding is necessary to make `this` work in the callback
        //this.handleClickCLike = this.handleClickCLike.bind(this);
    }

    handleClickCLike() {
        this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            like: (prevState.isLiked) ? this.state.like - 1 : this.state.like + 1
        }));
        console.log(this.state.like);
    }

    render() {
        return (<Card id={this.state.id} className="card-style">
            <Link to={'/detail/'+ this.state.id}><Image src={this.state.link}/></Link>
            <Card.Content>
                <Card.Header><Link to={'/detail/'+ this.state.id}>{this.state.name}</Link></Card.Header>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name={this.state.isLiked ? 'heart' : 'empty heart' }
                          onClick={this.handleClickCLike.bind(this)}
                          className={this.state.isLiked ? 'red' : ''}
                    />
                    {this.state.like}
                </a>
            </Card.Content>
        </Card>)
    }
}
