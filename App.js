import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import HomeScreen from "./screens/HomeScreen";
import StackNavigatore from "./StackNavigatore";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <StatusBar style="auto" />
      <StackNavigatore />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
  },
});
