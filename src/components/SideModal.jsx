import { Box, Slide, Modal, ModalOverlay } from "@chakra-ui/react";

function CustomSidePanel({ isOpen, onClose, children }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay>
        <Slide in={isOpen}>
          <Box
            bg="white"
            h="100vh"
            w={{ base: "100%", lg: "30%" }}
            minW="300px"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            position={"absolute"}
            right={0}
          >
            <Box p={6}>{children}</Box>
          </Box>
        </Slide>
      </ModalOverlay>
    </Modal>
  );
}

export default CustomSidePanel;
