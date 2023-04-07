import React, { Component } from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";

class PhotoUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: "",
    };

    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
  }
  handlePhotoUpload() {
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
        <TextInput placeholder="Photo: " />
        <TouchableOpacity onPress={this.handlePhotoUpload}>
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
              source={require("./components/Images/photoAvatar.jpg")}
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

export default PhotoUploader;
