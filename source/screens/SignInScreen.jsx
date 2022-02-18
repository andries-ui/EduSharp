import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import { Icon, Input, Button } from "react-native-elements";
import icons from '../constants/Icons';
import appTheme from '../constants/theme';
import { img } from '../constants/img';
import { COLORS, SIZES, FONTS } from "../constants";
import Styles from "../style/signinScreen";
import APPStatusBar from './../components/statusBar';
import { Formik } from 'formik';
import ProgressIndicator from "../components/progressIndicator";
import Auth from "../BackendFirebase/services/Auth";
import * as Yup from 'yup';

const topPadding = Dimensions.get('screen').height * .2

const SignIn = ({ navigation }) => {



  const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);
  const [loading, setloading] = useState(false);
  const changePasswordViewState = () => {
    setIsPasswordVisibility(!isPasswordVisibility);
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

  const img = {
    uri: "https://s3-alpha-sig.figma.com/img/2dc7/d28f/2d79748dc83f65605ff2759929c7d3fe?Expires=1636329600&Signature=OrmiI4sx69i1NNGQJipZBZagYmvDbcEbiiqHPfQ5w1hXlU84-Azvx9uA5FnojqYULHtCYKDx3xbKwC7ZyKlvEWbq~4cRCVWOaqsbg4scBmUMpWfOCsv3AlUV-hnszmuMyeR2ncuA27ezjSbdQkdafAihaZqGifRKthe8dqUivIbiqJSWTMEwHBYQklErhdbQY6cCnJm0y7YiR5~Z8rkJTifvVOdXWx6ECPI6gdGxX6r3qGVRa1RLwuDVFJcwKVJOW57XiTa~9YF3WOLag9euWbwGBZbWGm2bKEkqDyLzJKAMqan8DErnBJTjUk-qKNCamhRus6r-16oAFrchDJjK~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  };

  const handleSignin = (values) => {
    Auth.SignIn(values, navigation).then(res => {

    }).catch(err => {
      console.log(err);
    });
  }

  const validate = Yup.object({
    email: Yup.string()
      .email("Not the correct format")
      .required("Please enter email address"),
    password: Yup.string()
      .min(6, "Atleast 6 Characters ")
      .required("Please enter confirm password")
  });

  return (
    <View style={Styles.container}>
      <APPStatusBar background={COLORS.AppBackgroundColor} style={'dark-content'} />
      
      {loading ?<ProgressIndicator />: null}
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ justifyContent: 'center', alignItems: 'center', height: Dimensions.get('window').height }}>
          <Text style={Styles.labSignin}>
            Sign In
          </Text>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validateOnMount={true}
            validationSchema={validate}
            onSubmit={(values) =>
              handleSignin(values)
            }
          >
            {(props) => (
              <View style={{ marginTop: 20, width: '100%', paddingHorizontal: 15 }}>
                <TextInput
                  placeholder="Email"
                  style={[Styles.input]}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                  left={<TextInput.Icon name="email" type="material-community" size={26} />}
                />
                <TextInput
                  placeholder="Password"
                  style={Styles.input}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  left={<TextInput.Icon name="lock" type="font-awesome" size={26} />}
                  right={<TextInput.Icon name={isPasswordVisibility ? "eye" : 'eye'} type="font-awesome" style={{ marginLeft: 10 }} onPress={() => changePasswordViewState()} />}
                  secureTextEntry={isPasswordVisibility}
                />
                <View style={{ justifyContent: 'flex-end', }}>
                  <TouchableOpacity activeOpacity={0.7} style={{ paddingHorizontal: 15, paddingVertical: 5, }}>
                    <Text style={{ textAlign: "right", ...FONTS.body3, fontWeight: 'bold' }}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>

                <Button
                  title="Sign In"
                  containerStyle={{
                    marginTop: 10,
                    borderRadius: 20,
                  }}
                  buttonStyle={{
                    borderRadius: 5,
                    marginHorizontal: 20,
                    backgroundColor: COLORS.primary,
                  }}
                  titleStyle={{
                    color: COLORS.White,
                  }}
                  onPress={props.handleSubmit}
                />

                <Text
                  style={{
                    ...FONTS.h2,
                    textAlign: "center",
                    marginBottom: 10,
                    marginTop: 10,
                    fontWeight: 'bold'
                  }}
                >
                  or
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity activeOpacity={.7} style={[Styles.altSignInBtn, { marginRight: 5 }]}>
                    <Image
                      source={img.google}
                      style={Styles.Image}
                      resizeMode='contain'
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={.7} style={[Styles.altSignInBtn, { marginLeft: 5 }]}>
                    <Icon
                      name="facebook"
                      size={25}
                      color={"blue"}
                      style={Styles.inputIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20
            }}
          >
            <Text style={{ fontWeight: "500", ...FONTS.body3 }}>
              Don`t have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("register")}>
              <Text style={{ fontWeight: "bold", ...FONTS.body3, color: COLORS.primary }}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};



export default SignIn;
