import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Formik } from "formik";
import * as Yup from 'yup'
import { TextInput } from "react-native-paper";
import { CheckBox } from "react-native-elements";

const Register = () => {
    const [checked, setChecked] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [users, setUsers] = useState([])
    const [showpassword, setShowPassword] = useState(true)

    const layout = useWindowDimensions()
    const show = () => {
        setShowPassword({ showpassword: !showpassword })
    }

    const validate = Yup.object({
        name: Yup.string().max(15, 'Only 15 Characters Allowed').required('*Required*'),
        email: Yup.string().email('Not the correct format').required('*Required*'),
        password: Yup.string().min(6, 'Atleast 6 Characters ').required('*Required*'),
        confirm: Yup.string().min(6, 'Atleast 6 Characters ').required('*Required*'),
        checked: Yup.bool().oneOf([true], ' ').required('*Required*'),

    })
    const createUser = () => {
        setUsers([...users, {
            name: name,
            email: email,
            password: password,
            confirm: confirm
        }])
    }
    return (
        <SafeAreaView>
            <View style={{ padding: 10, margin: 20, marginTop: 80, alignItems: 'center', width: layout.width, height: layout.height }}>
                <View style={{ width: '90%', margin: 0, padding: 0 }}>
                    <Text style={{ padding: 3, fontWeight: '500', fontSize: 45,color:'#3b3c3d' }}>
                        Sign Up
                    </Text>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirm: '',
                            checked: false
                        }}
                        validateOnMount={true}
                        validationSchema={validate}
                        onSubmit={(values) => createUser(values.name, values.email, values.password, values.confirm, values.checked)}
                    >
                        {({
                            errors,
                            values,
                            handleChange,
                            handleBlur,
                            touched,
                            handleSubmit
                        }) =>
                        (
                            <View>
                                <View style={styles.text}>
                                    <TextInput
                                        value={values.name}
                                        placeholder={'Enter User Name'}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        label="User names"
                                        style={styles.inputSearch}
                                        left={<TextInput.Icon name="account" size={35} style={{ padding: 4, marginTop: 10 }} />}
                                    />
                                    {errors.name && touched.name ? (
                                        <Text style={{ alignSelf: 'flex-start', color: 'red' }}>
                                            {errors.name}
                                        </Text>
                                    ) : null}
                                </View>
                                <View style={styles.text}>
                                    <TextInput
                                        value={values.email}
                                        placeholder={'Enter Email Address'}
                                        onBlur={handleBlur('email')}
                                        onChangeText={handleChange('email')}
                                        label="Email"
                                        style={styles.inputSearch}
                                        left={<TextInput.Icon name="email" size={30} style={{ padding: 4, marginTop: 10 }} />}
                                    />
                                    {errors.email && touched.email ? (
                                        <Text style={{ alignSelf: 'flex-start', color: 'red' }}> {errors.email}</Text>
                                    ) : null}
                                </View>
                                <View style={styles.text}>
                                    <TextInput
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        label="Password"
                                        style={styles.inputSearch}
                                        left={<TextInput.Icon name="lock" size={30} style={{ padding: 4, marginTop: 10 }} />}
                                        right={<TextInput.Icon name="eye" size={28} onPress={show} style={{ padding: 4, marginTop: 10 }} />}
                                        secureTextEntry={true}
                                    />
                                    {errors.password && touched.password ? (
                                        <Text style={{ alignSelf: 'flex-start', color: 'red' }}>
                                            {errors.password}
                                        </Text>
                                    ) : null}
                                    <Text
                                        style={{
                                            alignSelf: 'flex-start',
                                            padding: 5
                                        }}
                                    >
                                        Strong Password:EduSharp@123
                                    </Text>
                                </View>
                                <View style={styles.text}>
                                    <TextInput
                                        value={values.confirm}
                                        onChangeText={handleChange('confirm')}
                                        onBlur={handleBlur('confirm')}
                                        label="Confirm Password"
                                        style={styles.inputSearch}
                                        left={<TextInput.Icon name="lock" size={30} style={{ padding: 4, marginTop: 10 }} />}
                                        right={<TextInput.Icon name="eye" size={28} style={{ padding: 4, marginTop: 10 }} />}
                                        secureTextEntry={true}
                                    />
                                    {errors.confirm && touched.confirm ? (
                                        <Text style={{ alignSelf: 'flex-start', color: 'red' }}>
                                            {errors.confirm}
                                        </Text>
                                    ) : null}
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row',  }}>
                                    <CheckBox
                                        title={"Accept T's & Cs"}
                                        onPress={() => {
                                            setChecked({ checked: !checked })
                                        }}
                                        style={{
                                            backgroundColor: 'gainsboro'
                                        }}
                                        checked={checked}
                                        onBlur={handleBlur('checked')}
                                    />
                                    {errors.checked && touched.checked ? (
                                        <Text style={{ color: 'red' }}>
                                            {errors.checked}
                                        </Text>
                                    ) : null}
                                </View>
                                <Text style={{
                                    marginTop:-40,
                                    color: '#337af5',
                                    marginLeft:'70%'
                                    }}>
                                    View More
                                </Text>

                                <View style={{ marginTop: 18, }}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: '#4372c4',
                                            width: '90%',
                                            height: 40,
                                            borderRadius: 20,
                                            margin: 8
                                        }}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={{ color: 'white', alignSelf: 'center', padding: 6 }}>
                                            Register
                                        </Text>
                                    </TouchableOpacity>
                                    <Text
                                        style={{
                                            alignSelf: 'center',
                                            margin: 4
                                        }}
                                    >
                                        Have an account? Sign In
                                    </Text>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    Search: {
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 60,
        elevation: 8,
        borderRadius: 40
    },
    inputSearch: {
        width: '90%',
        height: 50,
        padding: 5,
        alignContent: 'center',
        shadowColor: '#d5dbe3',
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomRightRadius: 5,
        borderTopStartRadius: 5

    },
    text: {
        padding: 4,
        margin: 4,
    }
})
export default Register