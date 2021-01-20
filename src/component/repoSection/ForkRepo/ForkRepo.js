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
              console.log("FORK REPO FETCH SUCCESSFULL");
            },
            (error) => {
              console.log("FORK REPO FETCH FAILED : ",error);
            }
          )
      }

      extractDate(date){
        return date.substring(0,10);
      }

      extractDescription(description){
        return description ? (<p className="forkRepoDescription">Description : <span className="forkRepoDescriptionContent"> {description} </span></p>) : "";
      }

    render(){
        return(
            <div>
              <div className="forkRepo">Forked Repositories</div>
              {this.state.repos.map(home => 
                <p>
                  {home.fork ? (
                    <div key={home.id} className="row">
                      <p className="repoName">
                        <a href={home.html_url}>{home.name}</a>
                      </p>
                      <p className="createdAt">
                        Created on <span className="publicRepoDate"> {this.extractDate(home.created_at)}</span> <span className="divider"> | </span> Size : <span className="publicRepoSize">{home.size} KB</span> <span className="divider"> | </span> Default Branch : <span className="publicRepoDefaultBranch"> {home.default_branch} </span>
                      </p>
                        {this.extractDescription(home.description)}
                    </div>
                  ) : ""}
                </p>
              )}
            </div>
        );
    }
}