import React from 'react'
import Header from '../Header'
import { View } from 'react-native'
import { Container, Hero, Title, TitleText, SubText, ButtonContainer, Button, ButtonText } from '../../styles/styledComponents'
import HeroImage from '../../assets/svg/HeroImage'
import { impactAsync } from 'expo-haptics'

export default function Home({ navigation }) {
    return (

        <Container>
            <Header value='PassOne' icon='lock' navigation={navigation} />
            <Hero>
                <HeroImage />
            </Hero>

            <Title>
                <TitleText>Password Manager</TitleText>
                <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <SubText bold={true} margin={false}>One Password</SubText>
                    <SubText margin={true}>to rule them all,</SubText>
                </View>
                <SubText>All your passwords at one place.</SubText>
            </Title>


            <ButtonContainer space={true}>

                <Button color='#2F2E41' onPress={() => {
                    impactAsync('medium')

                    navigation.navigate("Login")
                    //history.push("/login")
                }}>
                    <ButtonText>Login</ButtonText>
                </Button>

                <Button color='#F50057' onPress={() => {
                    impactAsync('medium')

                    navigation.navigate("Signup")
                    // history.push("/signup")
                }}><ButtonText>Sign Up</ButtonText></Button>

            </ButtonContainer>
        </Container >

    )
}
