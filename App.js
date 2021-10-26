import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Components/screens/home'
import Register from './Components/registerComponents/register'
import SignIn from './Components/screens/SignInScreen'


const Menu = () =>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name={'home'} component={HomeScreen} />
            <Stack.Screen name={'register'} component={Register} />
            <Stack.Screen name={'SignInScreen'} component={SignIn} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Menu