import React, { useEffect, useMemo, useReducer, useState } from "react";
import { firebase } from "./firebase";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./screens/MainTabScreen";
import DrawerContent from "./screens/DrawerContent";
import SupportScreen from "./screens/SupportScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RootStackScreen from "./screens/RootStackScreen";
import { AsyncStorage, Text, View } from "react-native";
import { AuthContext } from "./components/AuthContext";

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Image } from "react-native-animatable";

const Drawer = createDrawerNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...DefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const initialLoginState = {
    isLoading: true,
    user: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "IS_LOGIN":
        return { ...prevState, userToken: action.token, isLoading: false };
      case "LOGIN":
        return {
          ...prevState,
          user: action.user,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          user: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          user: action.user,
          isLoading: false,
        };

      default:
        break;
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (user) => {
        try {
          await firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password);

          dispatch({
            type: "LOGIN",
            user: user,
          });
        } catch (error) {
          console.log(error);
        }
        console.log(initialLoginState, user);
      },
      signUp: async ({ email, password }) => {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
          console.log(error);
        }
      },
      signOut: async () => {
        try {
          await firebase.auth().signOut();
        } catch (error) {
          console.log(error);
        }
        dispatch({ type: "LOGOUT" });
      },
      toggleTheme: () => {
        setIsDarkTheme((isdak) => !isdak);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      try {
        await firebase.auth().onAuthStateChanged((user) => {
          dispatch({ type: "REGISTER", user: user });
        });
      } catch (error) {
        console.log(error);
      }
    }, 1000);
    console.log("heeey");
    // }, [loginState.userToken]);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("./assets/start-animation.gif")}
        />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.user ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="Home" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
              <Drawer.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
              />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
