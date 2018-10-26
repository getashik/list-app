import React, { Component } from 'react';
import { connect } from 'react-redux'

class Row extends Component{

    render(){

        return(<li>{ this.props.userName}</li>);
    }
}

class AwsList extends Component{

   

    render(){
        
        return(<div>
          
            <ul>{ 
                this.props.awsReducer.awsReducer.map((data,key)=> <Row key={key} {...data}/>)
               
        }</ul>
            </div>);
    }

}

function select(state){
	return {awsReducer:state};
}

export default connect(select) (AwsList);