import React, { useState, useRef, useContext, useEffect } from 'react'
import Header from '../Header'
import TextField from '../TextField'
import { View, FlatList, TouchableWithoutFeedback, Keyboard, Modal, Text, TouchableOpacity } from 'react-native'
import {
    Container,
    Button,
    FloatingButton,
    ModalContainer,
    SideModal,
    ModalBackGround,
    NewPassword,
    ButtonContainer,

} from '../../styles/styledComponents'
import { Feather } from '@expo/vector-icons';
import { impactAsync } from 'expo-haptics'
import { AuthContext } from '../Authentication/AuthProvider'
import { Formik } from 'formik'
import Password from '../Password/Password'
import * as firebase from 'firebase'
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'
import PreLoader from '../PreLoader'

const base64 = require('base-64')
const utf8 = require('utf8')


export default function Passwords() {

    const { logout, getUid, getEmail, user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [passOpen, setPassOpen] = useState(false);
    const [pass, setPass] = useState([])
    const [userId, setUserId] = useState('')
    const [userEmail, setUserEmail] = useState('')

    if (userId == null) {
        logout();
    }


    // Fetching user details such as uid, email from user object for sending them to methods
    const db = firebase.firestore();


    // Encrypt before pushing it to db
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


    // Decrypt before pulling from db

    const fetchPasswords = async () => {

        const userRef = await db.collection('users').doc(userId)
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            console.log('No user')
            createNewUser();
        }
        else {
            // get document 
            const passwords = userDoc.data().passwords;
            setPass(passwords)
        }


    }

    const createNewUser = async () => {
        console.log('Creating new user......')
        // Object Containing user details and passwords array of objects
        const details = {
            email: userEmail,
            passwords: []
        }

        const userRef = await db.collection("users").doc(userId).set(details)
        console.log('User Created...')
    }


    // Figure out a way to show fake loading transitions so that async functions receive a promise 
    useEffect(() => {
        // Setting user variables after mount 
        setUserId(getUid())
        setUserEmail(getEmail())
        fetchPasswords();

    }, [<Passwords />])


    const handleModalChange = () => {
        haptic('hy')
        setOpen(!open);

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

    const handleLogout = () => {
        haptic('hy')
        logout();
    }

    const newPassModal = () => {
        haptic('md')
        setOpen(false);
        setPassOpen(true);
    }

    const handleDelete = async (key) => {
        console.log(key)
        const userRef = await db.collection('users').doc(userId)
        const userDoc = await userRef.get()

        const oldPass = userDoc.data().passwords;

        const newPass = oldPass.filter(object => object.key != key)

        setPass(newPass)

        const newObject = {
            email: userEmail,
            passwords: newPass
        }

        userRef.set(newObject)


    }

    const handleAdd = async (object) => {
        // Generating a key and assigning it to the object  
        object.key = uuidv4();

        // fetching document from users collection   
        const userRef = await db.collection('users').doc(userId);
        const userDoc = await userRef.get();

        // Fetching passwords array from document 
        const oldPass = userDoc.data().passwords;

        // Pushing new object to passwords array
        const newPass = [...oldPass]
        newPass.push(object)

        // Constructing new object to replace the older ones with the updated array  
        // Try using update method 
        const newObject = {
            email: userEmail,
            passwords: newPass,
        }

        // Setting the document with the new updated object 
        userRef.set(newObject)

        // Updating state of passwords 
        setPass(newPass)
        // Sets the password modal off 
        setPassOpen(false);
    }

    const handleEdit = async (key, object) => {
        // Copies prev password state to new array 
        const userRef = await db.collection('users').doc(userId)
        const userDoc = await userRef.get()

        const oldPass = userDoc.data().passwords;

        const newPass = [...oldPass];

        // Finds index of the edited item using key as identifier
        const index = newPass.findIndex(pass => pass.key === key)

        // Assign the edited objet to that index replacing the prev val 
        newPass[index] = Object.assign(newPass[index], { link: object.link, name: object.name, password: encrypt(object.password) });

        const newObject = {
            email: userEmail,
            passwords: newPass
        }

        userRef.set(newObject)
        // Setting the new state 
        setPass(newPass)
    }



    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();

        }}>
            <Container>
                <Header value='Passwords.' icon='key' />

                <TextField height='7%' width='70%' ml='15%' icon='search' placeholder='Search' />
                {/* Try using a flatList for performace */}


                <FlatList

                    data={pass}
                    renderItem={({ item }) => (

                        <Password item={item} handleDelete={() => handleDelete(item.key)} handleEdit={handleEdit} />

                    )}

                />
                <FloatingButton activeOpacity={0.5} onPress={handleModalChange}>
                    <Feather name='plus' size={28} color='#121212' />
                </FloatingButton>


                {/* Options Modal */}

                <Modal visible={open} transparent animationType='fade'>
                    <SideModal>
                        <View>
                            <FloatingButton activeOpacity={0.5} modal={true} onPress={handleLogout}>
                                <Feather name="log-out" size={26} color="#121212" />
                            </FloatingButton>
                        </View>


                        <FloatingButton activeOpacity={0.5} onPress={newPassModal}>
                            <Feather name="plus" size={26} color="#121212" />
                        </FloatingButton>

                    </SideModal>

                    <FloatingButton activeOpacity={0.5} onPress={handleModalChange}>
                        <Feather name='x' size={28} color='black' />
                    </FloatingButton>

                </Modal>




                {/* New Password Modal */}
                <Modal visible={passOpen} transparent animationType='slide'>
                    <ModalBackGround>
                        <ModalContainer>
                            <View style={{ alignItems: 'flex-end', height: '5%' }}>

                                <TouchableOpacity onPress={() => setPassOpen(false)}>
                                    <Feather name='x' size={28} color='white' />
                                </TouchableOpacity>
                            </View>

                            <Formik

                                initialValues={{
                                    name: '',
                                    link: '',
                                    password: '',
                                }}

                                onSubmit={(values) => {
                                    const { password } = values
                                    const encryptedPassword = encrypt(password)
                                    const newObject = {
                                        name: values.name,
                                        link: values.link,
                                        password: encryptedPassword
                                    }

                                    handleAdd(newObject)
                                    //handleAdd(values)
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
                                            value={values.name} />

                                        <TextField
                                            height='18%'
                                            ml='0%'
                                            width='100%'
                                            icon='link'
                                            placeholder='URL / Email / Link'
                                            color='#121212'
                                            onChangeText={handleChange('link')}
                                            value={values.link}
                                        />

                                        <TextField
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
                                            <Button color="#F50057" onPress={() => {

                                                Keyboard.dismiss();
                                                handleSubmit();
                                                setPassOpen(false)
                                                haptic('md')
                                            }}>
                                                <Text style={{
                                                    marginLeft: '15%',
                                                    marginTop: '7%',
                                                    fontSize: 22,
                                                    color: 'white',
                                                    fontFamily: 'Poppins'
                                                }}>Add Password</Text>
                                            </Button>
                                        </ButtonContainer>

                                    </NewPassword>
                                )}

                            </Formik>
                        </ModalContainer>
                    </ModalBackGround>

                </Modal>


            </Container>
        </TouchableWithoutFeedback>
    )
}
