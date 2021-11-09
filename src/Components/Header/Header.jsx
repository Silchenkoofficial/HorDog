import React from "react";

import { Box, Container, HStack, VStack } from "@chakra-ui/react";
import theme from "Constants/theme";

const Header = () => {
  return (
    <Box bg={theme.COLORS.primary.main}>
      <Container maxW="container.lg">Header</Container>
    </Box>
  );
};

export default Header;
