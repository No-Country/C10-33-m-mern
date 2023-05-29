import React from 'react';
import Modal from 'react-native-modal';
import ButtonComponent from '../BaseButton';
import {Container, Title} from './styles';

const ModalComponent = ({
  hideModal,
  hideCloseButton,
  style,
  children,
  ...props
}) => {
  return (
    <Modal {...props}>
      <Container>
        <Title>Place for your content</Title>
        {!hideCloseButton && (
          <ButtonComponent title="Close" onClick={hideModal} />
        )}
        {children}
      </Container>
    </Modal>
  );
};

export default ModalComponent;
