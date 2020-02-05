import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  Text,
} from '@chakra-ui/core';

interface Props {
  mode: string,
  isOpen: boolean,
  onClose: any,
  onSuccess: any
}

export const FormModal = ({ mode, isOpen, onClose, onSuccess }: Props) => {
  const [cred, setCred] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!cred.email || !cred.password) {
      setError('Please fill in the fields.');
      return;
    };

    setLoading(true);
    setError('');

    fetch(`/api/${mode.toLowerCase()}`, {
      method: 'POST',
      body: JSON.stringify({
        email: cred.email,
        password: cred.password
      })
    })
      .then(res => res.json())
      .then(json => {
        setLoading(false);
        if (json.status === 'success') {
          onSuccess(json.data);
          onClose();
        } else {
          setError(json.message);
        }
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCred({
      ...cred,
      [e.target.type]: e.target.value
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{mode}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} onKeyDown={e => e.key === 'Enter' && handleSubmit()}>
          {error && <Text color="red.500" pb="2">{error}</Text>}
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={handleSubmit}
            isLoading={loading}
            loadingText={mode === 'Login' ? 'Logging in' : 'Registering'}
            variantColor="blue"
            mr={3}
          >
            {mode}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default FormModal;