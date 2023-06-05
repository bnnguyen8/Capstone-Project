import { useEffect } from "react";
import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ScrollView,
} from "react-native";
import styles from './styles'

import PostList from "../../components/PostList";
import Detail from "../../components/Detail";
import Form from "../../components/Form";
import Edit from "../../components/Edit";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function PostsScreen({ navigation, route }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={PostList} options={{ headerShown: false }} />

            <Stack.Screen name="Add" component={Form} options={{ title: 'Go back' }} />

            <Stack.Screen name="Detail" component={Detail} />

            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    )
}