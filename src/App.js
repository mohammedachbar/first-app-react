import React, { Component } from 'react';
import Menu from './components/MenuComponent.js';
import DishDetail from './components/DishDetailComponent.js';
import {DISHES} from './shared/dishes.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  
  render(){

  return ( 
    <div className="App">
      <h1> hello wwwworld </h1>
        <Menu dishes={this.state.dishes}/>
        <DishDetail comment="jmmééé"/>
    </div>
  );
}
}
export default App;
