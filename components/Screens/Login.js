import { impactAsync } from 'expo-haptics'
import React, { useState, useContext } from 'react'
import { TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { Container, SubText, ForgotPassword, Options, ButtonContainer, Button, ButtonText } from '../../styles/styledComponents'
import { AuthContext } from '../Authentication/AuthProvider'
import Footer from '../Footer'
import Header from '../Header'
import TextField from '../TextField'

export default function Login({ navigation }) {


    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext)


    const showHidePassword = () => {
        setShow(!show);
    }

    const onChangeEmail = (value) => {
        setEmail(value);
    }

    const onChangePassword = (value) => {
        setPassword(value);
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <Container>
                <Header value='Login.' icon='corner-up-left' navigation={navigation} />

                <TextField
                    icon='mail'
                    placeholder='Email'
                    onChangeText={onChangeEmail}
                />
                <TextField icon='lock'
                    placeholder='Password'
                    onChangeText={onChangePassword}
                    secureTextEntry={show}
                    secondIcon={show ? ('eye-off') : ('eye')}
                    showHidePassword={showHidePassword}

                />

                <Options>
                    {/* <CheckBox
                        right
                        title='Remember Me'
                        checked={checked}
                        onPress={() => {
                            impactAsync('light')
                            setChecked(!checked)
                        }}
                        checkedColor='#F50057'
                        fontFamily='Poppins'
                        containerStyle={{ width: '40%', borderColor: 'black', backgroundColor: 'black' }}
                        textStyle={{ fontSize: 15, color: 'grey' }}
                        activeOpacity={1}
                    /> */}

                    <ForgotPassword onPress={() => { impactAsync('light') }}>
                        <SubText bold={true} margin={true} style={{ fontSize: 19 }}>Forgot Password?</SubText>
                    </ForgotPassword>

                </Options>

                <ButtonContainer>
                    <Button color="#2F2E41" onPress={() => {
                        //Login(email, password)
                        login(email, password);
                        // LoginUser(email, password);
                        Keyboard.dismiss();
                        impactAsync('medium')
                    }
                    }>
                        <ButtonText>Login</ButtonText>
                    </Button>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginTop: 20 }}>
                        <SubText>Don't have an Account?</SubText>
                        <TouchableOpacity onPress={() => {
                            impactAsync('light')
                            navigation.navigate("Signup")

                            //history.push("/signup")
                        }}>
                            <SubText bold={true}>Sign Up.</SubText>
                        </TouchableOpacity>
                    </View>
                </ButtonContainer>
                <Footer type="login" />

            </Container>
        </TouchableWithoutFeedback>
    )
}
