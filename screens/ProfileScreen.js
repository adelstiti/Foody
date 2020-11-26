import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
      vertical
    >
      <View>
        <ImageBackground
          style={styles.header}
          source={require("../assets/logo.png")}
        ></ImageBackground>

        <View style={styles.profileImage}>
          <Image
            source={{
              uri:
                "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/35226276_1681414515227831_8101489032535474176_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=HrmOIlC2CrMAX-LQN9t&_nc_ht=scontent.ftun4-1.fna&oh=f93c20d5e2b6a51f659cf7118d2dff2b&oe=5FE17032",
            }}
            style={styles.logo}
          />

          <Text style={styles.profileName}>Adel Stiti</Text>

          <TouchableOpacity
            style={styles.btnFollow}
            onPress={() => alert("Loading Login...")}
          >
            <Text style={{ color: "#38b2ac" }}>Follow</Text>
          </TouchableOpacity>
          <Text style={styles.descriptionText}>
            lorem spfmkdsfd mdsflsfvdmsflmd dsmfmdls dsfù
          </Text>
        </View>
        <View style={styles.newPost}>
          <TextInput
            placeholderTextColor="#666666"
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.inputPost}
          />
          <TouchableOpacity
            style={styles.btnPost}
            onPress={() => alert("Loading Login...")}
          >
            <Text style={styles.btnText}>Post</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.post}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri:
                  "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/35226276_1681414515227831_8101489032535474176_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=HrmOIlC2CrMAX-LQN9t&_nc_ht=scontent.ftun4-1.fna&oh=f93c20d5e2b6a51f659cf7118d2dff2b&oe=5FE17032",
              }}
              style={styles.postAvatar}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.postTitle}> Adel Stiti</Text>
              <Text style={styles.postTime}> 1 week ago</Text>
            </View>

            <Feather
              style={{
                flex: 1,
                textAlign: "right",
              }}
              color="#05375a"
              size={20}
              name="bookmark"
            />
          </View>

          <Text style={{ marginTop: 10, color: "#252525" }}>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem
          </Text>

          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Feather color="#05375a" size={20} name="thumbs-up" />
            <Text style={{ marginLeft: 1, marginRight: 10 }}>0</Text>
            <Feather color="#05375a" size={20} name="thumbs-down" />
            <Text style={{ marginLeft: 1 }}>0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.19;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "red",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: 140,
  },
  profileImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 300,
    marginTop: -50,
  },
  profileName: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 17,
    color: "#524C4F",
  },
  btnFollow: {
    borderColor: "#38b2ac",
    borderRadius: 20,
    borderWidth: 1,
    margin: 5,
    alignItems: "center",
    width: "30%",
    padding: 5,
    borderRadius: 20,
  },
  descriptionText: {
    fontSize: 12,
    color: "gray",
    marginTop: 10,
  },
  newPost: {
    margin: 15,
    marginTop: 30,
    justifyContent: "center",
    borderColor: "#4fd1c5",
    borderWidth: 1,
    borderRadius: 20,
  },
  inputPost: {
    padding: 20,
  },
  btnPost: {
    backgroundColor: "#38b2ac",
    alignSelf: "flex-end",
    alignItems: "center",
    width: "20%",
    padding: 8,
    margin: 10,
    borderRadius: 20,
  },
  btnText: {
    color: "white",
  },
  post: {
    margin: 20,
    padding: 30,
    paddingBottom: 10,
    shadowColor: "#30C1DD",
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 5,
    borderRadius: 20,
  },
  postAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  postTime: {
    fontSize: 12,
  },
});
