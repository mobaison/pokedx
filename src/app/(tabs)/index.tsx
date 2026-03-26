import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.page}>
      <View style={styles.headerBox}>
        <Text style={styles.heading}>Home</Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.content}>Welcome to Pokedx.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#eef3f7",
    paddingTop: 42,
    paddingHorizontal: 16,
  },
  headerBox: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
  },
  heading: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1b4965",
    textAlign: "center",
  },
  contentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: 14,
    padding: 14,
  },
  content: {
    color: "#2f4858",
    fontSize: 16,
    textAlign: "center",
  },
});
