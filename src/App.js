import './App.css';
import { Icon, Input, Button } from 'semantic-ui-react'

var username = "";

const handleMessage = (e) => {
    username = e.target.value;
    console.log(username);
}

function App() {
    return ( 
        <div className = "App" >
            <header className = "App-header" >
                <a className = "App-name" href = "#">
                    Gitify 
                </a>
                <br/> <br/>
                <Icon disabled name = 'github' size = 'massive'/> 
                < br/>
                <p>
                    <Input className = "App-input" icon = { < Icon name = 'search' inverted circular link/>} onChange = { handleMessage } placeholder = 'Github Username' size = 'mini' />
                    <Button color = 'green' size = 'massive'> Gitify </Button> 
                </p>
            </header > 
        </div>
    );
}

export default App;