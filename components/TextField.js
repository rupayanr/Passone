import React, { useState } from 'react'

import { Feather } from '@expo/vector-icons';
import { TextContainer, TextInput, Icon } from '../styles/styledComponents'
import { TouchableOpacity } from 'react-native';

export default function TextField(props) {

    return (
        <TextContainer height={props.height} width={props.width} ml={props.ml} color={props.color} >
            <Icon width={'40px'} style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Feather name={props.icon} size={20} color='white' />
            </Icon>

            <TextInput
                style={{ fontSize: 18 }}
                color='white'
                placeholder={props.placeholder}
                placeholderTextColor='white'
                textAlign='left'
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                value={props.value}
            />

            {props.secondIcon ? (
                <TouchableOpacity onPress={props.showHidePassword}>
                    <Icon width={'20px'} mr={'10px'}>
                        <Feather name={props.secondIcon} size={20} color='white' />
                    </Icon>
                </TouchableOpacity>

            ) : (
                <Icon>

                </Icon>
            )
            }
        </ TextContainer >
    )
}
