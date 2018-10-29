import React, { Component } from 'react';
import { connect } from 'react-redux'
import {PushUser} from '../actions/awsList';


class AddUser extends Component{

    add(){
		this.props.dispatch(PushUser({name:this.refs.name.value,email:this.refs.email.value}));
		this.refs.name.value="";
		this.refs.email.value="";
		
    }
    
render(){

    return(
        <div>
		<div><label>Name: </label> <input ref="name" /></div>
		<div><label>Email: </label> <input ref="email" /> <button onClick={this.add.bind(this)}>Add</button></div>
		
		</div>
    );
}

}

function select(state){
	return {awsReducer:state};
}

export default connect(select) (AddUser);