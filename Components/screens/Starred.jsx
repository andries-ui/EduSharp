import * as React from 'react';
import { Button, View, Text,SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Slideshow from 'react-native-image-slider-show';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
//import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Starred = ({ navigation })=> {
   
    return (
    <>
    <SafeAreaView>
            <View style ={{top:10, margin:30, borderTopRadius: 5, borderTopRightRadius: 5 }}>
           <Text>Welcome to Starred page</Text>
    </View>






    </SafeAreaView>

    </>
    )
  }

  export default Starred    
