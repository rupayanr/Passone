import React, { useContext, useState } from 'react';
import PreLoader from './components/PreLoader';
import { useFonts } from 'expo-font';
import Providers from './components/Routes'
import { AuthProvider } from './components/Authentication/AuthProvider';

export default function App() {

  // Constant to load the fonts into using useFonts Hook
  const [loaded] = useFonts({
    Montserrat_lt: require('./assets/fonts/Montserrat-Light.ttf'),
    Montserrat_med: require('./assets/fonts/Montserrat-Medium.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),

    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    Poppins_th: require('./assets/fonts/Poppins-Thin.ttf'),
    Poppins_bd: require('./assets/fonts/Poppins-Bold.ttf')


  })

  // If not laoded it will show an activity indicator
  if (!loaded) {
    return (
      <PreLoader />
    )
  }
  else {


    // const { user, setUser } = useContext(AuthContext)


    return (

      <Providers />


    );


  }

}




