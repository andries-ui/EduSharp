import * as React from 'react';
import { Button, View, Text,SafeAreaView,Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Slideshow from 'react-native-image-slider-show';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
//import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const HomeScreen = ({ navigation })=> {
   
    return (
    <>
    <SafeAreaView>
            <View style ={{top:10, margin:30, borderTopRadius: 5, borderTopRightRadius: 5 }}>
         <Slideshow 
         dataSource={[
           { url:'http://placeimg.com/640/480/any' },
          { url:'http://placeimg.com/640/480/any' },
           { url:'http://placeimg.com/640/480/any' }
       ]}
      // source={require('../images/Use.png')}

      />

    </View>

    <View style={{flex:1, display:'flex',
 flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:20}}>

<Card style={{width:150,height:150, }}>
               <View style={{ top:40, left:60}}>
            <FontAwesome5 name="copy" size={50} color="#4B7BE8" margin={20}/>
            </View>

            <Text style={{fontSize:20, fontWeight:'normal', textAlign:'center', top:60}}>Papers</Text>         


           </Card>
 
            <Card style={{width:150,height:150, }}>
               <View style={{ top:40, left:60}}>
            <FontAwesome5 name="copy" size={50} color="#4B7BE8" margin={20}/>
            </View>

            <Text style={{fontSize:20, fontWeight:'normal', textAlign:'center', top:60}}>Papers</Text>         


           </Card>
         
{/* <Card style={{width:'43%',height:'125%', paddingHorizontal:30, borderRadius:10}} >
         <TouchableOpacity  onPress={()=>navigation.navigate('Material')}>
            <View style={{marginTop:20, paddingHorizontal:10}}>
            <FontAwesome5 name="folder-open" size={30} color="#4B7BE8"/>
           
           </View>
           <View>         
                 <Text style={{fontWeight:'bold'}}>Material</Text>
            </View>
           </TouchableOpacity>
            </Card>
 

            <Card style={{width:'43%',height:'125%', paddingHorizontal:30, borderRadius:10}} >
         <TouchableOpacity >
            <View style={{marginTop:20, }}>
               <View style={{paddingHorizontal:10}}>
               <FontAwesome5 name="edit" size={30} color="#4B7BE8"/>

               </View>
           <Text style={{fontWeight:'bold'}}>Lessons</Text>
           </View>
           </TouchableOpacity>
            </Card> */}

      {/* <Card style={{width:150,height:150, margin:30}}>
               <View style={{ top:40, left:60}}>
            <FontAwesome5 name="folder-open" size={50} color="#4B7BE8" margin={20}/>
            </View>

            <Text style={{fontSize:20, fontWeight:'normal', textAlign:'center', top:60}}>Materials</Text>         


           </Card>

<Card style={{width:150,height:150, margin:30}}>
              
              
               <View style={{ top:40, left:60}}>
            <FontAwesome5 name="edit" size={50} color="#4B7BE8" margin={20}/>
            </View>

            <Text style={{fontSize:20, fontWeight:'normal', textAlign:'center', top:60}}>Lessons</Text>         


           </Card>  */}

           

           
</View>

<View style={{flex:1, display:'flex',
 flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:20, paddingTop:180}}>


<Card style={{width:150,height:150, }}>
               <View style={{ top:40, left:60}}>
            <FontAwesome5 name="copy" size={50} color="#4B7BE8" margin={20}/>
            </View>

            <Text style={{fontSize:20, fontWeight:'normal', textAlign:'center', top:60}}>Papers</Text>         


           </Card>
 
            <Card style={{width:150,height:150, }}>
               <View style={{ top:40, left:60}}>
            <FontAwesome5 name="copy" size={50} color="#4B7BE8" margin={20}/>
            </View>

            <Text style={{fontSize:20, fontWeight:'normal', textAlign:'center', top:60}}>Papers</Text>         


           </Card>
 
{/* <Card style={{width:150,height:150, margin:30}}>
               <View style={{ top:40, left:60}}>
            <FontAwesome5 name="file" size={50} color="#4B7BE8" margin={20}/>
            </View>

            <Text style={{fontSize:20, fontWeight:'normal',textAlign:'center', top:60}}>Q's A's</Text>         


           </Card> 
          

           <Card style={{width:150,height:150, margin:30}}>
               <View style={{ top:40, left:60}}>
            <FontAwesome5 name="copy" size={50} color="#4B7BE8" margin={20}/>
            </View>

            <Text style={{fontSize:20, fontWeight:'normal', textAlign:'center', top:60}}>Papers</Text>         


           </Card>  */}



      </View>
</SafeAreaView>

    </>
    )
  }

  export default HomeScreen    
