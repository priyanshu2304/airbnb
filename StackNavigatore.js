import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import Reservation from "./screens/Reservation";
import ConfirmScreen from "./screens/ConfirmScreen";
import FinalScreen from "./screens/FinalScreen";
const StackNavigatore = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          //   options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reservation"
          component={Reservation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmScreen}
          options={{
            title: "Confirm and Pay",
            headerTitle: "Confirm and Pay",
            headerStyle: {
              backgroundColor: "#fd5c63",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Final Screen"
          options={{
            headerShown: false,
          }}
          component={FinalScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatore;

const styles = StyleSheet.create({});
