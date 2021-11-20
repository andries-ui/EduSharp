import React from 'react'
import { View, Text, SafeAreaView,FlatList } from 'react-native'
import HomeCard from '../Card/HomeCard'

const DashBoard = () => {

    const services = [{ name: "Material", icon: "question-circle", type: "font-awesome" }, { name: "Lesson", icon: "book", type: "font-awesome" },{name:"Q&A",icon:"question-circle",type:"font-awesome"},{name:"Papers",icon:"file-text",type:"font-awesome"}]

    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center',}}>
            <FlatList
                data={services}
                renderItem={({item})=>(
                    <HomeCard data={item}/>
                )}
                horizontal={false}
                numColumns={2}
            />
           
        </SafeAreaView>
    )
}

export default DashBoard
