import {
  Message,
  MultipleFieldErrors,
  Ref,
  UseFormRegisterReturn,
} from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  register?: UseFormRegisterReturn;
  error?: {
    type?: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
  };
}

export const Input = ({
  name,
  label,
  error = null,
  register,
  ...rest
}: InputProps) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...register}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
