import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import PublicRepo from './PublicRepo/PublicRepo'
import ForkRepo from './ForkRepo/ForkRepo'
import './RepoSection.css'

export default class RepoSection extends Component{
    constructor(props) 
    {
      super(props);
    }
    render(){
        return(
            <div className="repoSection">
                <Grid columns={2} padded>
                    <Grid.Column className="repoColumn1">
                        <PublicRepo username={this.props.username}/>
                    </Grid.Column>
                    <Grid.Column className="repoColumn2">
                        <ForkRepo username={this.props.username}/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}