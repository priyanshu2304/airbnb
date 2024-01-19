import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchItem = (props) => {
  const {
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    long,
    lat,
    key,
    distance,
    person,
    review,
    image,
  } = props.data;

  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Reservation", { ...props.data })}
        style={{ margin: 10 }}
      >
        <Image
          style={{ width: "100%", height: 300, borderRadius: 10 }}
          source={{ uri: img }}
        />
        <Pressable style={{ position: "absolute", right: 20, top: 20 }}>
          <AntDesign name="hearto" size={24} color="white" />
        </Pressable>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 17 }}>{location}</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{price}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "grey", fontSize: 16 }}>
              {distance} km away
            </Text>
            <Text>dec 12 - 16</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({});
