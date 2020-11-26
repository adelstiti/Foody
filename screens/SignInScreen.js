import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Alert,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../components/Context";
import Users from "../model/User";
import { useTheme } from "react-native-paper";

const SignInScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [valid_email, setValid_email] = useState(true);
  const [valid_password, setValid_password] = useState(true);
  const { colors } = useTheme();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useContext(AuthContext);

  const EmailChange = (val) => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
      setData({
        ...data,
        email: val,
      });
      setValid_email(true);
    } else {
      setValid_email(false);
    }
  };

  const PasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
      });
      setValid_password(true);
    } else {
      setValid_password(false);
    }
  };

  const handeSubmit = () => {
    if (valid_email && valid_password && data.email && data.password) {
      const foundUser = Users.filter(
        (item) => item.email === data.email && item.password === data.password
      );
      if (foundUser.length === 0) {
        Alert.alert("User not found", "Please check your data.", [
          { text: "Okay" },
        ]);
      } else {
        signIn(foundUser[0]);
      }
    } else {
      setValid_email(false);
      setValid_password(false);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Login!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[styles.footer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.text_footer, { color: colors.text }]}>Email</Text>
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
          {valid_email && data.email !== "" && (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          )}
        </View>
        {!valid_email && (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Email must be valid</Text>
          </Animatable.View>
        )}
        <Text
          style={[styles.text_footer, { color: colors.text, marginTop: 25 }]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            style={{ color: colors.text }}
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            style={[styles.textInput, { color: colors.text }]}
            onChangeText={(val) => PasswordChange(val)}
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
        {!valid_password && (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#FF6347", marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={(styles.signIn, { width: 300 })}
            onPress={handeSubmit}
          >
            <LinearGradient
              colors={["#FFA07A", "#FF6347"]}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: "white", fontSize: 17 }]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
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
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text style={[styles.textSign, { color: "#FF6347" }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

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
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
});
