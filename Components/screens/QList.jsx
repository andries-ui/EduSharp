import React from 'react'
import { ScrollView,View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { Icon } from 'react-native-elements'
import {COLORS,FONTS,SIZES} from '../../constants'

const Questions = ()=>{
    const Card = ()=>{

    }
    return(
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.name}>Q' As</Text>
                    <View>
                        <TouchableOpacity >
                            <Icon name={'search'} type={'font-awesome'} style={styles. searchIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.AppBackgroundColor,
        flex:1,
        padding:'2%'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        marginTop:'7%',
    },
    name:{
        fontSize:SIZES.largeTitle
    },
    searchIcon:{
        color:COLORS.primary,
        marginLeft:'55%'
    }
})
export default Questions
import * as Progress from 'react-native-progress';

