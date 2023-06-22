import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ScrollView,
    Pressable,
    ActivityIndicator
} from "react-native";
import styles from './styles'
import { useEffect, useState } from "react";
import { loadById } from "../../database";
import { primaryColor } from "../../includes/variables";
import { useDispatch, useSelector } from "react-redux";
import { changeCompleted } from "../../redux/postSlice";
import * as database from "../../database"

export default function Detail({ route }) {

    var { post } = route.params

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts);
    var tempPost = posts.map((subPost) => {
        if (post.id === subPost.id) {
            post = subPost;
            return subPost;
        }
    })

    const handleCompletedChange = async () => {
        const data = {
            id: post.id,
            completed: !post.completed
        }
        dispatch(changeCompleted(data))

        // to avoid corruption
        const updated = await database.update(post.id, {completed: !post.completed})
        console.log("completed:", !post.completed)
        console.log("updated:", updated)
        if (!updated) {
            const data = {
                id: post.id,
                completed: post.completed
            }
            dispatch(changeCompleted(data))
            Alert.alert("Error", "Error updating status")
        }
    }
    

    return (
        <View style={styles.container}> 
            <View style={styles.body}> 
                <ScrollView>
                    <Text style={styles.description}>{post.description}</Text>
                </ScrollView>
            </View>
            <View style={styles.switch}>
                <Switch
                    value={post.completed}
                    onValueChange={handleCompletedChange}
                    />
                <Pressable onPress={handleCompletedChange}>
                    <Text style={styles.switchText }>Completed</Text>
                </Pressable>
            </View>
        </View>
    )
}