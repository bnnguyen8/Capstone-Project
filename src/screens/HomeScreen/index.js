import { useEffect } from "react";
import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ScrollView,
} from "react-native";
import Summary from "../../components/Summary";
import styles from './styles'

export default function HomeScreen( {navigation} ) {

    // const handleButtonPress = () => {
    //     console.log('Button pressed')
    //     navigation.navigate('SettingsScreen')
    // }

    return (
        <>
            <Text style={styles.status}>Welcome to my app</Text>
            {/* <Button title="Settings" onPress={handleButtonPress} /> */}
            <Summary />
        </>
    )
}