import React, { Component, Fragment } from 'react'
import CardProduct from '../CardProduct/CardProduct'
import './Product.css'

class Product extends React.Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className='header'>
                    <p className='logo'>Product</p>
                    <p className='troley'>Cart(s): {this.state.order}</p>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product