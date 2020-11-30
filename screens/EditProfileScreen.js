import React, { useRef, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Permissions from "expo-permissions";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "react-native-paper";

import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native-gesture-handler";

const EditProfileScreen = () => {
  const { colors } = useTheme();
const [image, setImage] = useState(require("../assets/profile.jpg"))
  const takePhotoFromCamera = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
    ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    }).then((result) => {
      if (!result.cancelled) {
        setImage({uri : result.uri});
      }
    })
  };

  const choosePhotoFromLibrary = async () => {
    await Permissions.askAsync(Permissions.CAMERA)
    ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      }).then((result) => {
        if (!result.cancelled) {
          setImage({uri : result.uri});
        }
      })
 
  };
  const sheetRef = useRef(null);
  const fail = new Animated.Value(1);

  const renderContent = () => (
    <View style={[styles.panel, { backgroundColor: colors.background }]}>
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.panelTitle, { color: colors.text }]}>
          Upload Photo
        </Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => takePhotoFromCamera()}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => choosePhotoFromLibrary()}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => {
          sheetRef.current.snapTo(1);
        }}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={[styles.header, { backgroundColor: colors.background }]}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[380, 0]}
        initialSnap={1}
        callbackNode={fail}
        borderRadius={10}
        renderContent={renderContent}
        renderHeader={renderHeader}
        enabledGestureInteraction={true}
      />

      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fail, 1.0)),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
            <View style={styles.imageWrapper}>
              <ImageBackground
                source={image}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View style={styles.backgourndProfile}>
                  <Icon
                    name="camera"
                    style={styles.iconCamera}
                    size={35}
                    color="#fff"
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={[styles.profileName, { color: colors.text }]}>
            {" "}
            Adel Stiti
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} color={colors.text} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} color={colors.text} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" size={20} color={colors.text} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" size={20} color={colors.text} />
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="globe" size={20} color={colors.text} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" size={20} color={colors.text} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666"
            autoCorrect={false}
            style={[styles.textInput, { color: colors.text }]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Edit</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  backgourndProfile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 15,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  imageWrapper: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCamera: {
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -2,
    paddingLeft: 10,
    color: "#05375a",
  },
});
