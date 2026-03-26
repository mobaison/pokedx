import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit src/app/index.tsx to edit this  hello screen.</Text>
      <Text>Press Cmd + R to reload, Cmd + D or shake for dev menu.</Text>  
    </View>
  );
}
