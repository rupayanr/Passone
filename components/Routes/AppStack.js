import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Passwords from '../Screens/Passwords'
import Preloader from '../PreLoader'

const Stack = createNativeStackNavigator();

export default function AppStack() {

    const [load, setLoad] = useState(false);

    setTimeout(() => {
        setLoad(true)
    }, 5000);

    if (!load) {
        return <Preloader />
    } else {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Passwords"
            >

                <Stack.Screen
                    name="Passwords"
                    component={Passwords}
                />


            </Stack.Navigator>
        )
    }


}
