import { View } from "react-native";
import ToDOListWrapper from "../../../components/ToDoListWrapper";

export default function MainPage() {
  return (
    <View className="bg-blue-200 flex-1 -mt-8">
      <View className="mt-10 px-4">
        <ToDOListWrapper />
      </View>
    </View>
  );
}
