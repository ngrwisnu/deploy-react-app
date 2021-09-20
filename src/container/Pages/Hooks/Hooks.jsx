import React, {Fragment, useState} from 'react'
import './Hooks.css'

const Hooks = () => {
    const [count, setCount] = useState(0)

    return (
        <Fragment>
            <div className="header">
                <p className="logo">Hooks</p>
            </div>

            <div className="body-wrap">
                <div className="items-wrap">
                    <h4 className="title">Hooks Tutorial & Concept</h4>
                    <h1 className="count">{count}</h1>
                    <button className='btn-hooks' onClick={ () => setCount(count + 1) }>Update this count</button>
                    <button className='btn-reset' onClick={ () => setCount(count * 0)}>Reset Number</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Hooks