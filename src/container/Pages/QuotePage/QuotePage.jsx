import React, { Component, Fragment } from 'react'
import QuoteComp from '../../../component/QuoteComp/QuoteComp'

class QuotePage extends Component {
    render() {
        return (
            <Fragment>
                <div className='title_con'>
                    <p>Quote Component</p>
                </div>
                <QuoteComp 
                    title='"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge."'
                    name='Stephen Hawking' />
                <QuoteComp
                    title='"Tact is the knack of making a point without making an enemy."'
                    name='Sir Isaac Newton' />
                <QuoteComp
                    title='"A man who dares to waste one hour of time has not discovered the value of life."'
                    name='Charles Darwin' />
                <QuoteComp
                    title='"The love for all living creatures is the most noble attribute of man."'
                    name='Charles Darwin' />
                <QuoteComp
                    title='"I can calculate the motion of heavenly bodies but not the madness of people."'
                    name='Sir Isaac Newton' />
            </Fragment>
        )
    }
}

export default QuotePage