import {
	Text,
	View,
    TextInput,
    Button,
    ActivityIndicator,
} from "react-native";
import { useState } from "react";
import styles from './styles'
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postSlice";
import * as database from "../../database"
import { primaryColor } from "../../includes/variables";

export default function Form({navigation, route }) {

    const [description, setDescription] = useState('')
    const [errorMessages, setErrorMessages] = useState([])
    const [savingData, setSavingData] = useState(false)
    
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
                description,
                created: new Date().toISOString(),
                modified: new Date().toISOString(),
                color: "None",
                completed: false,
                favorite: false,
                important: false,
            }
            setSavingData(true)
            const id = await database.save(data)
            setSavingData(false)
            if (id) {
                data.id = id
                dispatch(addPost(data))

                // Reset the form
                setDescription('')
                setErrorMessages([])

                // Go back to the list
                navigation.goBack()
            } else {
                setErrorMessages(['Error saving the post. Try again later.'])
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
                // placeholder='Description'
                multiline={true}
                value={description}
                onChangeText={setDescription}
            />
            <Button title='Save' onPress={handleSavePress} />
        </View>
    )
}