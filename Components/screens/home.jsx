import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, useWindowDimensions, Image } from 'react-native'

const HomeScreen = ({ navigation }) => {

  const img = { uri: 'https://s3-alpha-sig.figma.com/img/de23/e554/ebdc307453e297e144715b1cca292de4?Expires=1635724800&Signature=NcDpb-b3oyY79hcr1Vkrz2rSZ~aKin3LL0DMt6bvMmOTrkuIM4icgTleI2zTBg9P67KwMxVn0Ulx7JOWluwnRkZIZVi14ZnZidNRipjaccD5MlyIlG0gFM5exs~nkZ-C1347by~HgMtQMA8bU1qiKYh0~5MVgycQZf~YTWCWii9fO3ycYzxgAIjDtpGaKcQweUfN1mVkXoxF96lmNjJgkGAPiZTXm1xTxcAR5HskdoAylf3Y2PQTRDQL0ITSbj1RBzPJVsshFfDMLU0OpjFGo0UuC4F6569dAPCdOs8xA4nFCosEc0SMJwLL8mxvLOTpHp6t97S9J9Fa8Xm~Gjv3pg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }
  return (
    <>
      <View
        style={Styles.container}>
        <View style={Styles.semiContainer}>
          <Text style={Styles.WelcomeText}>
            Welcome
          </Text>
         
          <View style={Styles.ImageView}>
            <Image source={img} style={Styles.Image}></Image>
          </View>
          <View style={Styles.ButtonsView}>
            <TouchableOpacity  onPress={() => navigation.navigate('SignInScreen')} style={Styles.Buttons}><Text style={Styles.ButtonText}>Sign In </Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('register')} style={Styles.Button2}><Text style={Styles.ButtonText}>Sign Up </Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View>

      </View>
    </>
  )
  const layout = useWindowDimensions()
}

const Styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    margin: 20,
    borderWidth: 1,
    flex:1,
    margin: 8,
    borderColor: 'transparent',
    marginTop:60
  },
  semiContainer:{
    margin: 30 
  },
  WelcomeText:{
    fontWeight: '600',
    fontSize: 45,
    color: '#3b3c3d',
    alignSelf: 'center',
   
  },
  ImageView:{
    alignSelf: 'center', 
    width: '100%'
  },
  Image:{
    width: 280,
     height: 320, 
    alignSelf: 'center'
  },
  ButtonsView:{
    marginTop: 15  },
  Buttons:{
    borderRadius: 20,
     backgroundColor: '#2769ba',
      alignSelf: 'center',
       width: 300,
     height: 40
  },
  ButtonText:{
    color: 'white',
     alignSelf: 'center',
      paddingTop: 5, 
    fontSize: 19
  },
  Button2:{
    borderRadius: 20,
     backgroundColor: '#cc1d32',
      alignSelf: 'center', 
      width: 300,
       height: 40,
     margin: 20
  }


})
export default HomeScreen;
