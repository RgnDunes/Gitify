import React, {Component} from 'react'
import './PublicRepo.css'

export default class PublicRepo extends Component{
    constructor(props) 
    {
      super(props);
      this.state = {
        repos : []
      }
    }

    componentDidMount(){
      this.fetchPublicApiUrl();
    }

    fetchPublicApiUrl = async () => {
        var url = "https://api.github.com/users/"+this.props.username+"/repos";
        await fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                repos : result
              });
              console.log("PUBLIC REPO FETCH SUCCESSFULL");
            },
            (error) => {
              console.log("PUBLIC REPO FETCH FAILED : ",error);
            }
          )
      }

      extractDate(date){
        return date.substring(0,10);
      }

      extractDescription(description){
        return description ? (<p className="publicRepoDescription">Description : <span className="publicRepoDescriptionContent"> {description} </span></p>) : "";
      }

    render(){
        return(
            <div>
              <div className="publicRepo">Public Repositories</div>
              {this.state.repos.map(home => 
                <p>
                  {home.fork ? "" : (
                    <div key={home.id} className="row">
                      <p className="repoName">
                        <a href={home.html_url}>{home.name}</a>
                      </p>
                      <p className="createdAt">
                        Created on <span className="publicRepoDate"> {this.extractDate(home.created_at)}</span> <span className="divider"> | </span> Size : <span className="publicRepoSize">{home.size} KB</span> <span className="divider"> | </span> Default Branch : <span className="publicRepoDefaultBranch"> {home.default_branch} </span>
                      </p>
                        {this.extractDescription(home.description)}
                    </div>
                  )}
                </p>
              )}
            </div>
        );
    }
}