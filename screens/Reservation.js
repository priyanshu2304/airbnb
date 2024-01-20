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
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import DateRangePicker from "rnv-date-range-picker";
import moment from "moment";

const Reservation = () => {
  const route = useRoute();
  const { img, location, title, description, star, price, person, image } =
    route.params;
  const [range, setRange] = useState({});
  const firstDate = new Date(range.firstDate);
  const secondDate = new Date(range.secondDate);
  const navigation = useNavigation();
  const timeDifference = secondDate - firstDate;

  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image style={{ width: "100%", height: 200 }} source={{ uri: img }} />
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{title}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <FontAwesome name="star" size={24} color="#fd5c63" />
              <Text style={{ paddingHorizontal: 10 }}>{star}</Text>
              <Text style={{ fontSize: 16, color: "gray" }}>{location}</Text>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: "#d8d8d8",
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
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
                borderWidth: 1,
                borderColor: "#d8d8d8",
                marginTop: 10,
              }}
            />
            <View
              style={{
                marginTop: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Hosted By {person}
                </Text>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                  source={{ uri: image }}
                />
              </View>
              <Text
                style={{ color: "#8a2be2", fontSize: 16, fontWeight: "bold" }}
              >
                {description}
              </Text>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: "#d8d8d8",
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <AntDesign name="home" size={28} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Entire Home
                </Text>
                <Text style={{ fontSize: 16, color: "gray" }}>
                  You will have the treehouse to yourself
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <SimpleLineIcons name="emotsmile" size={24} color="black" />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Enhanced Clean
                </Text>
                <Text style={{ fontSize: 16, color: "gray" }}>
                  the host is committed to Airbbnb's 5 step cleaning process
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <EvilIcons name="location" size={24} color="black" />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Great Location
                </Text>
                <Text style={{ fontSize: 16, color: "gray" }}>
                  100% of the guests gave a 5 star rating
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Feather name="calendar" size={24} color="black" />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18 }}>
                  Free Cancellation Available
                </Text>
              </View>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: "#d8d8d8",
                marginTop: 10,
              }}
            />
            <View style={{ marginTop: 12 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Where You'll Sleep
              </Text>
              <View
                style={{
                  borderBlockColor: "black",
                  borderWidth: 1,
                  padding: 15,
                  borderRadius: 10,
                  marginTop: 10,
                  width: 130,
                  marginLeft: 10,
                  justifyContent: "center",
                  alignItems: "left",
                }}
              >
                <Ionicons name="bed-outline" size={24} color="black" />
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Bedroom
                </Text>
                <Text style={{ color: "gray" }}>1 double bed</Text>
              </View>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: "#d8d8d8",
                marginTop: 10,
              }}
            />
            <View style={{ marginTop: 12 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                What does this Place Offer
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="food-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    marginLeft: 16,
                  }}
                >
                  Kitchen
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons name="wifi" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    marginLeft: 16,
                  }}
                >
                  WiFi
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <FontAwesome name="car" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    marginLeft: 16,
                  }}
                >
                  Free Parking on Premises
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <MaterialIcons name="pets" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    marginLeft: 16,
                  }}
                >
                  Pets
                </Text>
              </View>
            </View>
            <Text
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: "#d8d8d8",
                marginTop: 10,
              }}
            />
            <DateRangePicker
              onSelectDateRange={(range) => {
                setRange(range);
              }}
              responseFormat="YYYY-MM-DD"
              minDate={moment()}
            />
            {range.firstDate && range.secondDate && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18 }}>{range.firstDate}</Text>
                <Text style={{ fontSize: 18 }}>{range.secondDate}</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={{
          flexDirection: "row",
          backgroundColor: "#afd8f5",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 15,
          paddingHorizontal: 25,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{price}</Text>
        <Pressable
          disabled={!range.firstDate && !range.secondDate}
          style={{ backgroundColor: "#fd5c63", padding: 15 }}
          onPress={() =>
            navigation.navigate("Confirm", {
              no_of_days: daysDifference,
              ...route.params,
              startDate: range.firstDate,
              endDate: range.secondDate,
            })
          }
        >
          <Text style={{ color: "white" }}>Reserve</Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default Reservation;

const styles = StyleSheet.create({});
