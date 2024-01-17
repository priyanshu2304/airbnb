import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://www.jsonkeeper.com/b/4G1G")
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, []);
  return (
    <View style={{ marginTop: 20, padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Explore More</Text>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item.img }}
            />
            <View
              style={{
                backgroundColor: "#72A0C1",
                paddingLeft: 10,
                width: 120,
                justifyContent: "center",
                alignContent: "center",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>{item.location}</Text>
              <Text>{item.distance}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
