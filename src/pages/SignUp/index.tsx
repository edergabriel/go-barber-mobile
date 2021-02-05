import React from 'react';
import { Image, Text, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView           
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}>
                    <Container>
                        <Image source={logoImg} />

                        <Title>Crie sua conta</Title>

                        <Input name="nome" icon="user" placeholder="Nome"/>
                        <Input name="email" icon="mail" placeholder="E-mail"/>
                        <Input name="password" icon="lock" placeholder="Senha"/>

                        <Button>Entrar</Button>

                    </Container>

                    <BackToSignIn onPress={() => navigation.goBack() }>
                        <Icon name="arrow-left" size={20} color="#FFF" />

                        <BackToSignInText>Voltar para logon</BackToSignInText>
                    </BackToSignIn>
                </ScrollView>

            </KeyboardAvoidingView>
        </>
    )

}

export default SignUp