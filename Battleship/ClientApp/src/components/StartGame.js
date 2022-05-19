import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class StartGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstPlayerName: '',
            secondPlayerName: '',
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
        console.log(this.state.firstPlayerName, this.state.secondPlayerName);
    }

    handleSubmit = (e) => {
        e.preventDefault();
     
    }

render() {
    return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h2>Start new game</h2>
                <hr/>
                <div class="form-group">
                   <label for="firstPlayerName">First player name</label>
                    <input type="text" class="form-control" name="firstPlayerName" id="firstPlayerName"
                        placeholder="First player name" onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                   <label for="secondPlayerName">Second player name</label>
                    <input type="text" class="form-control" name="secondPlayerName" id="secondPlayerName"
                        placeholder="Second player name" onChange={this.handleChange}/>
                </div>
                <Link to={'/game'}>
                    <button type="submit" class="btn btn-primary">Start</button>
                </Link>
            </form>
        </div>
     );
  }
}
