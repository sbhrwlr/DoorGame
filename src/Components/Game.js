import React, {Component} from 'react';
import './Game.css';
import Door from './Door'

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            doorstate: "door", 
            rand : Math.floor(Math.random()*3)+1,
            d1 : 1,
            d2 : 2,
            d3 : 3,
            cguess : 0,
            wguess : 0
        }
    }
    reset = () =>{
        this.setState({rand : Math.floor(Math.random()*3)+1,
            d1 : 1,
            d2 : 2,
            d3 : 3,
            cguess : 0,
            wguess : 0})
    }
    updateGuessOne = () => {
        if (this.state.rand === this.state.d1)
            this.setState({cguess:this.state.cguess+1})
        else{
            this.setState({wguess:this.state.wguess+1})
        }
        setTimeout(
            function() {
                this.setState({ rand:  Math.floor(Math.random()*3)+1});
            }
            .bind(this),
            1000
        );

    }
    updateGuessTwo = () => {
        if (this.state.rand === this.state.d2)
            this.setState({cguess:this.state.cguess+1})
        else{
            this.setState({wguess:this.state.wguess+1})
        }
        setTimeout(
            function() {
                this.setState({ rand:  Math.floor(Math.random()*3)+1});
            }
            .bind(this),
            1000
        );
    }
    updateGuessThree = () => {
        if (this.state.rand === this.state.d3)
            this.setState({cguess:this.state.cguess+1})
        else{
            this.setState({wguess:this.state.wguess+1})
        }
        setTimeout(
            function() {
                this.setState({ rand:  Math.floor(Math.random()*3)+1});
            }
            .bind(this),
            1000
        );
    }

    render(){
        return(
            <div className="game">
                <div className="game_details">
                    <div className="game_player">
                    <h1>{this.props.player}</h1>
                    </div>
                    <div className="game_score">
                    <h1>{this.state.cguess}</h1>
                    <h2>Perfect Guess</h2> 
                    </div>
                    <div className="game_score">
                    <h1>{this.state.wguess}</h1>
                    <h2>Wrong Guess</h2> 
                    </div>
                </div>
                <div className="game_play">
                    <div onClick = {this.updateGuessOne}>
                    <Door num = {this.state.d1} rand = {this.state.rand} />
                    </div>
                    <div  onClick = {this.updateGuessTwo}>
                    <Door num = {this.state.d2} rand = {this.state.rand}/>
                    </div>
                    <div  onClick = {this.updateGuessThree}>
                    <Door num = {this.state.d3} rand = {this.state.rand}/>
                    </div>
                </div>
                <div className="game_controls">
                <div className = "game_controls_reset" onClick={this.startGame}>
                <h1 className="reset" onClick={this.reset}>Reset 🔄</h1>
                </div>
                </div>
                
            </div>
        )
    }
}
export default Game;