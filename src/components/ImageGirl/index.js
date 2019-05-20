/**
 * Created by thuatnv on 10/5/17.
 */
import React,{Component} from 'react'
import { Image } from 'semantic-ui-react'


export default class imageGirl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.src,
            size: 'medium',
            target:props.target
        };

        // This binding is necessary to make `this` work in the callback
        //this.handleClickCLike = this.handleClickCLike.bind(this);
    }
    render(){
        return(
            <Image
                src={this.state.src}
                size={this.state.size}
                target={this.state.target}
            />
        )
    }
}

