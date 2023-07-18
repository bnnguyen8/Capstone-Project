import { useEffect } from "react";
import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ScrollView,
    Pressable,
    Alert
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from './styles'

import * as database from "../../database"
import { setPosts } from "../../redux/postSlice";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ResetDatabase() {

    const dispatch = useDispatch()

    const posts = useSelector((state) => state.post.posts);

    const handleResetDatabase = async () => {
        // TODO: When user click to the "Reset database" button, show alert to confirm, when user click "OK", reset database
        Alert.alert(
            'Delete Note',
            'This action will clear all your notes. Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: async () => {
                        dispatch(setPosts([]));
                        const deleted = await database.removeAll(posts)
                        if (!deleted) {
                            Alert.alert("Error", "There was an error deleting the notes")
                        }else{
                            Alert.alert("Success", "All notes have been deleted successfully.")
                        }
                    }
                },
                {
                    text: 'No',
                }
            ]
        )
    }

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Reset Database</Text>
            <View style={styles.optionContainer}> 
                <View style={styles.button}>
                    <MaterialCommunityIcons.Button
                    name="trash-can-outline"
                    size={18}
                    color="#cc0000"
                    backgroundColor={'transparent'}
                    underlayColor='#ffdddd'
                    onPress={handleResetDatabase}
                    >Clear all my notes</MaterialCommunityIcons.Button>
                </View>
            </View>
        </View>
    )
}