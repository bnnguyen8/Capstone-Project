import { useEffect } from "react";
import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ScrollView,
} from "react-native";
import styles from './styles'
import SortNotes from "../../components/SortNotes";
import ResetDatabase from "../../components/ResetDatabase";
import Preference from "../../components/Preference";
import LocalNotification from "../../components/LocalNotification";
import PushNotification from "../../components/PushNotification";
import { useDispatch, useSelector } from "react-redux";

export default function SettingsScreen() {

    const lightTemplate = useSelector((state) => state.sortnotes.lightTemplate)
    if(!lightTemplate) {
		var cardStyle=styles.containerDarkTheme
        var cardStyleContainer=styles.containerSubDarkTheme
    }else{
        var cardStyle = styles.containerLightTheme
        var cardStyleContainer=styles.containerSubLightTheme
    }

    return (
		<>
            <View style={cardStyle}>
        	    <View style={cardStyleContainer}>
                    <SortNotes />
                    <ResetDatabase />
                    {/* <Preference /> */}
                    {/* <LocalNotification /> */}
                    {/* <PushNotification /> */}
                </View>
            </View>
        </>
    )
}