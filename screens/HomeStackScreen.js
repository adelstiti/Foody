import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";

import Icon from "@expo/vector-icons/Ionicons";
import React from "react";

import { Avatar, useTheme } from "react-native-paper";

import { View } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Foody",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={colors.background}
              color={colors.text}
              style={{ marginLeft: 10 }}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <Icon.Button
                name="ios-search"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate("EditHome")}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Profile");
                }}
                style={{ paddingHorizontal: 10, marginTop: 5 }}
              >
                <Avatar.Image
                  size={30}
                  source={require("../assets/profile.jpg")}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
