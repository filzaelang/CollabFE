import {
  AddIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
  Image,
  ImageBackground,
  Text,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { LayoutBg } from "../Layout/LayoutBg";
import { ImageLogo } from "../components/Image";

export const Login = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <LayoutBg>
      <View style={{ width: "100%", height: "100%", minHeight: "100%" }}>
        <Box flex={1} justifyContent="center" alignItems="center">
          <ImageLogo
            size={"lg"}
            width={250}
            height={250}
            alt="logo"
          ></ImageLogo>

          {isLoading ? (
            <ButtonSpinner color="#66D1FF" size={"small"} />
          ) : (
            <Box
              mx={"auto"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                minWidth={"55%"}
                rounded="$full"
                bg="white"
                mt={10}
                py={5}
                mx={"auto"}
                onPress={() => navigation.navigate("ChoseAvatar")}
              >
                <Box mr={"auto"}>
                  <Image
                    source={require("../../assets/Image/iconGoogle.png")}
                    w={23}
                    h={23}
                    alt="iconGoogle"
                    mr={10}
                  ></Image>
                </Box>
                <ButtonText color="black" mx={"auto"}>
                  Continue with Google
                </ButtonText>
              </Button>
              <Text color="white" mt={30} fontSize={12}>
                by continue, you agree to the Terms and Privacy
              </Text>
            </Box>
          )}
          <TouchableOpacity onPress={() => navigation.navigate("Champion")}>
            <Text color="white">Champion</Text>
          </TouchableOpacity>
        </Box>
      </View>
    </LayoutBg>
  );
};
