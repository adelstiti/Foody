import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("SplashScreen")}
      onDone={() => navigation.navigate("SplashScreen")}
      pages={[
        {
          backgroundColor: "#93e6cf",
          image: <Image source={require("../assets/onboarding/img1.png")} />,
          title: "Order your food",
          subtitle: "Find best food in your locality",
        },
        {
          backgroundColor: "#ffeb85",
          image: <Image source={require("../assets/onboarding/img2.png")} />,
          title: "Hot Food and Fast livraison",
          subtitle: "one with React Native Onboarding Sw",
        },
        {
          backgroundColor: "#f2babd",
          image: <Image source={require("../assets/onboarding/img3.png")} />,
          title: "Just click order",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
