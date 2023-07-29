import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import { useEffect, useState } from "react";
import styles from './styles'
import { updatePost } from "../../redux/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadById } from "../../database";
import * as database from "../../database"
import { primaryColor } from "../../includes/variables";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function Edit({navigation, route}) {

    const { id, description, category } = route.params.post;

    const [updatedId, setUpdatedId] = useState(id);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const [errorMessages, setErrorMessages] = useState([])
    const [savingData, setSavingData] = useState(false)
    const [loadingData, setLoadingData] = useState(true)
    const [updateCategory, setUpdateCategory] = useState(category)

    const dispatch = useDispatch()

    const handleSavePress = async () => {
        const validate = []

        if(description === '') {
            validate.push('The content is required')
        }

        if(validate.length > 0) {
            console.log('Invalid:', validate)
            setErrorMessages(validate)
        } else {
            const data = {
                description: updatedDescription,
                category: updateCategory,
                modified: new Date().toISOString(),
            }

            // setSavingData(true)
            const saveInfo = await database.update(updatedId, data)
            // setSavingData(false)
            // return
            if (saveInfo) {

                setErrorMessages([])
                dispatch(updatePost({
                    id: updatedId,
                    description: updatedDescription,
                    category: updateCategory,
                    modified: new Date().toISOString(),
                }))

                // Go back to the list
                // PostList
                navigation.goBack()
            } else {
                setErrorMessages(['Error saving the post. Try again later'])
            }
        }
    }

    if (savingData) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color={primaryColor} />
                <Text style={styles.loadingText}>Loading...</Text>
                <Text style={styles.loadingText}>Please wait</Text>
            </View>
        ) 
    }

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
                    <Text style={styles.label}>Note:</Text>
                    {errorMessages.length > 0 && (
                        <View>
                            <Text style={styles.errorMessageItem}>{errorMessages}</Text>
                            {
                                errorMessages.map((message, index) => {
                                    <Text key={index} style={styles.errorMessageItem}>- {message}</Text>
                                })
                            }
                        </View>
                    )}
                    <TextInput
                        style={[styles.textInput, styles.textInputDescription]}
                        multiline={true}
                        value={updatedDescription}
                        onChangeText={setUpdatedDescription}
                    />

                    <View style={styles.switch}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity key="Work" style={styles.TouchMe} onPress={() => setUpdateCategory("Work")}>
                                <Text>
                                    <Ionicons name={updateCategory === "Work" ? "radio-button-on" : "radio-button-off"} size={18} />
                                    <AntDesign name="carryout" size={18} color="black"  style={styles.IconCat} />
                                    <Text> Work</Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity key="Study" style={styles.TouchMe} onPress={() => setUpdateCategory("Study")}>
                                <Text>
                                    <Ionicons name={updateCategory === "Study" ? "radio-button-on" : "radio-button-off"} size={18} />
                                    <Ionicons name="book-outline" size={18} color="black" />
                                    <Text> Study</Text>
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity key="Personal" style={styles.TouchMe} onPress={() => setUpdateCategory("Personal")}>
                                <Text>
                                    <Ionicons name={updateCategory === "Personal" ? "radio-button-on" : "radio-button-off"} size={18} />
                                    <FontAwesome name="user-o" size={18} color="black" />
                                    <Text> Personal</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button title='Update' onPress={handleSavePress} />
                </View>
            </View>
        </>
    )
}