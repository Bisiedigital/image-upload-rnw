import React from "react";
import { View } from "react-native";
import PhotoUploader from "./PhotoUploader";
import IdUploader from "./IdUploader";

function App() {
  return (
    <View style={{ flexDirection: "row" }}>
      <PhotoUploader />
      <IdUploader />
    </View>
  );
}

export default App;
