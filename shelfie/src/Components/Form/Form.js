import React, {Component} from 'react';

import './Form.css'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            URL: "",
            productName: "",
            price: 0
        }
    }

    cancelInput = ()=>{
        this.setState({
            URL: "",
            productName: "",
            price: 0
        })
    }

    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updatePrice = (e) => {
        this.setState({
            [e.target.name]: Number(e.target.value)
        });   
    }

    render(){
        return(
            <div className="Form">
                <div className="UploadArea">
                    <div className="InputBars">
                        <label><input className="URL" placeholder="Image URL" name="URL" value={this.state.URL} onChange={this.updateInput}></input></label>
                        <label><input className="productName" placeholder="Product Name" name="productName" value={this.state.productName} onChange={this.updateInput}></input></label>
                        <label><input className="price" placeholder="Price" name="price" value={this.state.price} onChange={this.updatePrice}></input></label>
                    </div>
                    <button className="Cancel" onClick={()=>{}}>Cancel</button>
                    <button className="AddToInventory" onClick={()=>{}}>Add to Inventory</button>
                </div>               
            </div>
        )
    }
};

export default Form;