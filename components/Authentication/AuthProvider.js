import React, { createContext, useState } from 'react'
import * as firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    // Add your firebase api config here
};



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}



export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{

                user,
                setUser,

                getUid: () => {
                    if (user != null) {
                        return user.user.uid
                    }
                },

                getEmail: () => {
                    if (user != null) {
                        return user.user.email;
                    }
                },

                /* Methods to authenticate users */
                login: async (email, password) => {
                    try {

                        firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
                            setUser(user);

                        });

                    } catch (e) {
                        console.log(e)
                        alert("Cannot Login. Please Try Again.")
                    }
                },

                signUp: async (email, password, confirm) => {

                    try {

                        // Validate and Sanitize the inputs before signing up 

                        if (confirm === password) {
                            // Turn lock icons green 
                            if (password.length < 8) {
                                alert("Please enter a password with at least 8 characters.");
                                return;
                            }
                            else {
                                firebase.auth().createUserWithEmailAndPassword(email, password);
                                alert("Sign up succesfull.");
                                return true;
                            }
                        }
                        else {
                            alert("Passwords do no match.");
                            return;
                        }


                    } catch (error) {
                        console.log(error);
                        alert("Unable to Sign Up, Please try again.")
                    }
                },

                logout: async () => {
                    try {

                        firebase.auth().signOut();
                        setUser(null)

                    } catch (e) {
                        console.log(e)
                    }

                },


            }}

        >
            {children}
        </AuthContext.Provider >
    )
}
