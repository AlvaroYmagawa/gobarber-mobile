import React from 'react';
import { Text } from 'react-native';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input
      icon="call"
      placeholder="Digite seu nome"
      style={{ marginTop: 30}}/>

      <Button>Entrar</Button>
    </Background>
  );
}
