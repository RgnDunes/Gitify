import './App.css';
import { Icon, Input, Button } from 'semantic-ui-react'
import React, {Component} from 'react';
import Avatar from './component/Avatar'
import ScrollMessage from './component/ScrollMessage'
import UserDetails from './component/UserDetails'

var username = "";

class App extends Component{
    constructor() 
    {
      super();
      this.state = {
        showDetails : false,
        login : "",
        avatar_url : "",
        html_url : "",
        followers_url : "",
        following_url : "",
        subscriptions_url : "",
        repos_url : "",
        name : "",
        company : "",
        blog : "",
        location : "",
        email : "",
        bio : "",
        twitter_username : "",
        public_repos : 0,
        followers : 0,
        following : 0, 
        created_at : "",
      }
    }

    fetchUrl = async () => {
        var url = "https://api.github.com/users/"+username;
        await fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                showDetails: true,
                login : result['login'],
                avatar_url : result['avatar_url'],
                html_url : result['html_url'],
                followers_url : ['followers_url'],
                following_url : result['following_url'],
                subscriptions_url : result['subscriptions_url'],
                repos_url : result['repos_url'],
                name : result['name'],
                company : result['company'],
                blog : result['blog'],
                location : result['location'],
                email : result['email'],
                bio : result['bio'],
                twitter_username : result['twitter_username'],
                public_repos : result['public_repos'],
                followers : result['followers'],
                following : result['following'],  
                created_at : result['created_at'],
              });
              console.log("FETCH SUCCESSFULL");
            },
            (error) => {
              console.log("FETCH FAILED : ",error);
            }
          )
      }

    handleMessage = (e) => {
        username = e.target.value;
    }

    render(){
      const { visible } = this.state
        var detailsSection= "";
        var scroll = "";
        if(this.state.showDetails)
        {
          scroll = <ScrollMessage/>;
          detailsSection = (
            <div>
              <Avatar avatar_url={this.state.avatar_url}/><br/>
              <UserDetails name={this.state.name} created_at={this.state.created_at} username={username} followers={this.state.followers} following={this.state.following} company={this.state.company} location={this.state.location} githubUrl={this.state.html_url}/>
            </div>
          );
            
        }
        
        return ( 
            <div className = "App" >
                <header className = "App-header" >
                  <div className="fetchForm">
                    <a className = "App-name" href = "#">Gitify </a>
                    <br/> <br/>
                    <Icon disabled name = 'github' size = 'massive'/> 
                    < br/>
                    <Input className = "App-input" icon = { < Icon name = 'search' inverted circular link/>} onChange = { this.handleMessage } placeholder = 'Github Username' size = 'mini' />
                    <Button color = 'green' size = 'massive' onClick={ this.fetchUrl }> Gitify </Button> 
                    {scroll}
                  </div>          
                    <div className="detailsSection">
                      {detailsSection}
                    </div>       
                </header> 
            </div>
        );
    }
}

export default App;