import { Image } from 'semantic-ui-react'
import React, {Component} from 'react'
import './Avatar.css'

export default class Avatar extends Component{
    constructor(props) 
    {
        super(props);
    }
    render(){
        return(
            // <Image className="avatar-img" src={this.props.avatar_url} size='medium' circular />
            <img className="avatar-img" src={this.props.avatar_url}></img>
        );
    }
}
