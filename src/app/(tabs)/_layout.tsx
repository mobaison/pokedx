import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1b4965",
        tabBarInactiveTintColor: "#2f4858",
        tabBarStyle: [styles.tabBar],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokedx",
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    height: 72,
    borderTopWidth: 0,
    backgroundColor: "rgba(250, 250, 250, 0.35)",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 10,
    marginBottom: 12,
  },
});
