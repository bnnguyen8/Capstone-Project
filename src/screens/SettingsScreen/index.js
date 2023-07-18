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
import Preference from "../../components/Preference";
import LocalNotification from "../../components/LocalNotification";
import PushNotification from "../../components/PushNotification";

export default function SettingsScreen() {
    return (
        <>
            <SortNotes />
            {/* <Preference /> */}
            {/* <LocalNotification /> */}
            {/* <PushNotification /> */}
        </>
    )
}