import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 540 }}
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}
      >
        <View style={styles.inputBox}>
          <AntDesign name="search1" size={24} color="#C71585" />
          <TextInput
            style={styles.textStyle}
            placeholder="where you want to go"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    width: 220,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "20",
    padding: 8,
  },
  textStyle: {
    color: "black",
    fontSize: 16,
  },
});
