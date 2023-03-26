import { useState } from "react";
import { Text, StyleSheet, SafeAreaView, FlatList, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const USER_POSTS = [];

const PostsScreen = ({navigation}) => {
  const [posts, setPosts] = useState(USER_POSTS);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logout}>
          <Text style={styles.posts}>Your posts page</Text>
          <TouchableOpacity style={styles.logout_button} onPress={() => navigation.navigate("Login")}>
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
}

export default PostsScreen;

const styles = StyleSheet.create({
  posts: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },
  logout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
  },
  logout_button: {
    marginLeft: 45,
  }
});
