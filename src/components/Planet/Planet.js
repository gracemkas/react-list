import React, {Component} from 'react';

class Planet extends Component {
    
    render() {
        
        return(
            <li>
                The planet {this.props.planetData.name} 
            </li>
        )  
    }
}

export default Planet;