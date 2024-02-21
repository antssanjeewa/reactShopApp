import React, { createContext, useState } from "react";
import * as SecureStore from 'expo-secure-store';
// import axiosConfig from "../helpers/axiosConfig";
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/firebaseInit';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isLoading,
            login: (email, password) => {
                // setUser("sameera");
                setIsLoading(true)
                getDocs(query(
                    collection(db, 'users')
                    , where('email', '==', email)
                )).then(ds => {
                    setIsLoading(false)
                    if (ds.size > 0) {
                        const user = ds.docs[0].data();
                        setUser(user);
                        SecureStore.setItemAsync('user', user);
                        // Alert.alert('Error', 'User Found')
                        // navigation.navigate('Home');
                    } else {
                        Alert.alert('Error', 'User Not Found')
                    }
                })

            },
            logout: () => {
                setUser(null)
                SecureStore.deleteItemAsync('user')
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}