import React, { Component } from 'react';
import { connect } from 'react-redux'
import {DeleteUser} from '../actions/awsList';

class Row extends Component{

    delItem(){
        this.props.dispatch(DeleteUser({id:this.props.id}));
    }

    render(){

        return(<li>{ this.props.userName} ----- {this.props.email}<button onClick={this.delItem.bind(this)}>Delete</button></li>);
    }
}

class AwsList extends Component{

   

    render(){
        
        return(<div>
          
            <ul>{ 
                this.props.awsReducer.awsReducer.map((data,key)=> <Row key={key} {...data} dispatch={this.props.dispatch}/>)
               
        }</ul>
            </div>);
    }

}

function select(state){
	return {awsReducer:state};
}

export default connect(select) (AwsList);