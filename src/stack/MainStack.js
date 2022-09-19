import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from './../screens/Preload'

const Stack = createNativeStackNavigator();


export default () =>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Preload}>
            <Stack.Screen name="Preload" component={Preload} />
        </Stack.Navigator>
    )
}