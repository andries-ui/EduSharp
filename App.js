import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Components/screens/HomeScreen'
import Register from './Components/registerComponents/register'

const Menu = () =>{
    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown:false}}>
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
            <Stack.Screen name={'register'} component={Register} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Menu
