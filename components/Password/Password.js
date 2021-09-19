import React, { useState } from 'react'
import { View, Keyboard, Modal, Text, TouchableOpacity } from 'react-native'
import {
    Button,
    ButtonText,
    ModalContainer,
    ModalBackGround,
    DeleteContainer,
    NewPassword,
    ButtonContainer
} from '../../styles/styledComponents'
import { Feather } from '@expo/vector-icons';
import { Formik } from 'formik'
import { impactAsync } from 'expo-haptics'
import TextField from '../TextField';

const base64 = require('base-64')
const utf8 = require('utf8')

export default function Password({ item, handleDelete, handleEdit }) {

    const encrypt = (pass) => {
        const bytes = utf8.encode(pass)
        const encryptedPass = base64.encode(pass)
        return encryptedPass
    }

    const decrypt = (pass) => {
        const bytes = utf8.decode(pass)
        const decryptedPass = base64.decode(bytes)
        return decryptedPass
    }


    const haptic = (style) => {

        if (style == 'lt') {
            impactAsync('light')
        }

        if (style == 'md') {
            impactAsync('medium')
        }

        if (style == 'hy') {
            impactAsync('heavy')
        }
    }

    const [del, setDel] = useState(false);
    const [edit, setEdit] = useState(false);

    const openEdit = () => {
        haptic('lt')
        setEdit(true)
    }

    const openDelete = () => {
        haptic('md')
        setDel(true)
    }

    return (
        <View style={{ alignItems: 'center', padding: '4%' }}>
            <Button color='#2F2E41' onPress={openEdit} >

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }} >
                    <ButtonText wd='70%' mr='0%'>

                        {item.name}

                    </ButtonText>

                    <TouchableOpacity onPress={openDelete}>
                        <Feather name='trash' size={32} color="white" />
                    </TouchableOpacity>
                </View>

            </Button>

            {/* DELETE MODAL */}
            <Modal visible={del} transparent animationType='fade'>
                <ModalBackGround>
                    <DeleteContainer>
                        <View>
                            <ButtonText>
                                Are you sure you want to delete this?
                            </ButtonText>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button color='#F50057' width='45%' height='55px' onPress={handleDelete}>
                                <ButtonText>
                                    Yes
                                </ButtonText>
                            </Button>
                            <Button color='#2F2E41' width='45%' height='55px' onPress={() => setDel(false)}>
                                <ButtonText>
                                    No
                                </ButtonText>
                            </Button>
                        </View>

                    </DeleteContainer>
                </ModalBackGround>
            </Modal>

            {/* EDIT MODAL */}
            <Modal visible={edit} transparent animationType='slide'>
                <ModalBackGround>
                    <ModalContainer>
                        <View style={{ alignItems: 'flex-end' }}>

                            <TouchableOpacity onPress={() => setEdit(false)}>
                                <Feather name='x' size={28} color='white' />
                            </TouchableOpacity>
                        </View>
                        <Formik

                            initialValues={{
                                name: item.name,
                                link: item.link,
                                password: decrypt(item.password),
                            }}

                            onSubmit={(values) => {

                                handleEdit(item.key, values)
                            }}


                        >
                            {({ handleChange, handleSubmit, values }) => (
                                <NewPassword>

                                    <TextField
                                        height='18%'
                                        ml='0%'
                                        width='100%'
                                        icon='menu'
                                        placeholder='Name'
                                        color='#121212'
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        name="name"
                                    />

                                    <TextField
                                        height='18%'
                                        ml='0%'
                                        width='100%'
                                        icon='link'
                                        placeholder='URL / Email / Link'
                                        color='#121212'
                                        onChangeText={handleChange('link')}
                                        value={values.link}
                                        name="link"
                                    />

                                    <TextField
                                        name="pass"
                                        height='18%'
                                        ml='0%'
                                        width='100%'
                                        icon='lock'
                                        placeholder='Enter Password'
                                        color='#121212'
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                    />



                                    <ButtonContainer>
                                        <Button color="#2F2E41" onPress={() => {

                                            Keyboard.dismiss();
                                            handleSubmit();
                                            setEdit(false);
                                            haptic('md')
                                        }}>
                                            <Text style={{
                                                marginLeft: '15%',
                                                marginTop: '7%',
                                                fontSize: 22,
                                                color: 'white',
                                                fontFamily: 'Poppins'
                                            }}>Save Changes</Text>
                                        </Button>
                                    </ButtonContainer>

                                </NewPassword>
                            )}

                        </Formik>
                    </ModalContainer>
                </ModalBackGround>
            </Modal>


        </View>

    )
}
