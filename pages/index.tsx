import React from 'react';
import {
  ThemeProvider,
  theme,
  CSSReset
} from '@chakra-ui/core';

import Dashboard from '../components/dashboard';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Dashboard />
    </ThemeProvider>
  )
}

export default Index;