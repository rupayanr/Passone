import React from 'react'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { FooterContainer, Icons, FooterText, Icon, Circle } from '../styles/styledComponents'
import { TouchableOpacity } from 'react-native';
import { impactAsync } from 'expo-haptics'

export default function Footer(props) {

    const haptic = () => {
        impactAsync('light')
    }

    return (
        <FooterContainer>
            <FooterText margin={true}>
                Or use an exsting email id to {props.type}
            </FooterText>

            <Icons>

                <TouchableOpacity onPress={() => haptic()}><Icon><Circle><FontAwesome name="facebook" size={28} color="black" /></Circle></Icon></TouchableOpacity>
                <TouchableOpacity onPress={() => haptic()}><Icon><Circle><FontAwesome name="google" size={28} color="black" /></Circle></Icon></TouchableOpacity>
                <TouchableOpacity onPress={() => haptic()}><Icon><Circle><FontAwesome5 name="apple" size={28} color="black" /></Circle></Icon></TouchableOpacity>

            </Icons>
        </FooterContainer>
    )
}
