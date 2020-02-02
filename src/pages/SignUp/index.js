import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles';

// Every page has by default a navigation element to navigate between pages
export default function SignUp({navigation}) {
  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(){
    dispatch(signUpRequest(name, email, password));
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
            value={name}
            onChangeText={setName}
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
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry // For password Input
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>Criar conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
