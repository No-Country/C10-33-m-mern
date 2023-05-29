import React, {useState, useEffect} from 'react';
import {Fields, ActionsContainer, Title, Link, TextComp} from './styles';
import {Button, TextInput} from 'react-native';
import Auth0, {useAuth0} from 'react-native-auth0';
import config from '../../../auth0-configuration';

const Login = ({navigation: {navigate}}) => {
  const [data, setData] = useState({email: '', password: ''});
  console.log('en login!!!');
  console.log('email = ', data.email);
  console.log('password = ', data.password);

  useEffect(() => {
    const auth0 = new Auth0({
      domain: config.domain,
      clientId: config.clientId,
    });

    console.log(auth0);
  }, []);
  const emailRegex = /^[a-z0-9._%+-]+@[a-z]+(\.[a-z]{2,4}){1,2}$/;
  const passRegex=/^(\w+){6,10}$/;
  const testEmail=()=>{
    let tfTest=[0,0]
    
  }
  return (
    <>
      <Fields>
        <Title>Correo</Title>
        <TextInput
          placeholder="nombre@tuemail.com"
          value={data.email}
          onChangeText={text => setData({...data, email: text})}
        />
        <Title>Contraseña</Title>
        <TextInput
          placeholder="*********"
          value={data.password}
          onChangeText={text => setData({...data, password: text})}
        />

        <ActionsContainer>
          <TextComp>No tienes cuenta?</TextComp>
          <Link onPress={() => console.log('pressed!!!!')}>Registrate</Link>
        </ActionsContainer>

        <ActionsContainer>
          <Button title="Gmail" onPress={() => navigate('Register')} />
          <Button title="Facebook" onPress={() => navigate('Register')} />
        </ActionsContainer>
      </Fields>
    </>
  );
};

export default Login;
