import {
	Text,
	View,
	Switch,
    ScrollView,
    Pressable,
    TouchableOpacity,
    Linking,
    Alert
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from './styles'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompleted, changeColor, changeFavorite, changeImportant } from "../../redux/postSlice";
import * as database from "../../database"
import { AntDesign } from '@expo/vector-icons';
import { setPosts } from "../../redux/postSlice";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const colors = ['None', 'Yellow', 'Green', 'Blue', 'Purple'];

export default function Detail({ route }) {

    var { post } = route.params

    const dispatch = useDispatch()

    const [selectedColor, setSelectedColor] = useState(post.color);
    const [important, setImportant] = useState(post.important);
    const [fav, setFav] = useState(post.favorite);
    const [completed, setCompleted] = useState(post.completed);

    const handleFavoriteChange = async () => {
        setFav(!fav)
        const data = {
            id: post.id,
            favorite: !fav
        }
        dispatch(changeFavorite(data))

        // to avoid corruption
        const updated = await database.update(post.id, {favorite: !fav})
        if (!updated) {
            const data = {
                id: post.id,
                favorite: fav
            }
            dispatch(changeFavorite(data))
            Alert.alert("Error", "Error updating")
        }
    }

    const handleCompletedChange = async () => {
        setCompleted(!completed)
        const data = {
            id: post.id,
            completed: !completed
        }
        
        dispatch(changeCompleted(data))

        const updated = await database.update(post.id, {completed: !completed})
        if (!updated) {
            const data = {
                id: post.id,
                completed: completed
            }
            dispatch(changeCompleted(data))
            Alert.alert("Error", "Error updating")
        }
    }

    const handleColorChange = async (color) => {
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
        setImportant(!important)
        const data = {
            id: post.id,
            important: !important
        }
        dispatch(changeImportant(data))

        const updated = await database.update(post.id, {important: !important})

        var posts = await database.load();
        dispatch(setPosts(posts));
    }

    const handleSendEmail = () => {
        if (post.description) {
          const emailSubject = "My Note";
          const emailBody = post.description;
          const emailAddress = ""; // Enter the recipient email address if you want to pre-fill it
    
          // Create the email URL
          const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
          // Open the email client with the pre-filled data
          Linking.canOpenURL(emailUrl)
            .then((supported) => {
              if (!supported) {
                Alert.alert("Error", "Email is not supported on this device.");
              } else {
                return Linking.openURL(emailUrl);
              }
            })
            .catch((err) => {
              Alert.alert("Error", "An error occurred while trying to send the email.");
            });
        } else {
          Alert.alert("Error", "Post description is empty.");
        }
      };

    const lightTemplate = useSelector((state) => state.sortnotes.lightTemplate)
    if(!lightTemplate) {
		var cardStyle=styles.containerDarkTheme
    }else{
        var cardStyle = styles.containerLightTheme
    }

    return (
		<>
        <View style={cardStyle}>
        	<View style={styles.container}>
                <View style={styles.body}>
                    <ScrollView>
                        <View style={styles.switch}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            {fav && (
                                <AntDesign style={styles.starIcon} name='star' size={18} color='#f6bb03' />
                            )}

                            {post.category == "Work" && (
                                <AntDesign name="carryout" size={18} color="black" />
                            )}
                            {post.category == "Study" && (
                                <Ionicons name="book-outline" size={18} color="black" />
                            )}
                            {post.category == "Personal" && (
                                <FontAwesome name="user-o" size={18} color="black" />
                            )}
                            </View>
                        </View>
                        <Text style={styles.description}>{post.description}</Text>
                    </ScrollView>
                </View>

                <View style={styles.switch}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
    
                    {colors.map((color) => (
                        <TouchableOpacity key={color} style={styles.TouchMe} onPress={() => handleColorChange(color)}>
                            <Text>
                                <Ionicons name={selectedColor === color ? "radio-button-on" : "radio-button-off"} size={18} color={color.toLowerCase()} />
                                <Text>{color}</Text>
                            </Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                </View>

                <View style={styles.switch}>
                    <Switch
                        value={fav}
                        onValueChange={handleFavoriteChange}
                        />
                    <Pressable onPress={handleFavoriteChange}>
                        <Text style={styles.switchText }>Favorite</Text>
                    </Pressable>
                </View>
                <View style={styles.switch}>
                    <Switch style={styles.firstswitch}
                        value={completed}
                        onValueChange={handleCompletedChange}
                        />
                    <Pressable onPress={handleCompletedChange}>
                        <Text style={styles.switchText }>Completed</Text>
                    </Pressable>
                </View>
                <View style={styles.switch}>
                    <Switch style={styles.firstswitch}
                        value={important}
                        onValueChange={handleImportantChange}
                        />
                    <Pressable onPress={handleImportantChange}>
                        <Text style={styles.switchText }>
                        {!post.important ? "Pin this note to top" : "Pinned"}
                        </Text>
                    </Pressable>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
                <View style={styles.SendEmail}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>     
                        <MaterialCommunityIcons name="email-send-outline" size={24} color="black" />
                        <Text style={styles.buttonText}>Send email</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}