import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, FlatList, Modal, Picker } from 'react-native'
import { Card, Icon, Input, ListItem, BottomSheet, Divider } from 'react-native-elements'
import { COLORS, SIZES } from "../constants";
import { Switch } from "react-native-switch";
import Info from '../mock/Q&A'
import Post from "./PostQuestion";
import Cam from "../components/camera";
import ProgressIndicator from "../components/progressIndicator";
import GeneralService from "../BackendFirebase/services/GeneralService";
import Auth from "../BackendFirebase/services/Auth";
import { auth } from "../BackendFirebase/configue/Firebase";
import { Snackbar } from 'react-native-paper';


const QList = ({ navigation }) => {

    const [isVisible, setIsVisible] = useState(false)
    const [share, setShare] = useState(false)
    const [modalVisible, setVisible] = useState(false)
    const [selectedGrade, setselectedGrade] = useState('Grade 8');
    const [selectedSubject, setselectedSubject] = useState('Mathematics');
    const [openCamera, setopenCamera] = useState(false);
    const [topic, settopic] = useState(null);
    const [description, setdescription] = useState(null);
    const [loading, setloading] = useState(false);
    const [alert, setalert] = useState(false);
    const [alertMessage, setalertMessage] = useState('');
    const [post, setpost] = useState([])

    const GetPosts = async() => {

     let data = await GeneralService.get("questionAndAnswers");
       
      console.log('====================================');
      console.log(data, "==>>>>===>>");
      console.log('====================================');
      console.log(data);
      // .catch((err) => {
        //         setalert(true);
        //         setloading(false);
        //         setalertMessage('Erroor has occured, please ry again in a moment.');
        //         console.log(err);
        // });

    }

    const handleLike = () => {
        GeneralService.indiPost("questionAndAnswers").then(res => {
            setalert(true);
            setalertMessage("Liked");
        })
            .catch(err => {
                setalert(true);
                setalertMessage(err)
            })
    }


    const Postcard = () => {
        return (
            <View >
                {
                    post.map(data =>
                        <Card key={data.id} containerStyle={{ borderRadius: 10, }} >
                            <Card.FeaturedTitle style={Styles.cardHeader}>
                                <View style={Styles.headerContainer}>
                                    <Card.Image source={data.pic} style={Styles.profile} />
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#4545ede', width: '100%' }}>
                                        <View>
                                            <Text style={Styles.headertext}>{data.username}</Text>
                                            <Text style={{ marginLeft: 20 }}>{data.time}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => setIsVisible(true)} style={{ alignSelf: "flex-end" }}>
                                            <Icon name={'ellipsis-v'} type={'font-awesome'} style={{ marginBottom: 20, width: 8, height: 24 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card.FeaturedTitle>
                            <Card.FeaturedTitle style={Styles.post} >
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
                            <Divider style={{ height: 5, width: '100%', backgroundColor: COLORS.AppBackgroundColor }} />
                            <View style={{ paddingHorizontal: 1, padding: '1%', marginTop: 'auto', backgroundColor: COLORS.Danger }}>
                                <View style={[Styles.iconContainer, { width: '100%', flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <View style={{ marginLeft: 5, display: 'flex', flexDirection: 'row' }}>
                                        <Icon name={'thumb-up'} type={'material-community'} size={26} color={'#3D93D1'} onPress={handleLike()}/>
                                        <Text>{data.number}</Text>
                                    </View>
                                    <View>
                                        <Icon name={'star-outline'} type={'material-community'} size={26} color={'#f79f45'} />
                                    </View>
                                    <View >
                                        <Icon name={'share-all'} type={'material-community'} size={26} color={'#3D93D1'} />
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate(data.location)} >
                                        <Icon name={'comment'} type={'material-community'} size={26} color={'#3D93D1'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Card>
                    )
                }
            </View>
        )
    }

    const handleAddPost = () => {

        setloading(true);
        if (selectedGrade != null && selectedSubject != null && topic != null && description != null) {
            let values = {
                grade: selectedGrade,
                subject: selectedSubject,
                userID: auth.currentUser.uid,
                topic: topic,
                description: description,
                status: true,
                illustrationURL: null,
                downloadUrl:null,
                visibility:true,
                downloadable:true,
                createdAt: new Date().format,

            }
            GeneralService.post("questionAndAnswers", values, navigation).then((res) => {
                setloading(false);
                setalert(true);
                setalertMessage('Content is posted successfully.');
                setVisible(false);
                console.log(res.data);
            }).catch((err) => {
                setalert(true);
                setloading(false);
                setalertMessage('Erroor has occured, please ry again in a moment.');
                console.log(err);
            })
        } else {
            setalert(true);
            setloading(false);
            setalertMessage("Please provide enought infomation for soliderity.");
        }
    }

    const getPost=async()=>{
        await firestore.collection("questionAndAnswers").get().then(querySnapshot=>{
            console.log('Total users: ', querySnapshot.size);
            let data = [];
            querySnapshot.forEach(documentSnapshot => {
                data.push(documentSnapshot.data());
            });  

            setpost(data);
        }).catch(err=>{
            console.log('====================================');
            console.log(err, "==>>==>");
            console.log('====================================');
        });
    }
    
    useEffect(() => {
        getPost();

    }, [])

    return (
        <View style={Styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {loading ? <View style={{ height: 10 }}><ProgressIndicator /></View> : null}
            </View>
            <View style={Styles.header}>
                <View>
                    <Text style={Styles.headingtext}>
                        Q' As
                    </Text>
                </View>
                <TouchableOpacity style={Styles.touchable} onPress={() => navigation.navigate("search")}>
                    <Icon name='search' type='font-awesome' size={23} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <View style={Styles.subtitle}>
                        <Text style={Styles.text}>View only the content that is relevent to my course</Text>

                    </View>
                    <Postcard />
                </View>
            </ScrollView >
            <TouchableOpacity onPress={() => setVisible(true)} style={{ width: 60, height: 60, borderRadius: 40, backgroundColor: '#4B7BE8', justifyContent: 'center', alignSelf: 'flex-end', marginTop: '-16%', marginBottom: '1%' }}>
                <Icon name={'plus'} type={'font-awesome'} size={30} color={COLORS.White} />
            </TouchableOpacity>
            <View>

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setVisible(!modalVisible)
                    }}
                    presentationStyle={'overFullScreen'}
                >
                    {openCamera ? <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
                        <Cam onClose={() => { setopenCamera(false) }} />
                    </View> :
                        <View style={Styles.modalContainer}>

                            <View style={Styles.postContainer}>
                                {loading ?
                                    <View style={{ height: 10 }}><ProgressIndicator /></View> : null}

                                <Text style={[Styles.modalheadertext, { fontWeight: 'bold' }]}>Make Post</Text>
                                <View style={Styles.picker}>
                                    <Picker selectedValue={selectedGrade}
                                        style={{ height: 45, width: '100%' }}
                                        onValueChange={(itemValue, itemIndex) => setselectedGrade(itemValue)}>
                                        <Picker.Item label='Grade 8' value='Grade 8' />
                                        <Picker.Item label='Grade 9' value='Grade 9' />
                                        <Picker.Item label='Grade 10' value='Grade 10' />
                                        <Picker.Item label='Grade 11' value='Grade 11' />
                                        <Picker.Item label='Grade 12' value='Grade 12' />
                                    </Picker>
                                </View>
                                <View style={Styles.picker}>
                                    <Picker selectedValue={selectedSubject}
                                        style={{ height: 45, width: '100%' }}
                                        onValueChange={(itemValue, itemIndex) => setselectedSubject(itemValue)}>
                                        <Picker.Item label='Mathematics' value="Mathematics" />
                                        <Picker.Item label='Geograpghy' value="Geograpghy" />
                                        <Picker.Item label='Agricultural sciences' value="Agricultural sciences" />
                                        <Picker.Item label='Select Subject' value="Mathematics" />
                                        <Picker.Item label='Select Subject' value="Mathematics" />
                                        <Picker.Item label='Select Subject' value="Mathematics" />
                                        <Picker.Item label='Select Subject' value="Mathematics" />
                                        <Picker.Item label='Select Subject' value="Mathematics" />
                                        <Picker.Item label='Select Subject' value="Mathematics" />
                                    </Picker>
                                </View>
                                <View style={Styles.modalInput}>
                                    <Input
                                        placeholder={'State the topic'}
                                        value={topic}
                                        onChangeText={(e) => settopic(e)}
                                        containerStyle={{ backgroundColor: COLORS.White, height: '100%', borderRadius: 10, padding: '1%' }}
                                        inputContainerStyle={{ borderColor: 'white' }}
                                    />
                                </View>
                                <View style={Styles.modalInputDes}>
                                    <Input
                                        placeholder={'Description'}
                                        keyboardType={'twitter'}
                                        value={description}
                                        onChangeText={(e) => setdescription(e)}
                                        containerStyle={{ backgroundColor: COLORS.White, height: '100%', borderRadius: 10, padding: 1 }}
                                        inputContainerStyle={{ borderColor: 'white' }}
                                    />
                                </View>
                                <TouchableOpacity style={Styles.fileContainer}>
                                    <Input
                                        placeholder={'Take a Picture'}
                                        editable={false}
                                        clickable={false}
                                        containerStyle={{ height: '100%', borderRadius: 1, padding: '1%' }}
                                        inputContainerStyle={{ borderColor: '#EAEAEA' }}
                                        rightIcon={<Icon name={'camera'} type={'font-awesome'} onPress={() => setopenCamera(true)} size={18} color={COLORS.primary} onp />}
                                    />
                                </TouchableOpacity>
                                <View style={Styles.buttons}>
                                    <TouchableOpacity onPress={() => setVisible(false)} style={Styles.cancel}><Text style={Styles.cancelText}>Cancel</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={handleAddPost} style={Styles.postbutton} ><Text style={Styles.postText}>Post</Text></TouchableOpacity>
                                </View>
                            </View>
                            <Snackbar
                                onDismiss={() => setalert(false)}
                                duration={615}
                                style={{ backgroundColor: COLORS.Danger }}
                                visible={alert}>
                                {alertMessage}
                            </Snackbar>
                        </View>}
                </Modal>

            </View>
            <View>
                <BottomSheet
                    modalProps={{}}
                    isVisible={isVisible}>
                    <View style={{ paddingBottom: '1%', borderRadius: 5 }}>
                        <TouchableOpacity onPress={() => setIsVisible(false)}>
                            <Icon name={'arrow-down'} type={'font-awesome'} color={'#EAEAEA'} />
                        </TouchableOpacity >
                        {
                            Info.items.map((item, l) =>
                                <ListItem key={item.id} style={{ color: '#7DB4DA', borderRadius: 20 }} >
                                    <ListItem.Content style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                                        <Icon type={'font-awesome'} name={item.icon} size={20} color={'#7DB4DA'} style={{ margin: '2%' }} />
                                        <ListItem.Title style={{ color: '#7DB4DA', fontWeight: '600', paddingLeft: '2%', fontSize: 16 }}>{item.name}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            )
                        }
                    </View>
                </BottomSheet>
            </View>

            <Snackbar
                onDismiss={() => setalert(false)}
                duration={615}
                style={{ backgroundColor: COLORS.Danger }}
                visible={alert}>
                {alertMessage}
            </Snackbar>
        </View >
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.AppBackgroundColor,
        flex: 1,
        padding: '2%',
        opacity: 1
    }
    , header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4%',
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9'
    },
    headingtext: {
        fontSize: SIZES.h1,
        fontWeight: '100'
    },
    touchable: {
        alignContent: 'flex-end',
        marginLeft: '70%',
        marginTop: '4%'
    },
    subtitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4%'
    },
    text: {
        width: '72%',
        fontSize: 15
    },
    toggle: {
        alignContent: 'flex-end',
        marginLeft: '10%',
        marginTop: '2%'
    },
    profile: {
        width: 50,
        height: 50,
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row'
        , height: 60,
    },
    headertext: {
        fontSize: SIZES.h2,
        marginLeft: 20,
    },
    post: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '3%',
        marginTop: '-2%',
        textAlign: 'center'
    },
    question: {
        padding: '2%',
        fontSize: SIZES.body4
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.8,
    },
    postContainer: {
        backgroundColor: COLORS.AppBackgroundColor,
        paddingHorizontal: 15,
        paddingVertical: 20,
        width: '90%',
        margin: 25,
        alignItems: 'center',
        borderRadius: 12

    },
    picker: {
        width: '100%',
        backgroundColor: COLORS.White,
        margin: '1%',
        borderRadius: 7,
    },
    modalInput: {
        width: '100%',
        backgroundColor: COLORS.White,
        margin: '1%',
        height: 45,
        borderRadius: 7,

    },
    modalInputDes: {
        width: '100%',
        backgroundColor: COLORS.White,
        margin: '1%',
        borderRadius: 7,
        height: 115
    },
    modalheadertext: {
        fontSize: SIZES.h2,
        margin: '4%'
    },
    fileContainer: {
        width: '100%',
        backgroundColor: '#EAEAEA',
        margin: '1%',
        height: 45,
        borderRadius: 7
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
        marginBottom: '4%'
    },
    postbutton: {
        marginTop: '4%',
        width: '45%',
        height: 45,
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        marginBottom: '4%'
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
        padding: 'auto',
        width: '85%', height: 150,
        marginTop: '6%'
    },
    SheetfileContainer: {
        backgroundColor: '#f2f2f2',
        margin: 'auto',
        borderRadius: 25,
        height: 55,
        marginTop: '2%',
        width: '85%'
    },
    headerContainer: {

        display: 'flex',
        flexDirection: 'row',
        width: 250
    }

})
export default QList