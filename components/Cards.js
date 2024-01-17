import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const Cards = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Inspiration for Next Trip
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Pressable style={{ marginTop: 10 }}>
            <Image
              style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
              source={{
                uri: "https://i.pinimg.com/originals/b7/5f/da/b75fdaff1a53ea1cd53a7d1ac8b38c75.jpg",
              }}
            />
            <View
              style={{
                backgroundColor: "orange",
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                padding: 10,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              >
                Madikeri
              </Text>
              <Text style={{ fontSize: 14, fontWeight: 400, color: "white" }}>
                280Km away
              </Text>
            </View>
          </Pressable>
          <Pressable style={{ marginTop: 10 }}>
            <Image
              style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
              source={{
                uri: "https://data.1freewallpapers.com/download/dream-house.jpg",
              }}
            />
            <View
              style={{
                backgroundColor: "orange",
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                padding: 10,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              >
                Chickmagalur
              </Text>
              <Text style={{ fontSize: 14, fontWeight: 400, color: "white" }}>
                250Km away
              </Text>
            </View>
          </Pressable>
          <Pressable style={{ marginTop: 10 }}>
            <Image
              style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
              source={{
                uri: "https://cutewallpaper.org/21/hdphoto-download/Downloadfull-hd-wallpaper-download-1080p-in-2019-Nature-.jpg",
              }}
            />
            <View
              style={{
                backgroundColor: "orange",
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                padding: 10,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              >
                Chennai
              </Text>
              <Text style={{ fontSize: 14, fontWeight: 400, color: "white" }}>
                380Km away
              </Text>
            </View>
          </Pressable>
          <Pressable style={{ marginTop: 10 }}>
            <Image
              style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JaRuZKF_iJQOmWs6yAozQHmpnVNV17YJe9WWa3PTW78SkMHkm5D3Rfs-_JSAmNwS5wE&usqp=CAU",
              }}
            />
            <View
              style={{
                backgroundColor: "orange",
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                padding: 10,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              >
                Coorg
              </Text>
              <Text style={{ fontSize: 14, fontWeight: 400, color: "white" }}>
                300Km away
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
