import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container } from '../styles/styledComponents'
import { View } from 'react-native'

export default function PreLoader() {
    return (
        <Container>
            <View style={{ height: '20%', width: '100%', backgroundColor: '#121212', marginTop: '70%' }}>
                <ActivityIndicator color="#ffffff" size="large" />
            </View>
        </Container>
    )
}
