import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,

  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { TextInput } from "react-native-paper";
const SignIn = ({ navigation }) => {
  const img = {uri:'https://s3-alpha-sig.figma.com/img/2dc7/d28f/2d79748dc83f65605ff2759929c7d3fe?Expires=1636329600&Signature=OrmiI4sx69i1NNGQJipZBZagYmvDbcEbiiqHPfQ5w1hXlU84-Azvx9uA5FnojqYULHtCYKDx3xbKwC7ZyKlvEWbq~4cRCVWOaqsbg4scBmUMpWfOCsv3AlUV-hnszmuMyeR2ncuA27ezjSbdQkdafAihaZqGifRKthe8dqUivIbiqJSWTMEwHBYQklErhdbQY6cCnJm0y7YiR5~Z8rkJTifvVOdXWx6ECPI6gdGxX6r3qGVRa1RLwuDVFJcwKVJOW57XiTa~9YF3WOLag9euWbwGBZbWGm2bKEkqDyLzJKAMqan8DErnBJTjUk-qKNCamhRus6r-16oAFrchDJjK~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
  return (
    <SafeAreaView style={{  flex: 1}}>
      
      <ScrollView
        style={{ paddingHorizontal: 20, flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 70 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sign In</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
           
            <TextInput placeholder="Email" style={STYLES.input} left={<TextInput.Icon name="email"/>} />
          </View>
          <View style={STYLES.inputContainer}>
           
            <TextInput
              placeholder="Password"
              style={STYLES.input} left={<TextInput.Icon name="lock"/>}
              right={<TextInput.Icon name="eye"/>}
              secureTextEntry
            />
          </View>
          <View style={STYLES.btnPrimary}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Sign In</Text>
          </View>

          <View style={STYLES.btn}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Forgot password?
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={STYLES.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={STYLES.btnSecondary}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, paddingRight: 5}}
              >
                Sign in with
                <Icon name="facebook" size={20} color={'blue'} style={STYLES.inputIcon} />
              </Text>
            </View>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: "bold", fontSize: 16,marginBottom:10 }}>
              <Image source={img} style={{width:20,height:20,marginRight:10,marginTop:10}}></Image>
                Sign in with
                
               
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Don`t have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={{ fontWeight: "bold" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const STYLES = StyleSheet.create({
  inputContainer: { flexDirection: "row", marginTop: 20 },
  input: {
    height: 50, 
        padding: 5,
         alignContent: 'center',
          shadowColor: '#d5dbe3',
           borderTopEndRadius:5,
           borderBottomEndRadius:5,
           borderBottomRightRadius:5,
           borderTopStartRadius:5,
           width:'100%'
  },
  inputIcon: { position: "absolute", marginLeft: 8 },
  btnPrimary: {
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#2769ba",
    borderRadius: 40,
  },

  btnSecondary: {
    height: 50,
    borderColor: "#a5a5a5",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  btn: { justifyContent: "center" },
});

export default SignIn;
