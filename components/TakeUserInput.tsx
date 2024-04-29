import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { TakeUserInputProps } from "./Interface_Type";

export default function TakeUserInput({ fetchUserName }: TakeUserInputProps) {
  const [userText, onChangeText] = useState<string>("");
  return (
    <View className="bg-blue-100 mt-28">
      <TextInput
        className="p-2 border-blue-400 border text-center text-teal-500 font-semibold text-xl"
        value={userText}
        onChangeText={(text) => onChangeText(text)}
        onSubmitEditing={() => fetchUserName(userText)}
        placeholder="Enter Your User Name"
        autoCapitalize="words"
        placeholderTextColor={"black"}
      />
    </View>
  );
}
