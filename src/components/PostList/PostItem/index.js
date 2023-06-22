import {
    Text,
    View,
    Switch,
    Pressable,
    Alert
} from "react-native";
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { deletePost, changeStatus } from "../../../redux/postSlice";
import * as database from "../../../database"
import { AntDesign } from '@expo/vector-icons';

export default function PostItem({ id, description, completed, favorite, navigation }) {

    const dispatch = useDispatch()
    const handleEditPress = () => {
        navigation.navigate("Edit", { post: { id, description } });
    };

    const handleDeletePress = () => {
        Alert.alert(
            'Delete Note',
            'This action will delete this note. Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: async () => {
                        dispatch(deletePost(id))
                        const deleted = await database.remove(id)
                        if (!deleted) {
                            Alert.alert("Error", "There was an error deleting the note")
                        }
                    }
                },
                {
                    text: 'No',
                }
            ]
        )
    }

    const cardStyle = completed ? styles.cardCompleted : styles.card;

    return (
        <View style={cardStyle}>
            <View style={[styles.textContainer, styles.StartDesription]}>
                {
                    favorite ? <AntDesign style={styles.starIcon} name='star' size={18} color='#f6bb03' /> : <Text></Text>
                }
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>

            <View style={styles.button}>
                <MaterialCommunityIcons.Button name="clipboard-edit"
                    size={18}
                    color="#cc0000"
                    backgroundColor={'transparent'}
                    underlayColor='#ffdddd'
                    onPress={handleEditPress}
                >Edit</MaterialCommunityIcons.Button>

                <MaterialCommunityIcons.Button
                name="trash-can-outline"
                size={18}
                color="#cc0000"
                backgroundColor={'transparent'}
                underlayColor='#ffdddd'
                onPress={handleDeletePress}
                >Delete</MaterialCommunityIcons.Button>
            </View>
        </View>
    )
}