import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";

import Icon from "@expo/vector-icons/Ionicons";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { useTheme } from "react-native-paper";
const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
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
            <MaterialIcon.Button
              name="account-edit"
              size={25}
              backgroundColor={colors.background}
              color={colors.text}
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate("EditProfile")}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: "",
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
