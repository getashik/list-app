import firebase from 'firebase';
firebase.initializeApp({
    databaseURL: 'https://firstfirep.firebaseio.com',
    serviceAccount: './firstfirep-172150d8ea91.json'
});

class Config {
   
   static init = (tbl) =>{
     var ref=  firebase.database().ref('users');

     ref=ref.child(tbl)
        return ref;
    }

}





export default Config;