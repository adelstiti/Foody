import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";

const SignUpScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [valid_email, setValid_email] = useState(false);
  const { colors } = useTheme();

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const EmailChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
      });
      setValid_email(true);
    } else {
      setData({
        ...data,
        email: val,
      });
      setValid_email(false);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, { backgroundColor: colors.background }]}
      >
        <ScrollView>
          <Text style={[styles.text_footer, { color: colors.text }]}>
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={{ color: colors.text }}
              name="user-o"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholderTextColor="#666666"
              placeholder="Your Email"
              autoCapitalize="none"
              style={[styles.textInput, { color: colors.text }]}
              onChangeText={(val) => EmailChange(val)}
            />
            {valid_email && (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            )}
          </View>
          <Text
            style={[styles.text_footer, { color: colors.text, marginTop: 25 }]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather
              style={{ color: colors.text }}
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              style={[styles.textInput, { color: colors.text }]}
              onChangeText={(val) => setData({ ...data, password: val })}
              secureTextEntry={hidePassword}
            />
            {hidePassword ? (
              <Feather
                name="eye-off"
                color="grey"
                size={20}
                onPress={() => setHidePassword(!hidePassword)}
              />
            ) : (
              <Feather
                name="eye"
                color="grey"
                size={20}
                onPress={() => setHidePassword(!hidePassword)}
              />
            )}
          </View>
          <Text
            style={[styles.text_footer, { color: colors.text, marginTop: 25 }]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather
              style={{ color: colors.text }}
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Your Password"
              autoCapitalize="none"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              onChangeText={(val) => setData({ ...data, confirmPassword: val })}
              secureTextEntry={hideConfirmPassword}
            />
            {hidePassword ? (
              <Feather
                name="eye-off"
                color="grey"
                size={20}
                onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
              />
            ) : (
              <Feather
                name="eye"
                color="grey"
                size={20}
                onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
              />
            )}
          </View>

          <View style={styles.button}>
            <LinearGradient
              colors={["#FFA07A", "#FF6347"]}
              style={styles.signIn}
            >
              <Text style={(styles.signIn, { color: "white", fontSize: 17 })}>
                Sign Up
              </Text>
            </LinearGradient>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: "#FF6347",
                  width: 200,
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.textSign, { color: "#FF6347" }]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6347",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
