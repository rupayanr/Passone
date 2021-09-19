import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'
import Preloader from '../PreLoader'

const Stack = createNativeStackNavigator();


export default function AuthStack() {

    const [load, setLoad] = useState(false);

    setTimeout(() => {
        setLoad(true)
    }, 2000);

    if (!load) {
        return <Preloader />
    }
    else {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                />

                <Stack.Screen
                    name="Login"
                    component={Login} />

                <Stack.Screen
                    name="Signup"
                    component={SignUp} />

            </Stack.Navigator>
        )
    }

}
