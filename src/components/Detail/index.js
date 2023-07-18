import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    RadioButton,
    ScrollView,
    Pressable,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from './styles'
import { useEffect, useState } from "react";
import { loadById } from "../../database";
import { primaryColor } from "../../includes/variables";
import { useDispatch, useSelector } from "react-redux";
import { changeCompleted, changeColor, changeFavorite, changeImportant } from "../../redux/postSlice";
import * as database from "../../database"
import { AntDesign } from '@expo/vector-icons';

import { setPosts } from "../../redux/postSlice";

const colors = ['None', 'Yellow', 'Green', 'Blue', 'Purple'];

export default function Detail({ route }) {

    var { post } = route.params

    const dispatch = useDispatch()

    const [selectedColor, setSelectedColor] = useState(post.color);

    console.log(" ----- ")
    // console.log(selectedColor)
    // console.log(post.color)


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

    const handleColorChange = async (color) => {
        // TODO: change color 1
        setSelectedColor(color);
        console.log(color)

        const data = {
            id: post.id,
            color: color
        }
        dispatch(changeColor(data))

        const updated = await database.update(post.id, {color: color})
        if (!updated) {
            const data = {
                id: post.id,
                color: selectedColor
            }
            dispatch(changeColor(data))
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
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                {colors.map((color) => (
                    <TouchableOpacity style={styles.TouchMe} onPress={() => handleColorChange(color)}>
                        <Text>
                            <Ionicons name={ selectedColor == color ? "radio-button-on" : "radio-button-off" } size={18} color="{color.toLowerCase()}" /> 
                            {color}
                        </Text>
                    </TouchableOpacity>
                ))}
                </View>
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