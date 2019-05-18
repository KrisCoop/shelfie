import React, {Component} from 'react';

import './App.css';
import Header from './Components/Header/Header.js';
import Form from './Components/Form/Form.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      list: [
        {
          name: 'roadkill',
          price: 5.99,
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YnOeUPVmR8XkRnTgxVz0fQ3D2hxsAtIbJ__NquA0sldFPfU4'
        },
        {
          name: 'hobo toothbrush',
          price: 6.99,
          photo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Pine_cone_1.jpg'

        },
        {
          name: 'my hopes and dreams',
          price: 0.01,
          photo: 'https://i.imgflip.com/2sh81.jpg?a432744'
        }
      ]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8060/api/inventory').then((res)=>{
      this.setState({
        list: res.data
      })
    })
  }

  addItem = (obj) => {
    axios.post('http://localhost:8060/api/inventory', obj).then((res)=>{
      this.setState({
        list: res.data
      })
    })
  }

  render() {
    return (
      <div className="MainDiv">
        <Header />
        <Form addItem={this.addItem}/>
        <Dashboard list={this.state.list}/>

     </div>
    );
  }
}
export default App;
