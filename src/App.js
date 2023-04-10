import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
// import StyleSheet from "react-native-media-query";
import PhotoUploader from "./PhotoUploader";
import IdUploader from "./IdUploader";

function App() {
  // const { ids, styles } = StyleSheet.create({
  //   example: {
  //     "@media (min-width: 888px)": {
  //       backgroundColor: "white",
  //       flexDirection: "row",
  //     },
  //     "@media (max-width: 888px)": {
  //       backgroundColor: "#DCDCDC",
  //       flexDirection: "column",
  //     },
  //   },
  // });
  const { height, width } = useWindowDimensions();
  /*  const [windowDimensions, setWindowDimensions] = React.useState(Dimensions.get('window'));
  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(Dimensions.get('window'));
    };
    Dimensions.addEventListener('change', handleResize);
    return () => {
      Dimensions.removeEventListener('change', handleResize);
    };
  }, []); */

  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    containerWide: {
      flexDirection: "row",
      backgroundColor: "gray",
    },
  });

  return (
    // <View style={styles.example} dataSet={{ media: ids.example }}>
    // <View style={windowDimensions.width <= 400 ? styles.container : styles.containerWide}>
    <View style={width <= 400 ? styles.container : styles.containerWide}>
      <PhotoUploader />
      <IdUploader />
    </View>
  );
}

export default App;
