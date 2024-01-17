import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

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
  return (
    <View>
      <Pressable onPress={() => console.warn("hey")} style={{ margin: 10 }}>
        <Image
          style={{ width: "100%", height: 300, borderRadius: 10 }}
          source={{ uri: img }}
        />
      </Pressable>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({});
