import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";

const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator activeColor="white" inactiveColor="rgba(255,255,255,0.5)">
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarColor: "#FF6347",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ExploreScreen}
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
        name="Notifications"
        component={ExploreScreen}
        options={{
          tabBarColor: "#d02860",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarColor: "orange",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;
