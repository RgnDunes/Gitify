import React, {Component} from 'react'
import './ForkRepo.css'

export default class ForkRepo extends Component{
    constructor(props) 
    {
      super(props);
      this.state = {
        repos : []
        
      }
    }

    componentDidMount(){
      this.fetchForkApiUrl();
    }

    fetchForkApiUrl = async () => {
        var url = "https://api.github.com/users/"+this.props.username+"/repos";
        await fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                repos : result
              });
              console.log("FORKED REPO FETCH SUCCESSFULL");
            },
            (error) => {
              console.log("FORKED REPO FETCH FAILED : ",error);
            }
          )
      }

    render(){
        return(
          <div>
          {this.state.repos.map(home => <div key={home.id}>{home.name}</div>)}
        </div>
        );
    }
}