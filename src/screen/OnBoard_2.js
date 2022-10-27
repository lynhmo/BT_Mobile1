import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
export function OnBoard2() {
  return (
    <View style={styles.container}>
      <Text>Board 2</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6600",
    alignItems: "center",
    justifyContent: "center",
  },
});
