import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import Slideshow from 'react-native-image-slider-show';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import HomeScreen from './HomeScreen';
import Pro from './Pro';
import About from './about';
import Starred from './Starred';

import CustomDrawer from './CustomDrawer';
import Preference from './Preference';

//import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true} >
    <Drawer.Navigator drawerContent={props =><CustomDrawer {...props}
    // drawerActiveBackgroundColor='#4B7BE8'
    // drawerActiveInColor='#fff'
    />} 
   
    >

    <Drawer.Screen name="Home" component={HomeScreen}
     options={{ title: 'Home',
     headerStyle:{
         backgroundColor: '#4B7BE8',
     },

     headerTintColor:'#ffffff',
     drawerIcon: ({focused, size}) => (
      <FontAwesome5 name="home" size={20} color="#4B7BE8" margin={20}/>


     ),
    }}
     
     />

     <Drawer.Screen name="Profile" component={Pro}
     options={{ title: 'Profile',
     headerStyle:{
         backgroundColor: '#4B7BE8',
     },

     headerTintColor:'#ffffff',
     drawerIcon: ({focused, size}) => (
<Icon
  name='user'
  type='evilicon'
  color='#4B7BE8'
/>

     ),
    }}
     
     />
        <Drawer.Screen name="My Files" component={NotificationsScreen} 
        
        options={{ title: 'My Files',
        drawerIcon: ({focused, size}) => (
   <Icon
     name='folder'
     type='FontAwesome'
     color='#4B7BE8'
   />
   
   ),
}}
        />
        <Drawer.Screen name="My Post" component={NotificationsScreen}
         options={{ title: 'My Post',
         drawerIcon: ({focused, size}) => (
    <Icon
      name='list'
      type='FontAwesome-5'
      color='#4B7BE8'
    />
    
    ),
 }}
        
        />
        <Drawer.Screen name="Starred" component={Starred}
         options={{ title:"Starred",
         drawerIcon: ({focused, size}) => (
    <Icon
      name='star'
      type='FontAwesome'
      color='#4B7BE8'
    />
    
    ),
 }}
        />

        
        <Drawer.Screen name="Preference" component={Preference}
        style={{flexDirection:'row',  padding:20, borderTopWidth:1, borderTopColor:'gray'}}
         options={{ title: 'My Preference',
         drawerIcon: ({focused, size}) => (
    <Icon
      name='settings'
      type='FontAwesome'
      color='#4B7BE8'
    />
    
    ),
 }}
        />
        <Drawer.Screen name="About" component={About}
         options={{ title: 'About',
         drawerIcon: ({focused, size}) => (
    <Icon
      name='info'
      type='FontAwesome'
      color='#4B7BE8'
    />
    
    ),
 }}
        />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

