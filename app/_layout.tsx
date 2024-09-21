import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from './index';
import PostDetail from './PostDetail'; // Ensure this import is correct
import { RootStackParamList } from './types'; // Adjust import path

import { NativeStackScreenProps } from '@react-navigation/native-stack';

type PostDetailProps = NativeStackScreenProps<RootStackParamList, 'PostDetail'>;


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppLayout = () => {
  return (
    <Stack.Navigator initialRouteName="Posts">
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
    </Stack.Navigator>
  );
};

export default AppLayout;
