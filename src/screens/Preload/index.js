import React from "react";
import {Text} from 'react-native'
import { Container, LoadingIcon } from './style'

export default () => {
    return(
        <Container>
            <Text>Olá</Text>
            <LoadingIcon size="large" color="#fff" />
        </Container>
    )
}