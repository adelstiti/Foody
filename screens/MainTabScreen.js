import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExploreScreen from "./ExploreScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import HomeScreen from "./HomeScreen";
import HomeStackScreen from "./HomeStackScreen";

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator activeColor="white" inactiveColor="rgba(255,255,255,0.5)">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: "#FF6347",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarColor: "orange",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ProfileStackScreen}
        options={{
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="android-messages"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",

          tabBarColor: "#d02860",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;
