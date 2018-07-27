import React, {Component} from 'react';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible : true
        }
    }

    handleClick = () => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    handleMoreInfo = () => {
        this.props.handleGetMoreInfo(this.props.starData)
    }
    
    render() {
        console.log(this.state.isVisible);
        
        let listItem;
        if(this.state.isVisible){
            //return the list item
            listItem = (
                <li>
                The star {this.props.starData.name} is {this.props.starData.diameter} million kilometers
            </li>
            )

        } else {
            //return empty list item
            listItem = <li></li>;
        }
        
        return(
            <div>

            {listItem}
            <button onClick={this.handleClick}>Show/Hide</button>
            <button onClick={this.handleMoreInfo}>Click for more info</button>
            </div>
        )  
    }
}

export default Star;