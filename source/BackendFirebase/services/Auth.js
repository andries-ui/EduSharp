
import { auth } from "../configue/Firebase";
import Service from "./ServiceFile";


class Auth {
  async SignUp(data, navigation) {
    return await auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        auth.currentUser.sendEmailVerification().then(()=>{
          Service.post("users", data, userCredential.user.uid, navigation);
        }).catch((err)=>{
          console.log(err);
        });
        
      })
      .catch((err) => {
       console.log(err);
      });
   
  }
  async SignIn(data, navigation) {
    
    return await auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        {auth.currentUser.email_Verified? navigation.navigate('DashBoard') : console.log(auth.currentUser.emailVerified)}
      })
      .catch((error) => {
       console.log(error);
      });
    
  }

    async  loginWithFacebook() {
      await Facebook.initializeAsync('<FACEBOOK_APP_ID>');
    
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
    
      if (type === 'success') {
        // Build Firebase credential with the Facebook access token.
        const facebookAuthProvider = new FacebookAuthProvider();
        const credential = facebookAuthProvider.credential(token);
    
        // Sign in with credential from the Facebook user.
        signInWithCredential(auth, credential).catch(error => {
          // Handle Errors here.
        });
      }
    }

  async SignOut(navigation, location) {
    
    return await auth
      .signOut()
      .then(() => {
        navigation.replace(location);
        obj = { status: "success", message: "signed out" };
      })
      .catch((error) => {
        obj = { status: "Error", message: error };
      });
    
  }
  async authState() {
    return await auth.onAuthStateChanged((user) => {
      let obj = {};
      if (user) {
        obj = { status: "success", message: "user logged in" };
      } else {
        obj = {
          status: "Error",
          message: "user not logged in",
        };
      }
    });
     
  }
  
}

export default new Auth();
