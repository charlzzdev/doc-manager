import React, { useState } from 'react';
import {
  Flex,
  IconButton,
  Tooltip,
  Link,
  Button,
} from '@chakra-ui/core';

import FormModal from './FormModal';

interface Props {
  icon: any,
  label: string,
  execArgs: [string, boolean?, string?]
}

const ToolbarIcon = ({ icon, label, execArgs }: Props) => (
  <Tooltip label={label} aria-label={label}>
    <IconButton
      icon={icon}
      aria-label={label}
      ml="0.5rem"
      size="sm"
      onClick={() => document.execCommand(...execArgs)}
    />
  </Tooltip>
)

const toolbar = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('Register');

  return (
    <Flex alignItems="center" justifyContent="space-between" pl="15rem" height="4rem" borderBottomWidth="1px">
      <div>
        <ToolbarIcon icon="bold" label="Bold" execArgs={['bold']} />
        <ToolbarIcon icon="italic" label="Italic" execArgs={['italic']} />
        <ToolbarIcon icon="underline" label="Underline" execArgs={['underline']} />
        <span style={{ color: "#e2e8f0", marginLeft: "0.5rem" }}>|</span>
        <ToolbarIcon icon="leftAlign" label="Left align" execArgs={['justifyLeft']} />
        <ToolbarIcon icon="centerAlign" label="Center align" execArgs={['justifyCenter']} />
        <ToolbarIcon icon="rightAlign" label="Right align" execArgs={['justifyRight']} />
        <ToolbarIcon icon="justifyAlign" label="Justify" execArgs={['justifyFull']} />
      </div>

      <div style={{ marginRight: "1rem" }}>
        <Link
          href="#"
          color="blue.500"
          mr="1rem"
          onClick={() => { setOpen(true); setMode('Register'); }}
        >Register</Link>
        <Button
          onClick={() => { setOpen(true); setMode('Login'); }}
        >Login</Button>
        <FormModal
          mode={mode}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </Flex>
  )
}

export default toolbar;
