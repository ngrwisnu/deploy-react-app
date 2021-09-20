import React from 'react';
import './QuoteComp.css'

const QuoteComp = (props) => {
    return (
        <div className='card_wrap'>
            <p className='title'>{props.title}</p>
            <p> {props.name}</p>
        </div>

    )
}

export default QuoteComp;
