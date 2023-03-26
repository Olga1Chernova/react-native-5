import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const CreatePostsScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.post}>Create Posts</Text>
        <View style={styles.camera_container}>
          <TouchableOpacity>
            <EvilIcons name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <View style={styles.input_wrapper}>
          <TextInput placeholder="Enter post name" style={styles.input} />
        </View>
        <View style={styles.input_wrapper}>
          <TextInput placeholder="Enter post location" style={styles.input} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.post}>Post</Text>
        </TouchableOpacity>
      </View>
    );
}

export default CreatePostsScreen;

const styles = StyleSheet.create({
  post: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#212121",
    marginTop: 55,
  },
  container: {
    flex: 1,
    //alignItems: "center",
    marginHorizontal: 16,
  },
  camera_container: {
    marginTop: 32,
    marginBottom: 32,
    height: 240,
    backgroundColor: "#E8E8E8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input_wrapper: {
    borderColor: "#BDBDBD",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    marginTop: 16,
    height: 51,
    borderRadius: 100,
  },
  post: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: '#FFFFFF',
    paddingVertical: 16,
  },
});
