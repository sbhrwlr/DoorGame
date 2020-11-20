import React, { Component } from 'react';
import './App.css';
import Game from './Components/Game'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : "",
      start: false
    }
  }

  startGame = () => {
    
    if(this.state.name === ""){
      alert("Please Enter your name first");
    }else{
      this.setState({start: true});
    }
  }

  onChangeHandler(event) {
    this.setState({name : event.target.value})
  }

  render(){
    return(
      <div className="App">
        {
          (!this.state.start)?(
            <div>
            <div className="App_game_name">
            <h1>Choose-the-Door</h1>
            </div>        
            <div className="App_player">
            <input type="text" id="input" className="App_player_name" placeholder="What's your Name?" onChange = {this.onChangeHandler.bind(this)}></input>
            </div>
            <div className="App_start">
              <div className="App_start_btn" onClick={this.startGame}>
              <h1>Start</h1>
              </div>
            </div>
              </div>
          ):(
            <div>
              <Game player={this.state.name}/>
            </div>
          )
        }

      </div>
    )
  }
  
}

export default App;
