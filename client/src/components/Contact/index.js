import React from 'react';
import {Container, TextInputComp, Button} from './styles';

const Contact = () => {
  return (
    <Container>
      <TextInputComp
        value={'value'}
        placeholder="Redacta tu consulta para poder brindarte ayuda"
        placeholderTextColor="#000"
        autoFocus
        onChangeText={() => console.log('changed!')}
        multiline
      />

      <Button title="Enviar" onPress={() => console.log('changed!')} />
    </Container>
  );
};

export default Contact;
