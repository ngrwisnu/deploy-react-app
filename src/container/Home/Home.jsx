import React, {Component, Fragment} from 'react'
import Product from '../Pages/Product/Product'
import './Home.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import QuotePage from '../Pages/QuotePage/QuotePage'
import Hooks from '../Pages/Hooks/Hooks'

class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className='link-nav'>
                        <Link to='/'>Home</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/hooks'>Hooks</Link>
                    </div>
                    <Route path='/' exact component={QuotePage} />
                    <Route path='/product' exact component={Product} />
                    <Route path='/hooks' exact component={Hooks} />
                </Fragment>
            </Router>
        )
    }
}

export default Home