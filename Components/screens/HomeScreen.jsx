import React from "react";

const HomeScreen = () =>{
    const layout = useWindowDimensions()
    const img = {uri:'https://s3-alpha-sig.figma.com/img/de23/e554/ebdc307453e297e144715b1cca292de4?Expires=1635724800&Signature=NcDpb-b3oyY79hcr1Vkrz2rSZ~aKin3LL0DMt6bvMmOTrkuIM4icgTleI2zTBg9P67KwMxVn0Ulx7JOWluwnRkZIZVi14ZnZidNRipjaccD5MlyIlG0gFM5exs~nkZ-C1347by~HgMtQMA8bU1qiKYh0~5MVgycQZf~YTWCWii9fO3ycYzxgAIjDtpGaKcQweUfN1mVkXoxF96lmNjJgkGAPiZTXm1xTxcAR5HskdoAylf3Y2PQTRDQL0ITSbj1RBzPJVsshFfDMLU0OpjFGo0UuC4F6569dAPCdOs8xA4nFCosEc0SMJwLL8mxvLOTpHp6t97S9J9Fa8Xm~Gjv3pg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
    return(
        <SafeAreaView>
            <View 
            style={{   marginTop:60,
                alignSelf:'center',
                margin:20,
                borderWidth:1,
                height:layout.height,
                margin:8,
                borderColor:'transparent'}}>
                <View style={{margin:30}}>
                    <Text style={{ fontWeight:'700',
            fontSize:35}}>Welcome</Text>
                    <View style={{alignSelf:'center',width:'100%'}}>
                       <Image source={img} style={{width:250,height:300,alignSelf:'center'}}></Image>
                    </View>
                    <View style={{marginTop:60}}>
                        <TouchableOpacity style={{borderRadius:20,backgroundColor:'#2769ba',alignSelf:'center',width:300,height:40}}><Text style={{color:'white',alignSelf:'center',padding:4}}>Sign In </Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('register')} style={{borderRadius:20,backgroundColor:'#cc1d32',alignSelf:'center',width:300,height:40,margin:20}}><Text style={{color:'white',alignSelf:'center',padding:4}}>Sign Up </Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
     
    },
    semicontainer:{

    },
    welcomeText:{
       
    }

})

export default HomeScreen;