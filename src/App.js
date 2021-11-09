import React from "react";

import { HStack, VStack, Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Box p={10}>
        <VStack alignItems="flex-start" spacing={8}>
          <HStack spacing={8}>
            <i className="icon-apple" />
            <i className="icon-google" />
            <i className="icon-addphoto" />
            <i className="icon-profile" />
            <i className="icon-card" />
          </HStack>
          <HStack spacing={8}>
            <i className="icon-" />
            <i className="icon-" />
            <i className="icon-" />
            <i className="icon-" />
            <i className="icon-" />
          </HStack>
        </VStack>
      </Box>
    </div>
  );
}

export default App;
