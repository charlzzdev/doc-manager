import React from 'react';
import {
  ThemeProvider,
  theme,
  CSSReset,
  Heading
} from '@chakra-ui/core';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Heading as="h1" size="2xl" >next</Heading>
    </ThemeProvider>
  )
}

export default Index;