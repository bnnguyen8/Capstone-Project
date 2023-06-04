import {
	Text,
	View,
	Switch,
    Pressable,
    Alert
} from "react-native";
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { deletePost, changeStatus } from "../../../redux/postSlice";
import * as database from "../../../database"

export default function PostItem({id, description}) {

    const dispatch = useDispatch()

    const handleDeletePress = () => {
        Alert.alert(
            'Delete Post', 
            'This action will delete this note. Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: async () => {
                        dispatch(deletePost(id))
                        const deleted = await database.remove(id)
                        if (!deleted) {
                            Alert.alert("Error", "There was an error deleting the post")
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
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>

            <View style={styles.button}>
                <View style={styles.switch}>
                </View>

                <MaterialIcons.Button name="delete-sweep" size={24} color="#cc0000"
                    backgroundColor={'transparent'}
                    underlayColor='#ffdddd'
                    onPress={handleDeletePress}
                    >Delete</MaterialIcons.Button>
            </View>
        </View>
    )
}