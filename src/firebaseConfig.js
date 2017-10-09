import firebase from 'firebase'


var firebaseConfig = {
    apiKey: 'AIzaSyDeN4pk7FXupImM5z7hxkdvxmAWqpovBwc',
    authDomain: 'grocery-helper-7da92.firebaseapp.com',
    databaseURL: 'https://grocery-helper-7da92.firebaseio.com',
    storageBucket: 'grocery-helper-7da92.appspot.com'
}
var fireBase = firebase.initializeApp(firebaseConfig)
export default fireBase