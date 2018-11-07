import React, { Component } from 'react';
import { connect } from 'react-redux'
import {DeleteUser} from '../actions/awsList';

class Row extends Component{

    constructor(props){
        super(props);
        this.state={edit:false};
    }

    delItem(){
        this.props.dispatch(DeleteUser({id:this.props.id}));
    }

    pressEdit(){
        this.setState({edit:true})
    }
    pressSaveItem(){
        var obj={
            "userName":this.refs.userName.value,
            "email":this.refs.email.value,
            "id":this.props.id,

        }
     }
    inputChange(e,fld){
    alert(e.target.value);
    this.props[fld]=e.target.value;
    }

    render(){

     if(this.state.edit){

        return(<li>
             <input type="text" defaultValue={this.props.userName} ref="userName"  />
             <input type="text" defaultValue={this.props.email} ref="email"  />
             <button onClick={this.pressSaveItem.bind(this)}>Save</button>
            </li>);
    }else{
        return(<li>{ this.props.userName} ----- {this.props.email}
        <button onClick={this.delItem.bind(this)}>Delete</button>
        <button onClick={this.pressEdit.bind(this)}>Edit</button>
        
        </li>);
    }
    
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