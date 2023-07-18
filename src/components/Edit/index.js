import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import styles from './styles'
import { updatePost } from "../../redux/postSlice";
import { useDispatch } from "react-redux";
import { loadById } from "../../database";
import * as database from "../../database"
import { primaryColor } from "../../includes/variables";

export default function Edit({navigation, route}) {

    const { id, description } = route.params.post;

    const [updatedId, setUpdatedId] = useState(id);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const [errorMessages, setErrorMessages] = useState([])
    const [savingData, setSavingData] = useState(false)
    const [loadingData, setLoadingData] = useState(true)

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
                modified: new Date().toISOString(),
            }

            setSavingData(true)
            const saveInfo = await database.update(updatedId, data)
            setSavingData(false)
            if (saveInfo) {

                setErrorMessages([])
                dispatch(updatePost({
                    id: updatedId,
                    description: updatedDescription,
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

    return (
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

            <Button title='Save' onPress={handleSavePress} />
        </View>
    )
}