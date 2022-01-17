import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Components/screens/welcome'
import Register from './Components/screens/register'
import Splash from './Components/screens/SplashScreen'
import SignIn from './Components/screens/SignInScreen'
import Terms from './Components/screens/terms&conditions'
import DashBoard from './Components/screens/DashBoard'
import Questions from './Components/screens/QList'
import Post from './Components/screens/PostQuestion'
import RepliesContainer from './Components/screens/Replies'
import Material from './Components/screens/Material'
import MyFiles from './Components/screens/MyFiles'
import FileImages from './Components/screens/images'
import DownloadFiles from './Components/screens/downloads'
import VideoFiles from './Components/screens/videos'
import Search from './Components/screens/search'



const Menu = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = { 'SplashScreen' } screenOptions={{headerShown:false}}
             >
             <Stack.Screen name = { 'SplashScreen' } component={Splash}/>
              <Stack.Screen name={'register'} component={Register}/>
              <Stack.Screen name={'SignInScreen'} component={SignIn} />  
              <Stack.Screen name ={'terms&conditions'} component={Terms}/> 
              <Stack.Screen name={'home'} component={HomeScreen} />   
              <Stack.Screen name ={'DashBoard'} component={DashBoard}/>  
             <Stack.Screen name={'QList'} component={Questions}/>   
              <Stack.Screen name={'Replies'} component={RepliesContainer}/>
              <Stack.Screen name={'PostQuestion'} component={Post}/>  
               <Stack.Screen name={'Material'} component={Material}/>
              <Stack.Screen name={'MyFiles'} component={MyFiles}/>
              <Stack.Screen name={'images'} component={FileImages}/>
              <Stack.Screen name={'downloads'} component={DownloadFiles}/>
              <Stack.Screen name={'videos'} component={VideoFiles}/>
              <Stack.Screen name={'search'} component={Search}/>
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Menu
