import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView,Text, View,ScrollView,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const SignIn = ({navigation}) => {

return (
    <SafeAreaView
    
      style={{paddingHorizontal: 20, flex: 1, }}>
      <ScrollView showsVerticalScrollIndicator={false}>
       

        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Sign In 
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
               name="email" 
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input}

             />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock"
              size={20}
              style={STYLES.inputIcon}
              
            />
            <TextInput
              placeholder="Password" 
              style={STYLES.input}
              secureTextEntry
              />
              
             
          </View>
          <View style={STYLES.btnPrimary}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Sign In
            </Text>
          </View>

          <View style={STYLES.btn}>
            <Text style={{fontWeight: 'bold', fontSize: 18,justifyContent:'center',textAlign:'center'}}>
              Forgot password?
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16,paddingRight:5}}>
                Sign in with
               
            <Icon
               name="facebook" 
             
              size={20}
              style={STYLES.inputIcon}
            />
              </Text>
            </View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>

                <Icon
                   size={20}
                  style={STYLES.inputIcon}
                />
                Sign in with
                <MaterialCommunityIcons name="google"  size={22} />
              </Text>
            </View>
            
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{ fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={{ fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    
)

}

const STYLES = StyleSheet.create({
    inputContainer: {flexDirection: 'row', marginTop: 20},
    input: {
      paddingLeft: 30,
      borderBottomWidth: 1,
      borderTopWidth: 0.5,
      flex: 1,
      fontSize: 18,
      borderRadius:40,
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowRadius: 60,
      elevation: 8,
      
    },
    inputIcon: { position:'absolute',
    marginLeft:8,
    },
    btnPrimary: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor:'#2769ba',
    borderRadius: 40,
    },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    flex: 1,
    flexDirection: 'row',
  },
  btn:{ justifyContent:'center'}
})


export default SignIn