import {
    Text,
    View,
    Switch,
    Pressable,
    Alert
} from "react-native";
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { deletePost, changeStatus } from "../../../redux/postSlice";
import * as database from "../../../database"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 

export default function PostItem({ id, description, color, category, completed, favorite, important, navigation }) {

    const dispatch = useDispatch()
    const handleEditPress = () => {
        navigation.navigate("Edit", { post: { id, description, category } });
    };
    const allowDeleted = useSelector((state) => state.sortnotes.allowDeleted)

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

    var cardStyle = styles.card;
    var textColor = styles.textColorBlack;

    if(completed) {
        cardStyle=[styles.card, styles.cardCompleted]
    } else if(color != "None") {
        textColor = styles.textColorWhite;
        if(color == "Yellow"){
            textColor = styles.textColorBlack;
            cardStyle=[styles.card, styles.cardColorYellow]
        }
        else if(color == "Green") {
            cardStyle=[styles.card, styles.cardColorGreen]
        }
        else if(color == "Blue") {
            cardStyle=[styles.card, styles.cardColorBlue]
        }
        else if(color == "Purple") {
            cardStyle=[styles.card, styles.cardColorPurple]
        }
    }

    return (
        <View style={cardStyle}>
            <View style={[styles.textContainer, styles.StartDesription]}>
                {
                    favorite ? <AntDesign style={styles.starIcon} name='star' size={18} color='#f6bb03' /> : <Text></Text>
                }
                {category == "Work" && (
                    <AntDesign name="carryout" size={18} color="black" />
                )}
                {category == "Study" && (
                    <Ionicons name="book-outline" size={18} color="black" />
                )}
                {category == "Personal" && (
                    <FontAwesome name="user-o" size={18} color="black" />
                )}
                
                {important && (
                    <AntDesign name="pushpino" size={18} color="black" />
                )}
            </View>
            <View style={styles.viewDes}><Text style={textColor} > {description}</Text></View>

            <View style={styles.button}>
                <MaterialCommunityIcons.Button name="circle-edit-outline"
                    size={18}
                    color="#cc0000"
                    backgroundColor={'transparent'}
                    underlayColor='#ffdddd'
                    onPress={handleEditPress}
                ></MaterialCommunityIcons.Button>

                {allowDeleted && (
                <MaterialCommunityIcons.Button
                name="trash-can-outline"
                size={18}
                color="#cc0000"
                backgroundColor={'transparent'}
                underlayColor='#ffdddd'
                onPress={handleDeletePress}
                ></MaterialCommunityIcons.Button>
                )}
            </View>
        </View>
    )
}