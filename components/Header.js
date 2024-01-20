import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 540 }}
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}
      >
        <View style={styles.inputBox}>
          <AntDesign name="search1" size={18} color="#C71585" />
          <TextInput
            style={styles.textStyle}
            placeholder="Where you want to go?"
            placeholderTextColor={"#C71585"}
          />
        </View>

        <Pressable
          style={styles.buttonStyleContainer}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonStyle}>I'm Flexible</Text>
        </Pressable>
        <View
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            Not Sure Where to go?
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 26,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Perfect
          </Text>
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
    borderRadius: 20,
    padding: 8,
  },
  textStyle: {
    color: "black",
    fontSize: 16,
    paddingHorizontal: 10,
  },
  buttonStyleContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    overflow: "hidden",
  },
  buttonStyle: {
    color: "#C71585",
    backgroundColor: "white",
    padding: 10,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
  },
});
