// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {
    constructor() {
        super()

        this.state = ({
            mood: "happy"
        })
      }
    
      handleClick = () => {
          const moodChange = this.state.mood === "sad" ? "happy" : "sad"
        this.setState({
            mood: moodChange
        })
      }
    
      render() {
          return(
            <div onClick={this.handleClick}>{this.state.mood} 
            </div>
            )
        }
    }
    
