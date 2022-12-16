import React from "react";
import {
  Box,
  Button,
  Icon,
  Input,
  Pressable,
  Row,
  Text,
  VStack,
} from "native-base";

interface Props {}

const Header = () => (
  <Box backgroundColor="blue.500" safeAreaTop alignItems="center" py={12}>
    <Text color="white" fontSize="3xl" bold>
      Hello Matyo
    </Text>
    <Text color="white">Sign In to your account</Text>
  </Box>
);

export const LoginScreen = (props: Props) => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Header />
      <VStack space={4} alignItems="center" mt={12} mb={12}>
        <Input mx={4} size="lg" placeholder="Email" />

        <Input
          mx={4}
          size="lg"
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon size={5} mr="2" color="muted.400" />
              {show ? <Text>👁️</Text> : <Text>🥽</Text>}
            </Pressable>
          }
          placeholder="Password"
        />
      </VStack>
      <Box p={4}>
        <Button size="lg" mb={4}>
          Sign In
        </Button>
        <Button size="lg" variant="ghost">
          Don't have an account? Create
        </Button>
      </Box>
    </>
  );
};
