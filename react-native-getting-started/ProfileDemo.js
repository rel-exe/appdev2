import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          source={require("./assets/rel.png")}
          style={styles.avatar}
        />

        <Text style={styles.title}>Student Profile</Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Name: </Text>John Russel Regalado
        </Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Course & Section: </Text>BSIS 3B
        </Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Favorite Hobby: </Text>Poetry
        </Text>

         <Text style={styles.text}>
          <Text style={styles.label}>Age: </Text>20
        </Text>

        <Text style={styles.subtitle}>Pet Peeves</Text>

        <Text style={styles.text}>• Bias</Text>
        <Text style={styles.text}>• Partiality</Text>
        <Text style={styles.text}>• Pride</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 15,
  },

  text: {
    fontSize: 15,
    marginBottom: 6,
    color: "#333",
    alignSelf: "flex-start",
  },

  label: {
    fontWeight: "700",
    color: "#000",
  },

  subtitle: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 6,
    alignSelf: "flex-start",
  },
});
