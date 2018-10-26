import React, { Component } from 'react';
import { throws } from 'assert';


class Card extends Component {
    state = {
        color: 'blue'
    }

    changeColor = (color) => {
        this.setState({ color }, () => {
            console.log(`background changed to ${color}`)
        });
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color }}>
                <p style={{color: 'white'}}>The user's name is {this.props.name}</p>
                <button onClick={() => this.changeColor('black')}>Black</button>
                <button onClick={() => this.changeColor('red')}>Red</button>
                <button onClick={() => this.changeColor('blue')}>Blue</button>
            </div>
        )
    }
}

export default Card;