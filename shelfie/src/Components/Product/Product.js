import React, {Component} from 'react';

import './Product.css'

class Product extends Component{


    render(){
        return(
            <div className="productMain">
                <div className="productInfo">
                   <h1 className="name">{this.props.name}</h1>
                    <h2 className="price">${this.props.price}</h2>
                    <img className="photo" src={this.props.photo} alt=""></img> 
                </div>
                <div className= "productButtons">
                    <button onClick={()=> this.props.delete(this.props.id)}>Delete</button>
                    <button onClick={()=> this.props.edit(this.props.id)}>Edit</button>
                </div>
                
            </div>
        )
    }
};

export default Product;