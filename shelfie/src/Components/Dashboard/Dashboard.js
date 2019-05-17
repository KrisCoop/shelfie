import React, {Component} from 'react';

import './Dashboard.css';
import Product from '../Product/Product.js'

class Dashboard extends Component{

    render(){
        // const list = this.props.list;     ///original line, modded below:
        const lister = this.props.list.map((e, i)=>{
            return <Product key={i} name={e.name} price={e.price} photo={e.photo} /> 
        })

        return(
            <div className="Dashboard">
                <Product />
                Dashboard
                <div className="lister">
                    {lister}
                </div>
            </div>
        )
    }
};

export default Dashboard;




