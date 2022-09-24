import React, {useEffect} from "react";
import {Image } from 'react-native'
import { Container, LoadingIcon, Text } from './style'
import { useFonts } from 'expo-font';
import { LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";



export default () => {


      const navigation = useNavigation()
      
      useEffect(()=>{
        const checkToken = async () =>{
          const token = await AsyncStorage.getItem("token")

          if(token !== null){
            console.log(true)
          }else{
            navigation.navigate('Login')
          }

        }

        setInterval(() => {
          
          checkToken()

        }, 1000);

      }, [])



    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular
      });
    
      if (!fontsLoaded) {
        return null;
      }

      

    return(
        <Container>
            <Image source={require('../../../assets/logo.png')} />
            <Text style={{ fontFamily: 'LeckerliOne_400Regular', fontSize: 30, marginTop: 10 }}>maná Delivery</Text>
            <LoadingIcon size="large" color="#fff" />
        </Container>
    )
}