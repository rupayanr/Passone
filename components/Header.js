import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Heading, HeadingText, Circle, Icon } from '../styles/styledComponents'
import { Feather } from '@expo/vector-icons';
import { impactAsync } from 'expo-haptics';


function Header({ icon, value, navigation }) {

    return (
        <Heading>

            <Circle color='#161616' ml='5%' mt='5%' width='50px' height='50px' >
                <TouchableOpacity onPress={() => {
                    impactAsync('light')
                    navigation.navigate("Home");
                }}>
                    <Icon><Feather name={icon} size={28} color="white" /></Icon>
                </TouchableOpacity>
            </Circle>

            <HeadingText>{value}</HeadingText>

        </Heading >
    )
}

export default Header
