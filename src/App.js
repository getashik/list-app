import React, { Component } from 'react';
import { connect } from 'react-redux'
import AwsList from './components/AwsList';
import {GetList} from './actions/awsList';
import AddUser from "./components/AddUser";

import './App.css';





class App extends Component {

componentDidMount(){
  this.loadAwsData();
}

 loadAwsData(){

  this.props.dispatch(GetList());
 }

  render() {
    return (
      <div className="App">
        <header >
          <AddUser></AddUser>
          <AwsList></AwsList>
          
          <button onClick={()=>{this.loadAwsData()}} >Get List</button>
        </header>
        
      </div>
    );
  }
}

function select(state){
	return {awsReducer:state};
}

export default connect(select) (App);
