import React,{Component, useEffect} from 'react';
import {Text, StyleSheet,View,ImageBackground, Image,useWindowDimensions} from 'react-native';


const Splash = ({
    navigation,

    }) => {
        const img={uri:'https://raw.githubusercontent.com/Makgathokln/DueSharp/main/images/edusharp.png'}
        const layout=useWindowDimensions()
        useEffect(() => {
            setTimeout(() =>{
                navigation.navigate('home')
            }, 3000);
    }, [])

    return (
        
        
        <View style={styles.home}>
            <Image source={require('../../assets/eduSharp.png')} resizeMode='contain' style={{
                width:'100%',height:'30%'
            }}/>
            <View style={styles.TextContainer}><Text style={styles.eduText}>Edu</Text>
            <Text style={styles.last}>Sharp</Text></View>
                        
          
        
        </View>
    )
};


const styles = StyleSheet.create({
    home: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    eduText:{
        marginTop:-15,
        fontWeight:'400',
        fontSize:45,
        color:'#3b3c3d'
        
    },
    last:{
        marginTop:-15,
        fontWeight:'500',
        fontSize:45,
        color:'#269094',
      
    },
    TextContainer:{
        flexDirection:'row'
    }
});

export default Splash;
