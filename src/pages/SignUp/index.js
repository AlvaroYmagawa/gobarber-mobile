import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles';

// Every page has by default a navigation element to navigate between pages
export default function SignUp({navigation}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(){

  }

  return (
    <Background >
      <Container >
      <Image source={logo}/>

        <Form>
        <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next" // Change the enter button in keyboard
            // this code below triggerer the enter keyboard enter button
            onSubmitEditing={() => emailRef.current.focus()} // this makes focus in the attr that haves a ref
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digire seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry // For password Input
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
