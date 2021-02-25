import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  return (
    <View>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Profile;
