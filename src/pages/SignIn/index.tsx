import React from 'react';
import { Image, Text, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
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

                        <Title>Faça seu login</Title>

                        <Input name="email" icon="mail" placeholder="E-mail"/>
                        <Input name="password" icon="lock" placeholder="Senha"/>

                        <Button>Entrar</Button>

                        <ForgotPassword onPress={() => {}}>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>
                    </Container>

                    <CreateAccountButton onPress={() => {}}>
                        <Icon name="log-in" size={20} color="#ff9000" />

                        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
                    </CreateAccountButton>
                </ScrollView>

            </KeyboardAvoidingView>
        </>
    )

}

export default SignIn