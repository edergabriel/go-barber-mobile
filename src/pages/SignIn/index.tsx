import React from 'react';
import { Image, Text, View } from 'react-native';

import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Image source={logoImg} />

            <Title>Faça seu login</Title>
        </Container>
    )

}

export default SignIn