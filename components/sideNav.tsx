import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Button
} from "@chakra-ui/core";

const NavGroupHeading = (props: { children: string | JSX.Element }) => (
  <Heading
    fontSize="xs"
    color="gray.400"
    letterSpacing="wide"
    mb={2}
    textTransform="uppercase"
    {...props}
  />
);

const SideNav = () => (
  <Box
    as="nav"
    width="15rem"
    height="100vh"
    aria-label="Main navigation"
    borderRightWidth="1px"
    fontSize="sm"
    p="6"
  >
    <Box>
      <NavGroupHeading>Documents</NavGroupHeading>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Folder 1
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <List styleType="none">
              <ListItem><Button width="100%" height="2rem" mb="0.5rem">File 1</Button></ListItem>
              <ListItem><Button width="100%" height="2rem" mb="0.5rem">File 2</Button></ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Folder 2
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <List styleType="none">
              <ListItem><Button width="100%" height="2rem" mb="0.5rem">File 1</Button></ListItem>
              <ListItem><Button width="100%" height="2rem" mb="0.5rem">File 2</Button></ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  </Box>
);

export default SideNav;