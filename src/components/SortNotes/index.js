import { useEffect } from "react";
import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ScrollView,
    Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleCreatedModified, togglelightTemplate } from "../../redux/sortnotesSlice";
import styles from './styles'

import * as database from "../../database"
import { setPosts } from "../../redux/postSlice";


export default function SortNotes() {

    const sortModified = useSelector((state) => state.sortnotes.sortModified)
    const lightTemplate = useSelector((state) => state.sortnotes.lightTemplate)
    
    const dispatch = useDispatch()

    const handleSortNotes = async () => {
        dispatch(toggleCreatedModified())

        if(!sortModified){
            var posts = await database.load();
        } else {
            var posts = await database.loadByCreated();
        }
        dispatch(setPosts(posts));
    }

    const handleLightTheme = async () => {
        dispatch(togglelightTemplate())
    }

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Preferences:</Text>
            <View style={styles.optionContainer}> 
                <Switch
                    value={sortModified}
                    onValueChange={handleSortNotes}
                    />
                <Pressable onPress={handleSortNotes}>
                    <Text style={styles.optionText}>
                    {sortModified ? "Sort by modified desc" : "Sort by created desc"}
                    </Text>
                </Pressable>
            </View>
            <View style={styles.optionContainer}> 
                <Switch
                    value={lightTemplate}
                    onValueChange={handleLightTheme}
                    />
                <Pressable onPress={handleLightTheme}>
                    <Text style={styles.optionText}>
                    {lightTemplate ? "Light background" : "Dark background"}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}