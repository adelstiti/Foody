import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const HomeScreen = () => {
  const { colors } = useTheme();

  const theme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
