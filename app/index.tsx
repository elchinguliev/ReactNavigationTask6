import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Posts: undefined;
  PostDetail: { postId: number };
};

type PostsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Posts'>;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation<PostsScreenNavigationProp>();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      onPress={() => navigation.navigate('PostDetail', { postId: item.id })}
    >
      <Image
        source={{ uri: `https://via.placeholder.com/150/${Math.floor(Math.random() * 1000)}` }}
        style={{ width: 100, height: 100 }}
      />
      <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
      <Text numberOfLines={2}>{item.body}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Posts;
