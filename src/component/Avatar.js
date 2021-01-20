import React, {Component} from 'react'
import './Avatar.css'

export default class Avatar extends Component{
    constructor(props) 
    {
        super(props);
    }
    render(){
        return(
            <img className="avatar-img" src={this.props.avatar_url} alt="Avatar"></img>
        );
    }
}
