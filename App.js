import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Components/screens/home'
import Register from './Components/screens/register'
import Splash from './Components/screens/SplashScreen'
import SignIn from './Components/screens/SignInScreen'
import Terms from './Components/screens/terms&conditions'
import DashBoard from './Components/screens/DashBoard'
import Profile from './Components/screens/profile'
import About from './Components/screens/about'

const Menu = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName = { 'SplashScreen' } screenOptions={{headerShown:false}}
             >
             <Stack.Screen name = {'SplashScreen'} component={Splash}/>
              <Stack.Screen name={'register'} component={Register}/>
              <Stack.Screen name={'SignInScreen'} component={SignIn} />  
              <Stack.Screen name ={'terms&conditions'} component={Terms}/> 
              <Stack.Screen name={'home'} component={HomeScreen} />   
              <Stack.Screen name ={'DashBoard'} component={DashBoard}/>    
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Menu