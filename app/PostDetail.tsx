import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { RootStackParamList } from './types';  // Adjust path based on your file structure
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type PostDetailProps = NativeStackScreenProps<RootStackParamList, 'PostDetail'>;

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostDetail = ({ route }: PostDetailProps) => {
  const { postId } = route.params;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [postId]);

  if (!post) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

export default PostDetail;
