import React,{Component} from 'react';
import firebase from '../../firebase.js';
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
const displayName='', photoURL='';
class Googlelogin extends Component {
constructor(){
    super();
    this.state = {
        isLogIn: false,
        name: "",
        photo: ""
    }
}

    onSubmit =() => {
        var provider =new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  })
  .catch((error) => {
   console.log(error);
  });
    };

    onLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          this.setState({
              isLogIn: false
          })
    }
    componentDidMount=() =>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log("User signed in")
              console.log(user.displayName + '\n' + user.email);
              this.setState=({
                  isLogIn:true,
                  name:displayName,
                  photo:photoURL
              })
            } else {
                console.log("No User is signed in");  
                  }          
          });
        }
    render() {
        return (
            <div className="login-area card mx-auto mt-5">
              {this.state.isLogIn === false ?
                <button 
                type="button"
                className="btn btn-primary text-white w-100"
                onClick={this.onSubmit}>
                    Login With Google
                </button>
                :
                <>
                <div className="card-media">
                    <img src={this.state.photo} alt=''/>
                </div>
                <div className="card-body">
                    <h5>{this.state.name}</h5>
                   < button type="button" className="btn btn-danger" onClick={this.onLogout}>Log Out</button>
                </div>
                </>
            }
            </div>
        )
    }
}
export default Googlelogin;