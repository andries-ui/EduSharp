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
import QList from './Components/screens/Q\'AsList'
import RepliesContainer from './Components/screens/Replies'

const Menu = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = { "Q'AsList" } screenOptions={{headerShown:false}}
             >
              <Stack.Screen name = { 'SplashScreen' } component={Splash}/>
              <Stack.Screen name={'register'} component={Register}/>
              <Stack.Screen name={'SignInScreen'} component={SignIn} />  
              <Stack.Screen name ={'terms&conditions'} component={Terms}/> 
              <Stack.Screen name={'home'} component={HomeScreen} />   
              <Stack.Screen name ={'DashBoard'} component={DashBoard}/>
              <Stack.Screen name={'QList'} component={Questions}/>   
              <Stack.Screen name={'PostQuestion'} component={Post}/> 
              <Stack.Screen name={'Replies'} component={RepliesContainer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Menu