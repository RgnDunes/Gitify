import { Message } from 'semantic-ui-react'
import React, {Component} from 'react'
import './ScrollMessage.css'

export default class ScrollMessage extends Component{
    constructor(props) 
    {
        super(props);
    }
    render(){
        return(
            <Message className="scroll-message" floating size='small'>Please Scroll Down !</Message>
        );
    }
}
