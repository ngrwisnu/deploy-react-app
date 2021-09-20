import React, { Component } from 'react'

class CardProduct extends React.Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })

    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }
    
    render() {
        return (
            <div className="counter">
                <button className="minus btn" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order} />
                <button className="plus btn" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default CardProduct