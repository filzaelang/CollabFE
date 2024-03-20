import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  FormControl,
  Image,
  ImageBackground,
  Text,
} from "@gluestack-ui/themed";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { avatarReguler } from "../json/Avatar";
import { Input } from "@gluestack-ui/themed";
import { InputSlot } from "@gluestack-ui/themed";
import { InputIcon } from "@gluestack-ui/themed";
import { SearchIcon } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonText } from "@gluestack-ui/themed";
import { Link } from "@gluestack-ui/themed";
import { LayoutBg } from "../Layout/LayoutBg";
import { ImageLogo } from "../components/Image";
import { useDispatch } from "react-redux";
import { useUser } from "@clerk/clerk-expo";
import {
  SET_EMAIL,
  SET_AVATAR,
  SET_USERNAME,
} from "../store/slices/userSlices";
import { AntDesign } from "@expo/vector-icons";
export const ChoseAvatar = ({ navigation }: any) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [selectAvatar, setSelectAvatar] = useState<number>(0);

  const dispatch = useDispatch();
  const { isLoaded, isSignedIn, user } = useUser();

  const hendelAvatar = (id: number) => {
    setSelectAvatar(id);
  };
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Use map to get an array of email addresses
      const emailAddresses = user.emailAddresses.map(
        (emailAddress) => emailAddress.emailAddress
      );

      // Assuming you want to set the first email address, modify this part as needed
      if (emailAddresses.length > 0) {
        dispatch(SET_EMAIL(emailAddresses[0]));
      }
    }
  }, [isLoaded, isSignedIn, user!.emailAddresses]);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <LayoutBg>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box flex={1} justifyContent="center" alignItems="center">
              <Box justifyContent="center" alignItems="center">
                <ImageLogo alt="logo" width={250} height={250}></ImageLogo>
              </Box>
              <Text color="white" fontWeight="bold" fontSize="$lg" mb={20}>
                Choose Your Avatar
              </Text>

              <Box>
                <Box
                  display="flex"
                  p={2}
                  flexDirection="row"
                  flexWrap="wrap"
                  width={300}
                  justifyContent="center"
                  gap={10}
                >
                  {avatarReguler.map((item: any) => (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(SET_AVATAR(item.avatar));
                        hendelAvatar(item.id);
                      }}
                      key={item.id}
                      onPressIn={() => setHoveredItemId(item.id)}
                      onPressOut={() => {
                        setHoveredItemId(null);
                        setSelectAvatar(0);
                      }}
                    >
                      {selectAvatar === item.id && (
                        <Box
                          position="absolute"
                          bottom={0}
                          right={0}
                          zIndex={1}
                        >
                          <AntDesign
                            name="checkcircle"
                            size={24}
                            color="#59B4DD"
                          />
                        </Box>
                      )}
                      <Avatar size="lg" borderRadius="$full">
                        <AvatarImage
                          alt="avatar"
                          style={{
                            transform: [
                              { scale: hoveredItemId === item.id ? 1.4 : 1 },
                            ],
                          }}
                          source={item.avatar}
                        />
                      </Avatar>
                    </TouchableOpacity>
                  ))}
                  <Input
                    size="md"
                    width={"90%"}
                    variant="outline"
                    bg="white"
                    mt={15}
                    borderRadius={"$xl"}
                  >
                    <InputSlot pl="$3">
                      <FontAwesome
                        name={"pencil-square-o"}
                        size={24}
                        color="black"
                      ></FontAwesome>
                    </InputSlot>
                    <InputField
                      color="black"
                      placeholder="your name..."
                      onChangeText={(text) => dispatch(SET_USERNAME(text))}
                    />
                  </Input>
                  <Button
                    width={"90%"}
                    bg="#59B4DD"
                    borderRadius="$xl"
                    onPress={() => navigation.navigate("Home")}
                  >
                    <ButtonText>Submit</ButtonText>
                  </Button>
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      </LayoutBg>
    </View>
  );
};
