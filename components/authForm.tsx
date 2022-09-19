import { Box, Flex } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC, useState } from "react";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        hello
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh-100px)">
        form
      </Flex>
    </Box>
  );
};

export default AuthForm;
