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
import { toggleAllowDelete } from "../../redux/preferenceSlice";
import styles from './styles'


export default function Preference() {

    // ((state) => {
    //     console.log("Store  State", state)
    //     return state.preference.allowDelete
    // })
    const allowDelete = useSelector((state) => state.preference.allowDelete)
    const dispatch = useDispatch()

    const handleAllowDeleteChange = () => {
        console.log("Allow delete changed")
        dispatch(toggleAllowDelete())
    }

    return (
        <View style={styles.container}> 
            <Text style={styles.title}>Preference</Text>
            <View style={styles.optionContainer}> 
                <Switch
                    value={allowDelete}
                    onValueChange={handleAllowDeleteChange}
                    />
                <Pressable onPress={handleAllowDeleteChange}>
                    <Text style={styles.optionText}>Allow delete posts</Text>
                </Pressable>
            </View>
        </View>
    )
}