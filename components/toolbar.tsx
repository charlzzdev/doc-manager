import React from 'react';
import {
  Flex,
  IconButton,
  Tooltip,
} from '@chakra-ui/core';

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
  return (
    <Flex alignItems="center" pl="15rem" height="4rem" borderBottomWidth="1px">
      <ToolbarIcon icon="bold" label="Bold" execArgs={['bold']} />
      <ToolbarIcon icon="italic" label="Italic" execArgs={['italic']} />
      <ToolbarIcon icon="underline" label="Underline" execArgs={['underline']} />
      <span style={{ color: "#e2e8f0", marginLeft: "0.5rem" }}>|</span>
      <ToolbarIcon icon="leftAlign" label="Left align" execArgs={['justifyLeft']} />
      <ToolbarIcon icon="centerAlign" label="Center align" execArgs={['justifyCenter']} />
      <ToolbarIcon icon="rightAlign" label="Right align" execArgs={['justifyRight']} />
      <ToolbarIcon icon="justifyAlign" label="Justify" execArgs={['justifyFull']} />
    </Flex>
  )
}

export default toolbar;
