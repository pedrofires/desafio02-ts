import { Center, Input, Box } from "@chakra-ui/react";
import ButtonLogin from "./Button";
import { login } from "../services/login";
import { useState } from "react";

export const Card = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>
            {name.trim() === ""
              ? "Usuário, faça o login"
              : `${name}, faça o login`}
          </h1>
        </Center>
        <Input
          marginTop="8px"
          placeholder="Login"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          marginTop="8px"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Center>
          <ButtonLogin name="Login" onClick={() => login(name)} />
        </Center>
      </Box>
    </form>
  );
};
