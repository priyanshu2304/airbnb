import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FinalScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>
        Hooray Your Booking has been confirmed
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fd5c63" }}>
        Airbnb
      </Text>
    </View>
  );
};

export default FinalScreen;

const styles = StyleSheet.create({});
