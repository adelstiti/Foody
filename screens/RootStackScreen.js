import React, { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import OnboardingScreen from "./OnboardingScreen";
import { AsyncStorage } from "react-native";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLanched").then((value) => {
      if (!value) {
        AsyncStorage.setItem("alreadyLanched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <RootStack.Navigator headerMode="none">
      {isFirstLaunch && (
        <RootStack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
      )}
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
