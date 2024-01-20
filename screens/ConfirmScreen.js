import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
const ConfirmScreen = () => {
  const route = useRoute();
  const {
    image,
    img,
    location,
    title,
    description,
    person,
    startDate,
    endDate,
    price,
    no_of_days,
  } = route.params;

  const [add, setAdd] = useState(1);
  const serviceFee = 20;
  const taxes = 45;
  const res = price.replace(/\D/g, "");
  const price_with_date = res * no_of_days;
  const totalPrice = (price_with_date + serviceFee + taxes) * add;
  return (
    <ScrollView>
      <View>
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 10 }}
            source={{ uri: img }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "gray" }}>{location}</Text>
            <Text
              style={{ marginVertical: 10, fontSize: 14, fontWeight: "bold" }}
            >
              {title}
            </Text>
            <Text style={{ width: 300 }}>{description}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            paddingHorizontal: 10,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>this is a rare find</Text>
            <Text style={{ fontSize: 15 }}>
              {person}'s name on airbnb is fully booked
            </Text>
          </View>
          <FontAwesome name="diamond" size={24} color="pink" />
        </View>
        <Text
          style={{
            height: 1,
            borderWidth: 2,
            borderColor: "#d8d8d8",
            marginTop: 10,
          }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: 600 }}>Your Trip</Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Dates</Text>
            <Text>
              {startDate}-{endDate}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Guests</Text>
            <Text>{add} Guests</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                position: "absolute",
                right: 10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fd5c63",
                borderRadius: 5,
              }}
            >
              <Pressable onPress={() => setAdd(Math.max(1, add - 1))}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  {add}
                </Text>
              </Pressable>

              <Pressable onPress={() => setAdd(add + 1)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </View>
        <Text
          style={{
            height: 1,
            borderWidth: 2,
            borderColor: "#d8d8d8",
            marginTop: 10,
          }}
        />
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 20 }}>Price Details</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {price} X {no_of_days} Days
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray" }}>
              £{price_with_date}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Service Charge
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray" }}>
              £{serviceFee}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Occupancy Taxes and Fee
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray" }}>
              £{taxes}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Total Price
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray" }}>
              £{totalPrice}
            </Text>
          </View>
        </View>
        <Text
          style={{
            height: 1,
            borderWidth: 2,
            borderColor: "#d8d8d8",
            marginTop: 10,
          }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20 }}>Cancellation Policy</Text>

          <Text style={{ marginTop: 10, color: "gray", fontSize: 16 }}>
            Free Cancellation for 48 hours, refund minus the service fee
          </Text>

          <Text style={{ marginTop: 10, color: "gray", fontSize: 16 }}>
            Our policy does not cover policy disruptions caused by COVID-19
          </Text>
        </View>
        <Text
          style={{
            height: 1,
            borderWidth: 2,
            borderColor: "#d8d8d8",
            marginTop: 10,
          }}
        />
        <Pressable
          style={{
            backgroundColor: "#fd5c63",
            width: 200,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 20,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Confirm and Pay</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({});
