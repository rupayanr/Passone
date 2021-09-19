import React, { useState, useContext } from 'react'
import { impactAsync } from 'expo-haptics'
import { Container, SubText, Button, ButtonContainer, ButtonText } from '../../styles/styledComponents'
import { TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import TextField from '../TextField'
import Footer from '../Footer'
import Header from '../Header'
import { AuthContext } from '../Authentication/AuthProvider'


export default function SignUp({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const { signUp } = useContext(AuthContext)

    const confirmPassword = (value) => {
        setConfirm(value);
    }

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <Container>
                <Header value='Sign Up.' icon='corner-up-left' navigation={navigation} />

                <TextField icon='mail'
                    placeholder='Email'
                    onChangeText={handleEmailChange}
                />

                <TextField icon='lock'
                    placeholder='Password'
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}
                />

                <TextField icon='lock'
                    placeholder='Confirm Password'
                    onChangeText={confirmPassword}
                />

                <ButtonContainer height='17%'>
                    <Button color="#F50057" onPress={() => {
                        impactAsync('medium');
                        signUp(email, password, confirm);
                    }}>
                        <ButtonText>Sign Up</ButtonText>
                    </Button>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <SubText>Have an account?</SubText>

                        <TouchableOpacity onPress={() => {
                            impactAsync('light')
                            navigation.navigate("Login")
                        }}>
                            <SubText bold={true}>Login.</SubText>
                        </TouchableOpacity>
                    </View>

                </ButtonContainer>
                <Footer type='sign up' />

            </Container>
        </TouchableWithoutFeedback>
    )
}
