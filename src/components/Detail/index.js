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
import { changeCompleted, changeFavorite, changeImportant } from "../../redux/postSlice";
import * as database from "../../database"
import { AntDesign } from '@expo/vector-icons';

import { setPosts } from "../../redux/postSlice";

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

    const handleFavoriteChange = async () => {
        const data = {
            id: post.id,
            favorite: !post.favorite
        }
        dispatch(changeFavorite(data))

        // to avoid corruption
        const updated = await database.update(post.id, {favorite: !post.favorite})
        if (!updated) {
            const data = {
                id: post.id,
                favorite: post.favorite
            }
            dispatch(changeFavorite(data))
            Alert.alert("Error", "Error updating")
        }
    }

    const handleCompletedChange = async () => {
        const data = {
            id: post.id,
            completed: !post.completed
        }
        dispatch(changeCompleted(data))

        const updated = await database.update(post.id, {completed: !post.completed})
        if (!updated) {
            const data = {
                id: post.id,
                completed: post.completed
            }
            dispatch(changeCompleted(data))
            Alert.alert("Error", "Error updating")
        }
    }

    const handleImportantChange = async () => {
        const data = {
            id: post.id,
            important: !post.important
        }
        dispatch(changeImportant(data))

        const updated = await database.update(post.id, {important: !post.important})
        if (!updated) {
            const data = {
                id: post.id,
                important: post.important
            }
            dispatch(changeImportant(data))
            Alert.alert("Error", "Error updating")
        }

        var posts = await database.load();
        dispatch(setPosts(posts));
    }

    return (
        <View style={styles.container}> 
            <View style={styles.body}>
                <ScrollView>
                    {
                        post.favorite ? <AntDesign style={styles.starIcon} name='star' size={18} color='#f6bb03' /> : <Text></Text>
                    }
                    <Text style={styles.description}>{post.description}</Text>
                </ScrollView>
            </View>
            <View style={styles.switch}>
                <Switch
                    value={post.favorite}
                    onValueChange={handleFavoriteChange}
                    />
                <Pressable onPress={handleFavoriteChange}>
                    <Text style={styles.switchText }>Favorite</Text>
                </Pressable>
            </View>
            <View style={styles.switch}>
                <Switch style={styles.firstswitch}
                    value={post.completed}
                    onValueChange={handleCompletedChange}
                    />
                <Pressable onPress={handleCompletedChange}>
                    <Text style={styles.switchText }>Completed</Text>
                </Pressable>
            </View>
            <View style={styles.switch}>
                <Switch style={styles.firstswitch}
                    value={post.important}
                    onValueChange={handleImportantChange}
                    />
                <Pressable onPress={handleImportantChange}>
                    <Text style={styles.switchText }>
                    {!post.important ? "Pin this note to top" : "Pinned"}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}