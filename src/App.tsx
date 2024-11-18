import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { login } from "./services/login";
import { Card } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Flex
        height={"100%"}
        justify={"center"}
        backgroundColor="#9413dc"
        padding="25px"
        flex={1}
      >
        <Card />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
