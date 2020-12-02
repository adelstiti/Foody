import React, { useContext, useState } from "react";
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
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";
import { AuthContext } from "../components/AuthContext";

const SignUpScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [valid_email, setValid_email] = useState(true);
  const [valid_password, setValid_password] = useState(true);
  const [valid_ConfirmPassword, setValid_ConfirmPassword] = useState(true);
  const { colors } = useTheme();

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [stateAuth, dispatch] = useContext(AuthContext);

  const EmailChange = (val) => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
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

  const ConfirmPasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        confirmPassword: val,
      });
      setValid_ConfirmPassword(true);
    } else {
      setValid_ConfirmPassword(false);
    }
  };
  const handleSubmit = () => {
    if (
      valid_email &&
      valid_password &&
      valid_ConfirmPassword &&
      data.email &&
      data.password &&
      data.confirmPassword
    ) {
      dispatch.signUp(data);
    } else {
      setValid_email(false);
      setValid_password(false);
      setValid_ConfirmPassword(false);
    }
  };

  useEffect(() => {
    return () => {
      dispatch.clearError();
    };
  }, []);
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
        <ScrollView showsVerticalScrollIndicator={false}>
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
              onChangeText={(val) => ConfirmPasswordChange(val)}
              secureTextEntry={hideConfirmPassword}
            />
            {hideConfirmPassword ? (
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
          {!valid_ConfirmPassword && (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long
              </Text>
            </Animatable.View>
          )}

          {stateAuth.error !== "" && (
            <View
              style={{
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text style={[styles.errorMsg, { fontSize: 17 }]}>
                {stateAuth.error}
              </Text>
            </View>
          )}

          <View style={styles.button}>
            <TouchableOpacity
              style={(styles.signIn, { width: 300 })}
              onPress={handleSubmit}
            >
              <LinearGradient
                colors={["#FFA07A", "#FF6347"]}
                style={styles.signIn}
              >
                <Text
                  style={[styles.textSign, { color: "white", fontSize: 17 }]}
                >
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  width: 300,
                  borderColor: "#485a96",
                  borderWidth: 1,
                  marginTop: 15,
                  flexDirection: "row",
                },
              ]}
            >
              <Feather
                color="#485a96"
                name="facebook"
                size={25}
                style={{ marginRight: 20 }}
              />
              <Text
                style={[styles.textSign, { color: "#485a96", fontSize: 17 }]}
              >
                Sign Up with Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  width: 300,
                  borderColor: "#cf4332",
                  borderWidth: 1,
                  marginTop: 15,
                  flexDirection: "row",
                },
              ]}
            >
              <Ionicons
                color="#cf4332"
                name="logo-google"
                size={25}
                style={{ marginRight: 20 }}
              />
              <Text
                style={[styles.textSign, { color: "#cf4332", fontSize: 17 }]}
              >
                Sign Up with Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text style={{ color: "#FF6347", marginTop: 15 }}>
                Don't have an account? Create here?
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
    paddingTop: 30,
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
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
    marginTop: 30,
    marginBottom: 20,
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
