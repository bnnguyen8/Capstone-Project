
import PostList from "../../components/PostList";
import Detail from "../../components/Detail";
import Edit from "../../components/Edit";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function PostsScreen({}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={PostList} options={{ headerShown: false }} />

            <Stack.Screen name="Detail" component={Detail} />

            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    )
}