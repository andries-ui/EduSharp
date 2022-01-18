import React,{useState} from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity,StyleSheet,Modal,Picker} from 'react-native'
import { Icon,Card, BottomSheet,Input,ListItem } from 'react-native-elements';
import { COLORS, FONTS, SIZES, icons } from "../../constants";
//import ToggleSwitch from 'toggle-switch-react-native'
import Info from './Q&A'


const Material = ()=> {
    // const [toggle, setToggle] = useState(true)
    // const option = () => {
    //     setToggle(!toggle)
    // }
    const [isVisible, setIsVisible] = useState(false)
    const [share, setShare] = useState(false)
    const [modalVisible, setVisible] = useState(false)

    const MaterialCard = ()=>{
        return(
            <View>
                {Info.material.map(data=>
                    <Card key={data.id} containerStyle={{borderRadius:10,}} >
                        <Card.FeaturedTitle>
                            <View style={Styles.cardHeader}>
                                <Image source={data.picUser} style={{width:40,height:40,borderRadius:50}}/>
                                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:250}}>
                                    <View style={{marginLeft:'4%'}}>
                                        <Text style={{fontSize:18}}>{data.name}</Text>
                                        <Text>{data.time}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setIsVisible(true)} style={{alignSelf:"flex-end"}}>
                                        <Icon name={'ellipsis-v'} type={'font-awesome'} style={{ right:'0%', marginBottom: 20, width: 8, height: 24 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Card.FeaturedTitle>
                        <Card.Image source={data.pic} style={{width:'100%',height:200}}>
                           <View style={{backgroundColor:'black',opacity:0.7,marginTop:'auto',borderRadius:10}}>
                               <Text style={{color:'white',padding:'2%',fontWeight:'600',fontSize:25,paddingLeft:'4%'}}>{data.title}</Text>
                               <Text style={{color:'white',padding:'2%',paddingLeft:'4%',fontSize:15}}>{data.subtitle}</Text>
                           </View>
                        </Card.Image>
                    </Card>
                    )}
   
            </View>
        )
    }
    return(
        <>
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Text style={Styles.headerText}>Material</Text>
                    <TouchableOpacity style={Styles.searchIcon}>
                        <Icon name='search' type='font-awesome' size={23} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={Styles.subtitle}>
                        <Text style={Styles.text}>View only the content that is relevent to my course</Text>
                        {/* <ToggleSwitch
                            isOn={true}
                            onColor={'#3D93D1'}
                            offColor="red"
                            labelStyle={{ color: "black", fontWeight: '900' }}
                            size="medium"
                            style={Styles.toggle}
                        /> */}
                    </View>
                    <MaterialCard/>
        
                </ScrollView>
                <TouchableOpacity  onPress={() => setVisible(true)} style={{ width: 60, height: 60, borderRadius: 40, backgroundColor: '#4B7BE8', justifyContent: 'center', alignSelf: 'flex-end', marginTop: '-16%', marginBottom: '1%',marginRight:'2%' }}>
                    <Icon name={'plus'} type={'font-awesome'} size={30} color={COLORS.White} />
                </TouchableOpacity>
                <View>
                
                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            alert('Modal closed')
                            setVisible(!modalVisible)
                        }
                        }
                        presentationStyle={'overFullScreen'}
                    >
                        <View style={Styles.modalContainer}>
                            <View style={Styles.postContainer}>
                                <Text style={Styles.modalheadertext}>Add Material</Text>
                                <View style={Styles.picker}>
                                    <Picker>
                                        <Picker.Item label='Select grade' />
                                       
                                    </Picker>
                                </View>
                                <View style={Styles.picker}>
                                    <Picker>
                                        <Picker.Item label='Select Subject' />
                                    </Picker>
                                </View>
                                <View style={Styles.modalInput}>
                                    <Input
                                        placeholder={'State the topic'}
                                        containerStyle={{ backgroundColor: COLORS.White, height: '100%', borderRadius: 10, padding: '1%' }}
                                        inputContainerStyle={{ borderColor: 'white' }}

                                    />
                                </View>
                                <View style={Styles.modalInputDes}>
                                    <Input
                                        placeholder={'Description'}
                                        containerStyle={{ backgroundColor: COLORS.White, height: '100%', borderRadius: 10, padding: '2%' }}
                                        inputContainerStyle={{ borderColor: 'white' }}

                                    />
                                </View>
                                <TouchableOpacity style={Styles.fileContainer}>
                                    <Input
                                        placeholder={'Add a Photo'}
                                        containerStyle={{ height: '100%', borderRadius: 20 }}
                                        inputContainerStyle={{ borderColor: '#EAEAEA' }}
                                        rightIcon={<Icon name={'image'} type={'font-awesome'} size={18} color={COLORS.primary} />}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.fileContainer}>
                                    <Input
                                        placeholder={'Take a Picture'}
                                        containerStyle={{ height: '100%', borderRadius: 1, padding: '1%' }}
                                        inputContainerStyle={{ borderColor: '#EAEAEA' }}
                                        rightIcon={<Icon name={'camera'} type={'font-awesome'} size={18} color={COLORS.primary} />}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.fileContainer}>
                                    <Input
                                        placeholder={'Add pdf,doc, or'}
                                        containerStyle={{ borderRadius: 1, padding: '1%', height: '100%' }}
                                        inputContainerStyle={{ borderColor: '#EAEAEA' }}
                                        rightIcon={<Icon name={'file'} type={'font-awesome'} size={18} color={COLORS.primary} />}
                                    />
                                </TouchableOpacity>
                                <View style={Styles.buttons}>
                                    <TouchableOpacity onPress={() => setVisible(false)} style={Styles.cancel}><Text style={Styles.cancelText}>Cancel</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => alert('Material successfully uploaded')} style={Styles.postbutton} ><Text style={Styles.postText}>Upload</Text></TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </Modal>
                </View>
                <View style={{alignContent:'center'}}>
                        <BottomSheet
                            modalProps={{}}
                            isVisible={isVisible}>
                            <View>
                                <TouchableOpacity onPress={() => setIsVisible(false)}>
                                    <Icon name={'arrow-down'} type={'font-awesome'} color={'#EAEAEA'} />
                                </TouchableOpacity >
                               <View  style={{ borderTopEndRadius:20 ,padding:'2%',borderTopStartRadius:60,paddingBottom:'-2%'}}>
                               {
                                    Info.materialItems.map((item, l) =>
                                        <ListItem key={item.id} style={{ color: '#7DB4DA', borderRadius: 20 }} >
                                            <ListItem.Content style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                                <Icon type={'font-awesome'} name={item.icon} size={20} color={'#7DB4DA'} style={{ margin: '2%' }} />
                                                <ListItem.Title style={{ color: '#7DB4DA', fontWeight: '700', paddingLeft: '2%', fontSize: 16 }}>{item.name}</ListItem.Title>
                                            </ListItem.Content>
                                        </ListItem>
                                    )
                                }
                               </View>
                            </View>
                        </BottomSheet>
                    </View>
            </View>
        </>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.AppBackgroundColor,
        padding:'3%'
    },
    subtitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent:'space-between'
    },
    text: {
        fontSize: 15,
        width:'50%'
    },
    toggle: {
       marginRight:'2%'
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4%',
        justifyContent:'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9'
    },
    headerText:{
        fontWeight:'600',
        fontSize:25
    },
    searchIcon:{
        marginRight:'2%'
    },
    cardHeader:{
        display:'flex',
        flexDirection:'row',
        width:'100%'
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.8

    },
    postContainer: {
        backgroundColor: COLORS.AppBackgroundColor,
        height: '90%',
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: '5%',
        paddingTop: '6%'

    },
    picker: {
        width: '90%',
        backgroundColor: COLORS.White,
        margin: '1%',
        borderRadius: 10,
    },
    modalInput: {
        width: '90%',
        backgroundColor: COLORS.White,
        margin: '1%',
        height: '9%',
        borderRadius: 10,

    },
    modalInputDes: {
        width: '90%',
        backgroundColor: COLORS.White,
        margin: '1%',
        borderRadius: 10,
        height: '15%'
    },
    modalheadertext: {
        fontSize: SIZES.h2,
        margin: '4%'
    },
    fileContainer: {
        width: '90%',
        backgroundColor: '#EAEAEA',
        margin: '1%',
        height: '9%',
        borderRadius: 20
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: '40%'
    },
    cancel: {
        marginTop: '4%',
        width: '40%',
        height: 40,
        alignItems: 'center', justifyContent: 'center',
        marginBottom:'4%'
    },
    postbutton: {
        marginTop: '4%',
        width: '45%',
        height: 45,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        marginBottom:'4%'
    },
    postText: {
        color: 'white',
        fontSize: 18
    },
    cancelText: {
        color: 'black',
        fontSize: 18,
        paddingRight: '14%'
    },
    bottomInputDes: {
        backgroundColor: '#f2f2f2',
        margin: 'auto',
        borderRadius: 15,
        padding:'auto',
        width:'85%',height:150,
        marginTop:'6%'
    },
    SheetfileContainer:{
        backgroundColor: '#f2f2f2',
        margin: 'auto',
        borderRadius: 25,
        height:55,
        marginTop:'2%',
        width:'85%'
    }

})
export default Material