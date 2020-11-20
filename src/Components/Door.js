import React, {Component} from 'react'
import door from '../door.png'
import './Door.css'

class Door extends Component{
    constructor(props){
        super(props);
        this.state={
            doorstate : "door"
        }
    }

   

    openDoor(event){
        if(this.state.doorstate === "door")
        this.setState({doorstate : "doorOpen"});
        
        setTimeout(
            function() {
                this.setState({ doorstate: "door"});
            }
            .bind(this),
            1000
        );

    }

    render(){
        return (
            <div>

            {
                
            ((this.props.num === this.props.rand))?(
            <div className="game_play_door_good">
                <h1>Heelo</h1>
                <img className={this.state.doorstate} onClick={() => this.openDoor()} src={door}/>
            </div>
            ):(
            <div className="game_play_door_bad">
                <img className={this.state.doorstate} onClick={() => this.openDoor()}src={door}/>
            </div>
            )
            }
            </div>

        )
    }
}
export default Door;