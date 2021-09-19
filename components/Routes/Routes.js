import React, { useEffect, useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack'
import { AuthContext } from '../Authentication/AuthProvider'
import * as firebase from 'firebase'



export default function Routes() {

    const [isAuth, setAuth] = useState(false)

    const checkAuth = (user) => {
        if (user == null) {
            console.log('Not authenticated')
            setAuth(false)
        } else {
            console.log("Authenticated")
            setAuth(true);
        }
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(checkAuth);
        return () => {
            setAuth(false)
        }
    }, [])


    return (
        <NavigationContainer>
            {isAuth ? (<AppStack />) : (<AuthStack />)}
        </NavigationContainer>
    )
}
