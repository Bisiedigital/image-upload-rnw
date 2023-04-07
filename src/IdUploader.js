import React, { Component } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

class IdUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: "",
    };

    this.handleIdUpload = this.handleIdUpload.bind(this);
  }
  handleIdUpload() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setState({
          imageUri: reader.result,
        });
      };
    };
    input.click();
  }
  render() {
    return (
      <View>
        <TextInput placeholder="ID: " />
        <TouchableOpacity onPress={this.handleIdUpload}>
          {this.state.imageUri ? (
            <Image
              source={{ uri: this.state.imageUri }}
              style={{
                borderRadius: 5,
                borderWidth: 3,
                height: 150,
                width: 150,
                borderColor: "gray",
              }}
            />
          ) : (
            <Image
              source={require("./components/Images/idAvatar.jpg")}
              style={{
                borderRadius: 5,
                borderWidth: 3,
                height: 150,
                width: 150,
                borderColor: "gray",
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default IdUploader;
