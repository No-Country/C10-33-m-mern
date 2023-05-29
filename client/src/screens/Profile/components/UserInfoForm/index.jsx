import React, {useState} from 'react';
import {
  Container,
  StyledInput,
  Fields,
  ActionsContainer,
  Button,
  CloseButton,
} from './styles';

const UserInfoForm = ({name}) => {
  const [data, setData] = useState({email: '', password: ''});

  return (
    <Container>
      <Fields>
        <StyledInput
          placeholder="Nombre"
          value={data.name}
          onChangeText={text => setData({...data, name: text})}
        />
        <StyledInput
          placeholder="Apellido"
          value={data.surname}
          onChangeText={text => setData({...data, surname: text})}
        />
        <StyledInput
          placeholder="Correo"
          value={data.email}
          onChangeText={text => setData({...data, email: text})}
        />
        <StyledInput
          placeholder="Contraseña"
          value={data.password}
          onChangeText={text => setData({...data, password: text})}
        />

        <Button title="Cerrar sesión" onPress={() => console.log()} />
        <CloseButton
          title="Eliminar cuenta"
          color="red"
          onPress={() => console.log()}
        />
      </Fields>
    </Container>
  );
};

export default UserInfoForm;
