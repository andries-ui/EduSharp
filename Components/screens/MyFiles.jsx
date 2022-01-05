import React from 'react'
import {View,Text,ScrollView, TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import {Icon,Input,BottomSheet,Card} from 'react-native-elements'
import { COLORS } from '../../constants'
import Info from './Q&A'

const MyFiles = ({navigation})=>{
  const CardFiles = ()=>{
      return(
          <View style={{width:'50%'}}>
              {Info.docs.map(data=>
                <Card key={data.id} containerStyle={{borderRadius:20}}>  
                    <Card.Image source={data.pic} style={{width:'100%',}}>
                        <View  style={{alignSelf:'flex-end',justifyContent:'flex-end',marginTop:'-2%'}}>
                        <Icon name={data.icon} type={data.typeIcon} size={20}/>
                        </View>
                    </Card.Image>
                </Card>
                )}
          </View>
      )
  }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:35,fontWeight:'600'}}>My Files</Text>
                   <View style={styles.iconContainer}>
                   <Icon name={'table'} type={'font-awesome'} size={25}/>
                    <TouchableOpacity style={{marginLeft:'2%'}}>
                        <Icon name={'ellipsis-v'} type={'font-awesome'}/>
                    </TouchableOpacity>
                   </View>
            </View>
            <View style={{marginTop:'1%',borderBottomColor:'#C4C4C4',borderBottomWidth:0.5,}}>
                <ScrollView horizontal contentContainerStyle={{justifyContent:"space-evenly",paddingVertical:'2%'}} >
                    <TouchableOpacity style={{backgroundColor:COLORS.AppPrimary,width:120,height:60,borderRadius:50,alignItems:'center',justifyContent:'center'}} >
                        <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>Docs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity><Text>    </Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('videos')} style={{backgroundColor:'#FFFFFF',width:90,width:150,height:60,borderRadius:50,alignItems:'center',justifyContent:'center',}}>
                        <Text>Videos</Text>
                    </TouchableOpacity >
                    <TouchableOpacity><Text>     </Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('images')} style={{backgroundColor:'#FFFFFF',width:90,width:150,height:60,borderRadius:50,alignItems:'center',justifyContent:'center',}}>
                        <Text>Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity><Text>  </Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('downloads')} style={{backgroundColor:'#FFFFFF',width:90,width:150,height:60,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                        <Text>Downloads</Text>
                    </TouchableOpacity>
                
                </ScrollView>
               
            </View>
           <FlatList
            data={Info.docs}
            renderItem={CardFiles}
            keyExtractor={item=>item.id}
            numColumns={2}
           />
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
        marginTop:'8%'
    },
    iconContainer:{
        display:'flex',
        flexDirection:'row',
        marginRight:'2%',
        justifyContent:'space-around'
    }
})
export default MyFiles