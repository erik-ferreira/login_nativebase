import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import {
  Center,
  Box,
  Heading,
  Icon,
  FormControl,
  Input,
  Button,
  Checkbox,
  WarningOutlineIcon,
  Image,
  Slider,
  HStack,
  Text,
  Switch,
  useColorMode,
} from "native-base";

function SignIn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <StatusBar
        barStyle={colorMode === "light" ? "dark-content" : "light-content"}
        backgroundColor={colorMode === "light" ? "transparent" : undefined}
      />
      <Center height="full" _dark={{ bg: "black" }} _light={{ bg: "white" }}>
        <Image
          size={100}
          source={{ uri: "https://github.com/erik-ferreira.png" }}
          alt="logo"
          borderRadius="full"
        />

        <Box width="4/5">
          <Heading
            color="coolGray.700"
            _dark={{ color: "white" }}
            _light={{ color: "black" }}
          >
            Entrar
          </Heading>
          <FormControl isInvalid>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              placeholder="seu@email.com.br"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              E-mail inválido
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder="sua senha"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Senha inválida
            </FormControl.ErrorMessage>
          </FormControl>

          <Button mt="7" colorScheme="purple">
            Entrar
          </Button>
        </Box>

        <Checkbox value="agreed" mt={10}>
          Concordo com a política de segurança
        </Checkbox>

        <Box alignItems="center" w="100%">
          <Slider
            w="3/4"
            maxW="300"
            defaultValue={70}
            minValue={0}
            maxValue={100}
            accessibilityLabel="hello world"
            step={10}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Box>

        <HStack alignItems="center" space={4}>
          <Text>Dark</Text>
          <Switch
            isChecked={colorMode === "light"}
            onToggle={toggleColorMode}
            aria-label={
              colorMode === "light"
                ? "Troque para o tema escuro"
                : "Troque para o tema claro"
            }
          />
          <Text>Light</Text>
        </HStack>
      </Center>
    </>
  );
}

export { SignIn };
