import React,{useState} from "react";
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Image,FlatList} from 'react-native'
import {Card, Icon} from 'react-native-elements'
import { COLORS,FONTS, SIZES,icons } from "../../constants";
import ToggleSwitch from 'toggle-switch-react-native'
import Info from './Q&A'

const QList = ()=>{
                                                               
    const [toggle,setToggle]=useState(true)
    const option=()=>{
        setToggle(!toggle)
    }

    const Postcard=()=>{
        return(
        <View style={{marginTop:'4%',width:'105%',marginLeft:'-4%'}}>
             {
          Info.info.map(data=>
            <Card key={data.id} containerStyle={{borderRadius:10,}}>
                <Card.FeaturedTitle style={Styles.cardHeader}>
                    <View style={{padding:'2%'}}>
                        <Card.Image source={data.pic} style={Styles.profile}/>
                    </View>
                        <View>
                            <Text style={Styles.headertext}>{data.username}</Text>
                            <Text  style={{marginLeft:20}}>{data.time}</Text>
                        </View>
                             <Icon name={'ellipsis-v'} type={'font-awesome'} style={{marginLeft:90,marginBottom:20,width:8,height:24}}/>
                </Card.FeaturedTitle>
                <Card.FeaturedTitle style={Styles.post}>
                    <View  >
                        <Text style={Styles.question} >
                        {data.question}
                        </Text>
                        <Text >
                        {data.question}
                        </Text>
                        <Text>
                        {data.question}
                        </Text>
                    </View>
                </Card.FeaturedTitle>
                <Card.FeaturedTitle  style={{padding:'1%',marginTop:'4%'}}>
                    <View style={Styles.iconContainer}>
                        <View style={{marginLeft:10,marginBottom:-20}}>
                        <Icon name={'thumbs-up'} type={'font-awesome'} style={{width:40,height:40}} color={'#3D93D1'}/>
                        </View>
                        <View style={{marginLeft:35,marginBottom:-20}}>
                        <Icon name={'star-o'} type={'font-awesome'}  style={{width:40,height:40}} color={'#3D93D1'}/>
                        </View>
                        <View style={{marginLeft:35,marginBottom:-20}}>
                        <Icon name={'share-alt'} type={'font-awesome'} style={{width:38,height:38}}  color={'#3D93D1'}/>
                        </View>
                        <View style={{marginLeft:35,alignSelf:'flex-end',marginBottom:-18}}>
                        <Icon name={'comment'} type={'font-awesome'} style={{width:38,height:38}}  color={'#3D93D1'} />
                        </View>
                    </View>
                </Card.FeaturedTitle>
            </Card>
            )
      }
        </View>
        )
    }
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
                    <Icon name='search' type='font-awesome' size={23} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <View style={Styles.subtitle}>
                <Text style={Styles.text}>View only the content that is relevent to my course</Text>
              <ToggleSwitch 
              isOn={option}
              onColor={'#3D93D1'}
              offColor="red"
              labelStyle={{color:"black",fontWeight:'900'}}
              size="medium"
              style={Styles.toggle}
              onToggle={option}
              />
            </View>
            <ScrollView>
                <Postcard/>
            </ScrollView>
            <View style={{width:60,height:60,borderRadius:40,backgroundColor:'#4B7BE8',justifyContent:'center',alignSelf:'flex-end',marginTop:'2%',marginBottom:'-5%'}}>
                <Icon name={'plus'} type={'font-awesome'} size={30} color={COLORS.White}/>
            </View>
        </View>
    </>
    )
}
const Styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.AppBackgroundColor,
        flex:1,
        padding:'6%'
    }
    ,header:{
        display:'flex',
        flexDirection:'row',
    
        marginTop:'6%',
        borderBottomWidth:0.5,
        borderBottomColor:'#E9E9E9'
        
    },

    headingtext:{
        fontSize:SIZES.h1,
        fontWeight:'100'
    },
    touchable:{ 
        alignContent:'flex-end',
        marginLeft:'70%',
        marginTop:'4%'
    },
    subtitle:{
        display:'flex',
        flexDirection:'row',
        marginTop:'5%'
    },
    text:{
        width:'72%',
        fontSize:15
    },
    toggle:{
        alignContent:'flex-end',
        marginLeft:'15%',
        marginTop:'2%'
    },
    profile:{
        width:50,
        height:50,
        
    },
    cardHeader:{
        display:'flex',
        flexDirection:'row',
    //   backgroundColor:'red',
        width:'100%',
        height:70,
        // paddingLeft:'2%'
    },
    headertext:{
        fontSize:SIZES.h2,
        marginLeft:20
    
    },
    post:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
       padding:'3%',
        marginTop:'-2%',
        textAlign:'center'
    },
    question:{
        padding:'4%',
        fontSize:SIZES.body4
    },
    iconContainer:{
        display:'flex',
        flexDirection:'row',
      
       width:'100%'
    }
})
export default QList