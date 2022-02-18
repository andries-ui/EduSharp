import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Checkbox, TextInput } from "react-native-paper";
import {  Icon, Button } from "react-native-elements";
import { COLORS, SIZES, FONTS } from "../constants/index";


const topPadding = Dimensions.get("screen").height * 0.1;
// import PasswordInputText from 'react-native-hide-show-password-input'
import styles from './../style/register';
import APPStatusBar from "../components/statusBar";
import Auth from "../BackendFirebase/services/Auth";
import { auth } from "../BackendFirebase/configue/Firebase";
import ProgressIndicator from "../components/progressIndicator";

const Register = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [users, setUsers] = useState([]);
  const [showpassword, setShowPassword] = useState(true);
  const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);
  const [isConfirmPasswordVisibility, setIsConfirmPasswordVisibility] = useState(true);

const [loading, setloading] = useState(false);

  const handleRegister = (values) => {
    setloading(true);
    Auth.SignUp(values, navigation )
  }
  const changePasswordViewState = () => {
    setIsPasswordVisibility(!isPasswordVisibility);
  };
  const changeConfirmPasswordViewState = () => {
    setIsConfirmPasswordVisibility(!isConfirmPasswordVisibility);
  };

  const PassWordViewState = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => changePasswordViewState()}
    >
      {isPasswordVisibility ? (
        <Icon name="eye-slash" type="font-awesome" style={{ marginLeft: 10 }} />
      ) : (
        <Icon name="eye" type="font-awesome" style={{ marginLeft: 10 }} />
      )}
    </TouchableOpacity>
  );
  const ConfirmPassWordViewState = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => changeConfirmPasswordViewState()}
    >
      {isConfirmPasswordVisibility ? (
        <Icon name="eye-slash" type="font-awesome" style={{ marginLeft: 10 }} />
      ) : (
        <Icon name="eye" type="font-awesome" style={{ marginLeft: 10 }} />
      )}
    </TouchableOpacity>
  );

  const checkIcon = () => {
    setChecked(!checked);
  };
  const show = () => {
    setShowPassword(!showpassword);
  };

  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Only 15 Characters Allowed")
      .required("Please enter username"),
    email: Yup.string()
      .email("Not the correct format")
      .required("Please enter email address"),
    password: Yup.string()
      .min(6, "Atleast 6 Characters ")
      .required("Please enter confirm password"),
    confirm: Yup.string()
      .min(6, "Atleast 6 Characters ")
      .required("Please enter confirm password")
  });


  // backend code , verify if local database if open
  //  useEffect(()=>{
  //
  // //sqlite
  // },[])

  //================================================
  const createUser = () => {
    setUsers([
      ...users,
      {
        name: name,
        email: email,
        password: password,
        confirm: confirm
      },
    ]);

  };

  return (
    <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
    <APPStatusBar background={COLORS.AppBackgroundColor} style={'dark-content'} />
   {loading? <ProgressIndicator/>:null}
    <View style={{ backgroundColor: COLORS.AppBackgroundColor, }}>

      <Text style={styles.lblSignUp}>
        Sign Up
      </Text>

      <ScrollView>
        <View style={{  }}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirm: "",
              checked: false
            }}
            validateOnMount={true}
            validationSchema={validate}
            onSubmit={(values) =>
              handleRegister(values)
            }
          >
            {(props) => (
              <View>
                <TextInput
                  style={[styles.input]}
                  value={props.values.name}
                  placeholder={"Username"}
                  onChangeText={props.handleChange("name")}
                  onBlur={props.handleBlur("name")}
                  left={<TextInput.Icon name="account" type="material-community" />}
                />
                {props.errors.name && props.touched.name ? (
                  <Text style={styles.inputError}>{props.errors.name}</Text>
                ) : null}
                <TextInput
                  value={props.values.email}
                  style={[styles.input]}
                  placeholder={" Email Address"}
                  onBlur={props.handleBlur("email")}
                  onChangeText={props.handleChange("email")}
                  left={<TextInput.Icon name="email" type="material-community" />}
                />
                {props.errors.email && props.touched.email ? (
                  <Text style={styles.inputError}>{props.errors.email}</Text>
                ) : null}

                <TextInput
                  value={props.values.password}
                  style={[styles.input]}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  placeholder=" Password"
                  left={<TextInput.Icon name="lock" type="font-awesome" />}
                  right={<PassWordViewState />}
                  secureTextEntry={isPasswordVisibility}
                />

                {props.errors.password && props.touched.password ? (
                  <Text style={styles.inputError}>{props.errors.password}</Text>
                ) : null}
                <Text
                  style={{
                    alignSelf: "flex-start",
                    // padding: 4
                  }}
                >
                  Strong Password:EduSharp@123
                </Text>

                <TextInput
                  value={props.values.confirm}
                  style={[styles.input]}
                  onChangeText={props.handleChange("confirm")}
                  onBlur={props.handleBlur("confirm")}
                  placeholder="Confirm Password"
                  left={<TextInput.Icon name="lock" type="font-awesome" />}
                  right={<ConfirmPassWordViewState />}
                  secureTextEntry={isConfirmPasswordVisibility}
                />
                {props.errors.confirm && props.touched.confirm ? (
                  <Text style={styles.inputError}>{props.errors.confirm}</Text>
                ) : <Text style={styles.inputError}>{props.errors.confirm}</Text>}

                <View style={{ flexDirection: "row" }}>
                  <Checkbox
                    title={"Accept T's & Cs"}
                    onPress={checkIcon}

                    checked={checked}
                    onBlur={props.handleBlur("checked")}
                  />
                  {props.errors.checked && props.touched.checked ? (
                    <Text style={{ color: COLORS.secondary, }}>{props.errors.checked}</Text>
                  ) : null}
                </View>
                <Text
                  style={{
                    marginTop: -40,
                    color: "#337af5",
                    marginLeft: "80%",
                    fontSize: SIZES.body3
                  }}
                  onPress={() => navigation.navigate("terms&conditions")}
                >
                  View More
                </Text>

                <View style={{ marginTop: 18 }}>
                  <Button
                    title="Sign In"
                    containerStyle={{
                      marginTop: 10,
                      borderRadius: 20
                    }}
                    buttonStyle={{
                      backgroundColor: COLORS.primary
                    }}
                    titleStyle={{
                      color: COLORS.White
                    }}
                    onPress={props.handleSubmit}
                  />
                </View>
              </View>
            )}
          </Formik>

          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: "500", ...FONTS.body3 }}>
              Have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("signupscreen")}>
              <Text style={{ fontWeight: "bold", ...FONTS.body3, color: COLORS.primary }}> Sign In</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  </View>
  );
};

export default Register;
