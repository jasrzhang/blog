import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContent";

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);
  console.log(blogPosts);
  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={function ({ item }) {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
