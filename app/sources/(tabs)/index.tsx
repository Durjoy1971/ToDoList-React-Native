import ToDOListWrapper from "components/ToDoListWrapper";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function MainPage() {
  return (
    <View className="bg-blue-200 flex-1 -mt-8">
      <View className="mt-10 px-4">
        <ToDOListWrapper />
      </View>
    </View>
  );
}
