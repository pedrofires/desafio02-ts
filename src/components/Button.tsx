import { Button } from "@chakra-ui/react";

interface ButtonProps {
  onClick: () => void;
  name: string;
}
const ButtonLogin = ({ onClick, name }: ButtonProps) => {
  return (
    <Button
      marginTop="8px"
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      type="submit"
    >
      {name}
    </Button>
  );
};

export default ButtonLogin;
