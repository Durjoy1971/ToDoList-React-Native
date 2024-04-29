import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { ScrollView, Text, View } from "react-native";
import Welcome from "../components/Welcome";
import TakeUserInput from "../components/TakeUserInput";
import ContinueButton from "../components/ContinueButton";
import { fetchContext } from "../components/Context";

export default function Page() {
  const [userName, setUserName] = useState<string>("");

  const fetchUserName = (inputName: string): void => {
    setUserName(inputName);
  };

  return (
    <fetchContext.Provider value={fetchUserName}>
      <View className="bg-blue-200 flex-1 -mt-8">
        <View className="mt-8 px-4">
          <ScrollView showsVerticalScrollIndicator={false}>
            <Welcome />
            {userName != "" ? (
              <>
                <View className="items-center mt-28">
                  <Text className="bg-blue-100 text-teal-500 font-semibold text-xl px-3 py-2">
                    {userName}
                  </Text>
                </View>
                <ContinueButton />
              </>
            ) : (
              <TakeUserInput />
            )}
          </ScrollView>
        </View>
        <StatusBar style="auto" />
      </View>
    </fetchContext.Provider>
  );
}
