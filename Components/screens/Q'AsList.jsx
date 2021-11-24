import React from "react";
import {View,Text,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
<<<<<<< Updated upstream
import { COLORS,FONTS, SIZES } from "../../constants";
import ToggleSwitch from 'toggle-switch-react-native'


const QList = ()=>{
    const options=[
        {value:'1'},
        {value:'2'}
    ]
    return(
    <>
        <View style={Styles.container}>
            <View style={Styles.header}>
               <View> 
                    <Text style={Styles.headingtext}>
                        Q' As
                    </Text>
                </View>
                <TouchableOpacity style={Styles.touchable}>
                    <Icon name='search' type='font-awesome' size={25} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text>View only the content that is relevent to my course</Text>
              <ToggleSwitch 
              isOn={false}
              onColor="green"
              offColor="red"
              label="View"
              labelStyle={{color:"black",fontWeight:'900'}}
              size="large"
              onToggle={isOn=>alert("changed to :",isOn)}
              />
            </View>
        </View>
    </>
=======

const QList = ()=>{
    return(
    <ScrollView>
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text>
                    Q' As
                </Text>
                <TouchableOpacity style={{alignSelf:'flex-end'}}>
                    <Icon name='search' type='font-awesome' size={12}/>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
>>>>>>> Stashed changes
    )
}
const Styles = StyleSheet.create({
    container:{
<<<<<<< Updated upstream
        backgroundColor:COLORS.AppBackgroundColor,
        flex:1,
        padding:'6%'
=======
        flex:1,
        backgroundColor:'red'
>>>>>>> Stashed changes
    }
    ,header:{
        display:'flex',
        flexDirection:'row',
<<<<<<< Updated upstream
    
        marginTop:'6%',
        
    },
    headingtext:{
        fontSize:SIZES.h1
    },
    touchable:{ 
        alignContent:'flex-end',
        marginLeft:'70%'
=======
        marginTop:'6%',
>>>>>>> Stashed changes
    }
})
export default QList