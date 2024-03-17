import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GluestackUIProvider, ImageBackground } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Root } from "./Root";
import { LayoutBg } from "./src/Layout/LayoutBg";

const App: React.FC = () => {
  return (
    <GluestackUIProvider config={config}>
      <Root />
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
