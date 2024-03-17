import React, { useState } from "react";
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

export const ChoseAvatar = ({ navigation }: any) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

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
                      onPress={() => console.log(item.id)}
                      key={item.id}
                      onPressIn={() => setHoveredItemId(item.id)}
                      onPressOut={() => setHoveredItemId(null)}
                    >
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
                    <InputField color="black" placeholder="your name..." />
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
