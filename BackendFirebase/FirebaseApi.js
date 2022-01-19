import { auth, database } from "./Firebase";

const db = database.ref("/users");

class EduSharp {
  async SignUp(data) {
    let obj = {};
    if (!data.email || !data.password || !data.username) {
      obj = {
        status: "Error",
        message: "Please enter all required fields!",
      };
    }
    await auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        auth
          .signInWithEmailAndPassword(data.email, data.password)
          .then((userCredential) => {
            const userdata = {
              email: data.email,
              username: data.username,
              location: "",
              phonenumber: "",
            };
            db.child(user.uid)
              .set(userdata)
              .then((result) => {
                obj = {
                  status: "success",
                  message: "sign up successful",
                  result,
                };
              })
              .catch((error) => {
                obj = { status: "Error", message: error };
              });
          })
          .then((error) => {
            obj = { status: "Error", message: error };
          });
      })
      .catch((error) => {
        obj = { status: "Error", message: error };
      });
    return obj;
  }
  async SignIn(data) {
    let obj = {};
    if (!data.email || !data.password) {
      obj = {
        status: "Error",
        message: "Please enter all required fields!",
      };
    }
    await auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential.user, "<<<<____");
        // return userCredential.user
        obj = {
          status: "success",
          message: "sign in successful",
          user: userCredential.user,
        };
      })
      .then((error) => {
        obj = { status: "Error", message: error };
      });
    return obj;
  }
  async SignOut(navigation, location) {
    let obj = {};
    await auth
      .signOut()
      .then(() => {
        navigation.replace(location);
        obj = { status: "success", message: "signed out" };
      })
      .catch((error) => {
        obj = { status: "Error", message: error };
      });
    return obj;
  }
  async authState() {
    await auth.onAuthStateChanged((user) => {
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
    return obj;
  }
  async currentUser() {
    let obj = {};
    const user = await auth.currentUser;
    if (user) {
      obj = {
        status: "success",
        message: "user logged in",
        user,
      };
    } else {
      obj = {
        status: "Error",
        message: "user not logged in",
      };
    }
  }
}

export default new EduSharp();
