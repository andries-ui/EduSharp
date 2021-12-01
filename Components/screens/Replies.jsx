import React from "react";
import {View,ScrollView,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Info from './Q&A'
import { img,COLORS,SIZES } from "../../constants";
import {Card, Icon} from 'react-native-elements'

const RepliesContainer=({ navigation }) =>{
    
    const Postcard = () => {
        return (
            <View style={{ marginTop: '4%', width: '105%', marginLeft: '-4%' }}>
                <Card containerStyle={{ borderRadius: 10, }}>
                    <Card.FeaturedTitle style={Styles.cardHeader}>
                        <View style={{ padding: '2%' }}>
                            <Card.Image source={img.user} style={Styles.profile} />
                        </View>
                        <View>
                            <Text style={Styles.headertext}>Monicca</Text>
                            <Text style={{ marginLeft: 20 }}>2h ago</Text>
                        </View>
                        <Icon name={'ellipsis-v'} type={'font-awesome'} style={{ marginLeft: 90, marginBottom: 20, width: 8, height: 24 }} />
                    </Card.FeaturedTitle>
                    <Card.FeaturedTitle style={Styles.post}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Text style={Styles.question}>
                                Lorem ipsum dolor sit amet, consectetur a
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur a
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur a
                            </Text>
                        </TouchableOpacity>
                    </Card.FeaturedTitle>
                    <Card.FeaturedTitle style={{ padding: '1%', marginTop: '4%' }}>
                        <View style={Styles.iconContainer}>
                            <View style={{ marginLeft: 10, marginBottom: -20, display: 'flex', flexDirection: 'row' }}>
                                <Icon name={'thumbs-up'} type={'font-awesome'} style={{ width: 40, height: 40 }} color={'#3D93D1'} />
                                <Text>1K</Text>
                            </View>
                            <View style={{ marginLeft: 35, marginBottom: -20 }}>
                                <Icon name={'star-o'} type={'font-awesome'} style={{ width: 40, height: 40 }} color={'#3D93D1'} />
                            </View>
                            <View style={{ marginLeft: 35, marginBottom: -20 }}>
                                <Icon name={'share-alt'} type={'font-awesome'} style={{ width: 38, height: 38 }} color={'#3D93D1'} />
                            </View>
                            <TouchableOpacity style={{ marginLeft: 35, alignSelf: 'flex-end', marginBottom: -18 }} >
                                <Icon name={'comment'} type={'font-awesome'} style={{ width: 38, height: 38 }} color={'#3D93D1'} />
                            </TouchableOpacity>
                        </View>
                    </Card.FeaturedTitle>
                </Card>
            </View>
        );
    };
    const Replies = () => {
        return (
            <View style={{ width: '97%',alignItems:'flex-start',marginLeft:1 }}>
                {Info.replies.map(data => 
                <Card key={data.id} containerStyle={{ borderRadius: 20, }}>
                    <Card.FeaturedTitle style={Styles.cardHeader}>
                        <View style={{ padding: '2%' }}>
                            <Card.Image source={data.pic} style={Styles.profile} />
                        </View>
                        <View>
                            <Text style={Styles.repliyHeader}>{data.username}</Text>
                            <Text style={{ marginLeft: 10 }}>{data.time}</Text>
                        </View>
                        <Icon name={'ellipsis-v'} type={'font-awesome'} style={{ marginLeft: 145, marginBottom: 20, width: 8, height: 24 }} />
                    </Card.FeaturedTitle>
                    <Card.FeaturedTitle style={Styles.post}>
                        <View>
                            <Text style={Styles.question}>
                                {data.reply}
                            </Text>
                            <Text>
                                {data.reply}
                            </Text>

                        </View>
                    </Card.FeaturedTitle>
                    <Card.FeaturedTitle style={{ padding: '1%', marginTop: '1%' }}>
                        <View style={Styles.iconContainer}>
                            <TouchableOpacity style={{ marginLeft: 200, marginBottom: -30, display: 'flex', flexDirection: 'row' }}>
                                <Icon name={'thumbs-up'} type={'font-awesome'} style={{ width: 40, height: 40 }} color={'#3D93D1'} />
                                <Text>{data.number}</Text>
                            </TouchableOpacity>
                        </View>
                    </Card.FeaturedTitle>
                </Card>
                )}
            </View>
        );
    };
    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headertext}>Q' As</Text>
            </View>
            <View>
                <Postcard />
            </View>
            <View>
                <Text style={Styles.subtext}>Replies</Text>
                <View style={Styles.repliesContainer}>
                    <Replies />
                </View>
            </View>
        </ScrollView>
    );
}
const Styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.AppBackgroundColor,
        flex:1,
        padding:'6%'
    },
    cardHeader:{
        display:'flex',
        flexDirection:'row',
    
        width:'100%',
        height:70,
    
    },
    subtext:{
        margin:'2%',
        fontSize:SIZES.h4
    },
    headertext:{
        fontSize:SIZES.h1,
        
    
    },
    header:{
        display:'flex',
        flexDirection:'row',
    
        marginTop:'2%',   
    },
    post:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
       padding:'3%',
        marginTop:'-3%',
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
    },
    profile:{
        width:50,
        height:50,
        
    },
    repliyHeader:{
        fontSize:SIZES.h3,
        marginLeft:10
    },
    repliesContainer:{
    
    }
})
export default RepliesContainer