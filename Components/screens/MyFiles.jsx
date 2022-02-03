import React, { useState } from 'react'
import {View,Text,ScrollView, TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import {Icon,Input,BottomSheet,Card} from 'react-native-elements'
import { COLORS } from '../../constants'
import Info from './Q&A'
import FilesHome from '../Card/FilesHome'
import ImageFileCard from '../Card/ImageFileCard'
import VideoCard from '../Card/VideoCard'
import DownloadsCard from '../Card/DownloadsCard'

const MyFiles = ({navigation})=>{
 const LocationArray = ["Home","Downloads","Video","Image","Files"]
 const [location,setLocation] = useState("Images")
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:25,fontWeight:'600'}}>My Files</Text>
                   <View style={styles.iconContainer}>
                   <Icon name={'border-all'} type={'font-awesome-5'} size={22}/>
                    <TouchableOpacity style={{marginLeft:'2%'}}>
                        <Icon name={'ellipsis-v'} type={'font-awesome'}/>
                    </TouchableOpacity>
                   </View>
            </View>
            <View style={{marginTop:'1%',borderBottomColor:'#eff1f0',borderBottomWidth:0.5,}}>
              {location === "Home" ?(
                  <FilesHome setLocation={setLocation} />
              ): location === "Files" ?(
                  <ImageFileCard/>
              ) :(
                  <VideoCard/>
              )}
            </View>
         
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:'2%'
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'2%'
    },
    iconContainer:{
        display:'flex',
        flexDirection:'row',
        marginRight:'2%',
        justifyContent:'space-around'
    }
})
export default MyFiles