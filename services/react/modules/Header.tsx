import React, { Fragment } from "react";
import { Box, Button, Flex, Text } from "rebass";
import { observable } from "mobx";
import { observer, useObservable } from "mobx-react-lite";
import Modal from "react-responsive-modal";
import { Logo } from "../config";
import { ContactForm, state as ContactFormState } from "./ContactForm";
import { HamburgerIcon } from "../primitives/HamburgerIcon";

export const state = observable({
  showContactForm: false,
  showHamburgerMenu: false,
});

export type props = {};

export const Header = observer(({}: props) => {
  const _state = useObservable(state);
  return (
    <Box bg="#673AB7">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text>React Starter</Text>
        </Box>
        <Box>
          <Button bg="magenta" onClick={() => _state.showContactForm = true}>Contact Us</Button>
          <HamburgerIcon isActive={_state.showHamburgerMenu} onClick={() => _state.showHamburgerMenu = !_state.showHamburgerMenu}/>
        </Box>
      </Flex>

      <Modal
        open={_state.showContactForm}
        onClose={() => {
          _state.showContactForm = false;
          ContactFormState.submitted = false;
          ContactFormState.loading = false;
        }}
        center
        styles={{
          overlay: { zIndex: 99999999999 },
          closeButton: {
            cursor: "pointer"
          }
        }}
        closeIconSize={50}
        // closeIconSvgPath={
        //   <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        //     <path d="m50 6c-24.27684 0-44 19.72314-44 44 0 24.2768 19.72316 44 44 44s44-19.7232 44-44c0-24.27686-19.72316-44-44-44zm0 4c22.115076 0 40 17.8849 40 40s-17.884924 40-40 40-40-17.8849-40-40 17.884924-40 40-40zm-18.21875 19.96875a2.0002 2.0002 0 0 0 -1.1875 3.4375l16.59375 16.59375-16.59375 16.5625a2.0002 2.0002 0 1 0 2.8125 2.84375l16.59375-16.59375 16.59375 16.59375a2.0002 2.0002 0 1 0 2.8125-2.84375l-16.59375-16.5625 16.59375-16.59375a2.0002 2.0002 0 0 0 -1.65625-3.4375 2.0002 2.0002 0 0 0 -1.15625.59375l-16.59375 16.59375-16.59375-16.59375a2.0002 2.0002 0 0 0 -1.625-.59375z"/>
        //   </svg>
        // }
      >
        <ContactForm/>
      </Modal>
    </Box>
  );
});
