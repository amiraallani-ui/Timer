import React, { Component } from 'react'
import'./timer.css'

export default class Timer extends Component {
    constructor(){
        super()
        this.state={
            time:0
        }
     
    }

    handleTime=(event)=>{
        this.setState({
            time:event.target.value*3600
           
        }) 
        console.log(this.state.time)
     }
    

    render() {
        console.log("render")
        return (
            <div class='section'>
                <h1 class='text'>{this.state.time} secondes</h1>
                <label for='time'>Enter votre durée en(h):</label>
                <input type='number' id='time' value={this.state.time} onChange={this.handleTime} class='btn'/>
                <button onClick={this.handleTime} class='btn'>Remettre à zéro</button>
            </div>
        )
    }
}






