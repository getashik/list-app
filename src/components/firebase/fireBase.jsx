import React, { Component } from 'react';
import { connect } from 'react-redux'

import fireConfig from './configFirbase';
var firebaseTblRef = fireConfig.init('logs');

class FRow extends Component {

    constructor(props) {
        super(props);
        this.state = { edit: false }
    }

    edit() {

        this.setState({ edit: true })
    }

    save() {

        this.setState({ edit: false })
    }

    delItem(key) {
        firebaseTblRef.child(key).remove();
    }

    render() {
        var { data } = this.props;
        if (data instanceof Array) {

            if (this.state.edit)
                return (<li > <input value='{data[0]+"==="+JSON.stringify(data[1])  }' size="80" /> <button >Delete</button>
                    <button onClick={() => this.save()} >save</button></li>);
            else
                return (<li key={data[0]}> {data[0] + "===" + JSON.stringify(data[1])} <button onClick={this.delItem.bind(this,data[0])}>Delete</button> <button onClick={() => this.edit()} >Edit</button></li>);


        } else {
            return (<li> <button >Delete</button></li>);
        }


    }
}

class FireBase extends Component {

    constructor(props) {
        super(props);
        //this.state = { listData: [] }


    }


    componentDidMount() {




        var that = this;
        //var ref=firebase.database().ref().child('users');
        this.reflog = firebaseTblRef;
        //this.msgsref = ref.child('messages');

        //var msgref = this.msgsref.push(msg);

        // this.reflog.child(msgref.key).set(msg);

        this.reflog.orderByKey().limitToLast(1).on('child_added', function (snap) {
            console.log("Added", snap.val());
        })

        this.reflog.orderByKey().on('child_removed', function (snap) {
            console.log("removed", snap.val());
        })

        // ref.child('logs').on('child_changed', function (snap) {
        //     console.log("changed", snap.val());
        // })


        this.reflog.on('value', function (snap) {
            // console.log("value", snap.val());
            // that.setState({ listData: Object.entries(snap.val()) });
            that.props.dispatch({ type: "FETCH", listData: Object.entries(snap.val()) })
        })



    }

   

    add() {

        var msg = { name: "hi isha", email: "ash@as.com" };
        this.reflog.push(msg);
        // var msgref = this.msgsref.push(msg);
        // this.reflog.child(msgref.key).set(msg);
    }

    render() {

        return (<div>
            <div><h1>This is FireBase Page</h1></div>
            {
                (this.props.addAction) ? <button onClick={this.add.bind(this)}>Add to firebase</button> :
                    <button onClick={() => this.props.dispatch({ type: "ENABLEADD", addAction: true })}>Enable Add</button>
            }
            <ul>

                {this.props.listData.map((data, key) => <FRow data={data} key={data[0]} />)}


                {//this.state.listData.map((data, key) => <li>{data[0]+"==="+JSON.stringify(data[1])  } <button onClick={this.delItem.bind(this,data[0])}>Delete</button></li>)
                }



            </ul>




        </div>);
    }

}

function select(state) {
    return {
        addAction: state.fireReducer.addAction,
        listData: state.fireReducer.listData
    };
}

export default connect(select)(FireBase);