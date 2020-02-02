import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles';

// Every page has by default a navigation element to navigate between pages
export default function SignIn({navigation}) {
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(){
    console.tron.log(email, password);
    dispatch(signInRequest(email, password));
  }

  return (
    <Background >
      <Container >
      <Image source={logo}/>

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            onChangeText={setEmail}
            value={email}
            returnKeyType="next" // Change the enter button in keyboard
            // this code below triggerer the enter keyboard enter button
            onSubmitEditing={() => passwordRef.current.focus()} // this makes focus in the attr that haves a ref
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry // For password Input
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onChangeText={setPassword}
            value={password}
          />

          <SubmitButton loading={loading} onPress={handleSubmit()}>Accessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
