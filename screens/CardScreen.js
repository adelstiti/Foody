import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CardScreen</Text>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
