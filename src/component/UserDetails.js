import { Image } from 'semantic-ui-react'
import React, {Component} from 'react'
import './UserDetails.css'

export default class UserDetails extends Component{
    constructor(props) 
    {
        super(props);
    }
    render(){
        const date = this.props.created_at.substring(0,10);
        const name = this.props.name  ? this.props.name : this.props.username;
        const followersCount = this.props.followers ? this.props.followers : "NA";
        const followingCount = this.props.following ? this.props.following : "NA";
        const company = this.props.company ? this.props.company : "NA";
        const location = this.props.location ? this.props.location : "NA";
        return(
            <div className="userDetails">
                <p className="userName"><span className="divider">-</span><a href={this.props.githubUrl}>{name}</a></p>
                <p className="joiningDate"><span className="divider">-</span>Joined on <span className="date">{date}</span></p>
                <p className="jobTitle"><span className="divider">-</span>Working as <span className="company">{company}</span> and living in <span className="location">{location}</span></p>
                <p className="followTitle"><span className="divider">-</span>Followers : <span className="followCount"> {followersCount} </span> <span className="divider"> | </span> <span className="divider">-</span>Following : <span className="followCount"> {followingCount} </span></p>
            </div>
        );
    }
}
