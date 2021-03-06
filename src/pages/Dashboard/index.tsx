import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container, Header, HeaderTitle, ProfileButton, UserName, UserAvatar } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate])


  return (
    <Container>
      <Header>
        <HeaderTitle>
            Bem vindo, {'\n'}
            <UserName>{ user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: "http://placehold.jp/150x150.png" }} />
        </ProfileButton>
      </Header>
      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default Dashboard;
