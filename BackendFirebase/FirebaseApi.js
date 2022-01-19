import { auth,database } from "./Firebase";

const db=database.ref("/users")

class EduSharp {
  async SignUp(data) {
    if (!data.email || !data.password || !data.username) {
      return JSON.stringify({
        status: "Error",
        message: "Please enter all required fields!",
      });
    }
    await auth
      .createUserWithEmailandPassword(data.email, data.password)
      .then((userCredentials) => {
        //app user to database
        const user = {user:userCredentials.user,email:data.email,username:data.username};
        db.set(user).then((result)=>{
            return JSON.stringify({ status: "success",
            message: "sign up successful",result})
        }).catch(error=>{
            return JSON.stringify({ status: "Error", message: error.message });
        })
      })
      .catch((error) => {
        return JSON.stringify({ status: "Error", message: error.message });
      });
  }
  async SignIn(data) {
    if (!data.email || !data.password) {
      return JSON.stringify({
        status: "Error",
        message: "Please enter all required fields!",
      });
    }
    await auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredentials) => {
        return JSON.stringify({
          status: "success",
          message: "sign in successful",
          data: userCredentials.user,
        });
      })
      .catch((error) => {
        return JSON.stringify({ status: "Error", message: error.message });
      });
  }
  async SignOut(navigation, location) {
    await auth
      .signOut()
      .then(() => {
        navigation.replace(location);
      })
      .catch((error) => {
        return JSON.stringify({ status: "Error", message: error.message });
      });
  }
  async authState() {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        return JSON.stringify({ status: "success", message: "user logged in" });
      } else {
        return JSON.stringify({
          status: "Error",
          message: "user not logged in",
        });
      }
    });
  }
  async currentUser() {
    const user = await auth.currentUser;
    if (user) {
      return JSON.stringify({
        status: "success",
        message: "user logged in",
        user,
      });
    } else {
      return JSON.stringify({
        status: "Error",
        message: "user not logged in",
      });
    }
  }
}

export default new EduSharp();
